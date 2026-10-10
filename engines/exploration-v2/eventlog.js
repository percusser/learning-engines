// The event log — the whole contract between an engine and anything that wants
// to replay a run against another run.
//
// This module is deliberately standalone: no imports, no engine types, no
// content types, no DOM, and no clock of its own. An engine appends entries; a
// replay lines two logs up and names where they parted; neither needs to know
// anything else about the other.
//
// The design rule that matters: an entry records a CHOICE COMMITTED, not a
// control operated. There is no 'moved', no 'looked at', no 'pressed E'. A
// learner who walked the same room twice as slowly, or in the opposite
// direction, made the same run, and the only thing a side-by-side replay can
// honestly say is "here is where the expert picked one option and you picked
// another". `t` exists to line the two up on a shared clock — never to decide
// whether they agree, and neither does the order the entries were appended
// in: runs are compared on `at` (see divergence).
//
// The engine supplies `t`, always as milliseconds since ITS run started. This
// module never reads a wall clock, which is the whole reason a log is
// replayable, testable, and identical every time it is written.
/** SCORM 2004 4th ed. SPM for cmi.suspend_data — the budget a log lives in. */
export const SUSPEND_LIMIT = 64000;
/**
 * `t` is rounded because sub-millisecond precision is noise that costs ten
 * characters an entry in a 64000-character budget, and nothing reads it.
 */
export function entry(t, at, pick) {
    return { t: Math.max(0, Math.round(t)), at, pick };
}
/**
 * A log as one string, small enough for cmi.suspend_data. Rows are tuples
 * rather than objects: the keys are the same three every time and repeating
 * them would spend a fifth of the budget on the word "pick".
 *
 * Over budget, the tail is dropped rather than the head: a prefix of a log is
 * still a valid log, and it diverges from the full run in exactly the same
 * place. Upgrade path, if runs ever get long enough to lose something that
 * matters: keep every Nth entry instead of the first N.
 */
export function serialize(log, limit = SUSPEND_LIMIT) {
    const rows = log.map((e) => [e.t, e.at, e.pick]);
    let out = JSON.stringify(rows);
    // One proportional cut before the one-at-a-time loop, so a log ten times the
    // budget does not cost ten thousand re-serializations to trim.
    if (out.length > limit) {
        rows.length = Math.floor(rows.length * (limit / out.length));
        out = JSON.stringify(rows);
    }
    while (out.length > limit && rows.length > 0) {
        rows.pop();
        out = JSON.stringify(rows);
    }
    return out;
}
/**
 * The inverse, hardened: what comes back from an LMS is whatever was there
 * last session, which may be truncated, from an older build, or not a log at
 * all. A malformed row is dropped rather than thrown on — half a log replays,
 * an exception at boot loses the run.
 */
export function parse(text) {
    let rows;
    try {
        rows = JSON.parse(text);
    }
    catch {
        return [];
    }
    if (!Array.isArray(rows))
        return [];
    const out = [];
    for (const row of rows) {
        if (!Array.isArray(row) || row.length !== 3)
            continue;
        const [t, at, pick] = row;
        if (typeof t !== 'number' || !Number.isFinite(t))
            continue;
        if (typeof at !== 'string' || typeof pick !== 'string')
            continue;
        out.push({ t, at, pick });
    }
    return out;
}
/**
 * Index, into the FIRST log, of the first decision point where two runs
 * parted, or -1 when they made every call the same. This is the number the
 * replay scrubs to.
 *
 * Runs are lined up on `at`, never on array position. Position is the order a
 * learner reached the decision points in, and that order is not a choice: a
 * free-roam room is walked in whatever route the learner takes, and an engine
 * that interleaves world-drawn events puts them wherever its timer happened to
 * fire. Comparing by index would report those as disagreements, which is the
 * one thing this format exists not to do.
 *
 * Time is not compared either. Two learners who reach the same decision and
 * pick the same option agree, however long one of them stood there thinking.
 * A point the other run never reached parts them there, so a run that simply
 * stopped early still diverges where it ran out.
 *
 * ponytail: one entry per `at` — a repeat visit to a decision point would
 * compare against only the last call made there. Key `at` with an ordinal if a
 * point ever becomes answerable twice.
 */
export function divergence(a, b) {
    const picks = new Map(b.map((e) => [e.at, e.pick]));
    for (let i = 0; i < a.length; i++) {
        if (picks.get(a[i].at) !== a[i].pick)
            return i;
    }
    // Every call in `a` was matched; if `b` made more, they part at the end of `a`.
    return a.length === b.length ? -1 : a.length;
}

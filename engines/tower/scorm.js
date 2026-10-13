// SCORM 2004 4th edition, from the engine's side of the wall.
//
// Every engine ships as a single SCO. It reports three things and nothing
// else: whether the learner finished, what they scored, and enough state to
// put them back where they were. That is the whole contract — an engine
// should never need to know a data-model key exists.
//
// Two rules this file exists to enforce:
//
//   1. No backend. There is no fetch, no XHR, no endpoint here. SCORM talks to
//      a JavaScript object the LMS put in a parent window, which is why a
//      package needs no server of ours behind it. See docs/adr/0001. (A page
//      pulling a library off a CDN is a different thing and is fine.)
//   2. No LMS is not an error. Opened from a file, a dev server or a preview,
//      every call below becomes a no-op and the engine runs exactly as it
//      does in an LMS. An engine must never branch on "am I in SCORM".
/** SCORM 2004 4th ed. SPM for cmi.suspend_data. Beyond it, an LMS may truncate. */
export const SUSPEND_LIMIT = 64000;
/**
 * Find the API object. The LMS opens the SCO in a frame or a popup and hangs
 * `API_1484_11` on an ancestor, so the search is: up the frame chain, then the
 * opener, then the opener's chain.
 *
 * ponytail: depth-capped walk rather than the full ADL reference algorithm.
 * The cap is what stops a self-referencing `window.parent` spinning forever.
 */
function findApi(from, depth = 0) {
    if (!from || depth > 20)
        return null;
    try {
        const found = from.API_1484_11;
        if (found)
            return found;
        const up = from.parent && from.parent !== from ? from.parent : null;
        return findApi(up, depth + 1) ?? (depth === 0 ? findApi(from.opener ?? null, 1) : null);
    }
    catch {
        // A cross-origin parent can deny property access. The engine remains
        // usable in offline mode when the LMS API cannot be reached.
        return null;
    }
}
/** Every call is a no-op and `resumeData()` is always null. */
const OFFLINE = {
    connected: false,
    resumeData: () => null,
    save: () => { },
    finish: () => { },
};
/**
 * Connect once, at engine start. Returns the offline stub when there is no
 * LMS, so the caller never has to null-check.
 */
export function connectScorm() {
    const api = typeof window === 'undefined' ? null : findApi(window);
    if (!api)
        return OFFLINE;
    if (api.Initialize('') !== 'true')
        return OFFLINE;
    const started = Date.now();
    let terminated = false;
    let finished = false;
    const set = (key, value) => {
        api.SetValue(key, value);
    };
    // Resume only counts if the LMS says this is a resumed attempt. A fresh
    // attempt can still carry stale suspend_data on some LMSs; honouring it
    // would silently drop a learner into a run they thought they had restarted.
    const entry = api.GetValue('cmi.entry');
    const suspended = api.GetValue('cmi.suspend_data');
    const resume = entry === 'resume' && suspended ? suspended : null;
    // Until the engine says otherwise, an interrupted run is one to come back
    // to rather than one to start over.
    set('cmi.exit', 'suspend');
    set('cmi.completion_status', 'incomplete');
    api.Commit('');
    const close = () => {
        if (terminated)
            return;
        terminated = true;
        set('cmi.session_time', iso8601(Date.now() - started));
        api.Commit('');
        api.Terminate('');
    };
    // The learner closing the tab is the normal way a run ends, not an error.
    // pagehide fires where beforeunload does not (mobile Safari, bfcache).
    window.addEventListener('pagehide', close);
    return {
        connected: true,
        resumeData: () => resume,
        save(data) {
            if (terminated)
                return;
            set('cmi.exit', 'suspend');
            // Truncating here rather than letting the LMS do it silently: a
            // half-written state string would deserialize into a corrupt run.
            set('cmi.suspend_data', data.length > SUSPEND_LIMIT ? data.slice(0, SUSPEND_LIMIT) : data);
            api.Commit('');
        },
        finish(result = {}) {
            if (terminated || finished)
                return;
            finished = true;
            set('cmi.completion_status', 'completed');
            if (result.score !== undefined && result.max !== undefined) {
                const min = result.min ?? 0;
                const span = result.max - min;
                set('cmi.score.min', String(min));
                set('cmi.score.max', String(result.max));
                set('cmi.score.raw', String(result.score));
                // scaled is what a 2004 gradebook actually reads. Clamped because the
                // data model rejects anything outside [-1, 1] and a rejected SetValue
                // would leave the attempt with no grade at all.
                if (span > 0)
                    set('cmi.score.scaled', String(clamp((result.score - min) / span, -1, 1)));
            }
            if (result.passed !== undefined)
                set('cmi.success_status', result.passed ? 'passed' : 'failed');
            // A finished run is not a suspended one: the next launch starts clean.
            set('cmi.exit', 'normal');
            set('cmi.suspend_data', '');
            api.Commit('');
        },
    };
}
function clamp(n, lo, hi) {
    return n < lo ? lo : n > hi ? hi : n;
}
/** Milliseconds as the ISO 8601 duration cmi.session_time requires. */
export function iso8601(ms) {
    const total = Math.max(0, Math.round(ms / 1000));
    const h = Math.floor(total / 3600);
    const m = Math.floor((total % 3600) / 60);
    const s = total % 60;
    return `PT${h > 0 ? `${h}H` : ''}${m > 0 ? `${m}M` : ''}${s}S`;
}

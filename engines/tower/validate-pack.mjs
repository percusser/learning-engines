// Validates a content pack against what engines/tower/index.html actually reads.
// Plain Node import: no DOM access here. See content-packs/README.md for the contract.
const isStr = v => typeof v === 'string' && v.length > 0;
const isNum = v => typeof v === 'number' && Number.isFinite(v);
const isArr = v => Array.isArray(v);

/** Every chain of blocks, one per level, each following the block below it and each
 *  backed by a different quote. The pack must have exactly one — this is the engine's
 *  answer key, and the walk that finds it is also how the engine itself judges a play.
 *  check-content.mjs re-exports this to print it as a build-time sanity check. */
export function findChains(pack) {
  const levels = isArr(pack?.levels) ? pack.levels.length : 0;
  const blocks = isArr(pack?.blocks) ? pack.blocks : [];
  const byLevel = i => blocks.filter(b => b?.level === i);
  const found = [];
  (function walk(i, chain, used) {
    if (i === levels) { found.push(chain.map(c => `${c.b.id}(${c.q})`).join(' > ')); return; }
    for (const b of byLevel(i)) {
      if (i > 0 && !b.follows?.includes(chain[i - 1].b.id)) continue;
      for (const q of (b.supports || [])) {
        if (used.has(q)) continue;
        walk(i + 1, [...chain, { b, q }], new Set([...used, q]));
      }
    }
  })(0, [], new Set());
  return found;
}

function checkBlock(b, levelCount, evidenceIds, blockIds, problems) {
  const tag = `block "${b && b.id}"`;
  if (!isStr(b?.id)) { problems.push('block: missing string id'); return; }
  if (!isNum(b.level) || b.level < 0 || b.level >= levelCount) problems.push(`${tag}: level must be a number 0-${levelCount - 1}`);
  if (!isStr(b.claim)) problems.push(`${tag}: claim must be a non-empty string`);
  if (!isStr(b.gist)) problems.push(`${tag}: gist must be a non-empty string`);
  if (!isStr(b.pushback)) problems.push(`${tag}: pushback must be a non-empty string`);
  if (!isStr(b.hold)) problems.push(`${tag}: hold must be a non-empty string`);
  if (!isArr(b.supports)) problems.push(`${tag}: supports must be an array (may be empty)`);
  else for (const id of b.supports) if (!evidenceIds.has(id)) problems.push(`${tag}: supports references unknown evidence id "${id}"`);
  if (b.level > 0) {
    if (!isArr(b.follows) || !b.follows.length) problems.push(`${tag}: follows must be a non-empty array (level > 0)`);
    else for (const id of b.follows) if (!blockIds.has(id)) problems.push(`${tag}: follows references unknown block id "${id}"`);
    if (!isStr(b.snap)) problems.push(`${tag}: snap must be a non-empty string (level > 0)`);
  }
}

export function validatePack(pack) {
  const problems = [];
  if (!pack || typeof pack !== 'object') return ['pack must be an object'];

  if (!isStr(pack.id)) problems.push('id is required');
  if (!isStr(pack.title)) problems.push('title is required');
  for (const f of ['subtitle', 'situation', 'goal', 'exec', 'execShort']) {
    if (!isStr(pack[f])) problems.push(`${f} must be a non-empty string`);
  }

  if (!isArr(pack.levels) || pack.levels.length < 2) problems.push('levels must be an array of at least 2 entries');
  else pack.levels.forEach((lv, i) => {
    const tag = `levels[${i}]`;
    if (!isStr(lv?.id)) problems.push(`${tag}: id must be a non-empty string`);
    if (!isStr(lv?.name)) problems.push(`${tag}: name must be a non-empty string`);
    if (!isStr(lv?.hint)) problems.push(`${tag}: hint must be a non-empty string`);
  });

  if (!isArr(pack.evidence) || !pack.evidence.length) problems.push('evidence must be a non-empty array');
  else pack.evidence.forEach((e, i) => {
    const tag = `evidence[${i}]`;
    for (const f of ['id', 'code', 'who', 'short', 'when', 'where', 'quote']) {
      if (!isStr(e?.[f])) problems.push(`${tag}: ${f} must be a non-empty string`);
    }
  });

  if (!isArr(pack.blocks) || !pack.blocks.length) problems.push('blocks must be a non-empty array');

  if (isArr(pack.levels) && isArr(pack.evidence) && isArr(pack.blocks)) {
    const evidenceIds = new Set(pack.evidence.map(e => e?.id).filter(Boolean));
    const blockIds = new Set(pack.blocks.map(b => b?.id).filter(Boolean));
    const dupeE = pack.evidence.map(e => e?.id).filter((id, i, a) => id && a.indexOf(id) !== i);
    if (dupeE.length) problems.push(`duplicate evidence ids: ${[...new Set(dupeE)].join(', ')}`);
    const dupeB = pack.blocks.map(b => b?.id).filter((id, i, a) => id && a.indexOf(id) !== i);
    if (dupeB.length) problems.push(`duplicate block ids: ${[...new Set(dupeB)].join(', ')}`);

    pack.blocks.forEach(b => checkBlock(b, pack.levels.length, evidenceIds, blockIds, problems));

    for (let i = 0; i < pack.levels.length; i++) {
      if (!pack.blocks.some(b => b?.level === i)) problems.push(`no block has level ${i}`);
    }

    if (!problems.length) {
      const chains = findChains(pack);
      if (chains.length !== 1) problems.push(`pack must have exactly one valid chain (bottom to top, each backed by a distinct quote); found ${chains.length}${chains.length ? ':\n  ' + chains.join('\n  ') : ''}`);
    }
  }

  // Word list (README "Words"): one name for each thing, so learner-facing pack text may not bring back
  // the retired words (step for level, story for case, peg for quote, standing for held).
  const RETIRED = /\b(steps?|story|pegs?|standing|stood)\b/i;
  const texts = [
    ...['subtitle', 'situation', 'goal', 'ask', 'askHelp', 'exec', 'execShort'].map(f => [f, pack[f]]),
    ...(isArr(pack.levels) ? pack.levels.flatMap((lv, i) => [[`levels[${i}].name`, lv?.name], [`levels[${i}].hint`, lv?.hint]]) : []),
    ...(isArr(pack.evidence) ? pack.evidence.flatMap(e => ['who', 'short', 'where', 'quote'].map(f => [`evidence "${e?.id}" ${f}`, e?.[f]])) : []),
    ...(isArr(pack.blocks) ? pack.blocks.flatMap(b => ['claim', 'gist', 'pushback', 'snap', 'hold'].map(f => [`block "${b?.id}" ${f}`, b?.[f]])) : []),
  ];
  for (const [where, t] of texts) {
    const m = typeof t === 'string' && t.match(RETIRED);
    if (m) problems.push(`${where} uses "${m[0]}"; say level, case, quote or held instead (README "Words")`);
  }

  if (pack.theme !== undefined) {
    if (pack.theme.pack !== undefined && !isStr(pack.theme.pack)) problems.push('theme.pack must be a string');
    if (pack.theme.colors !== undefined) {
      if (typeof pack.theme.colors !== 'object' || pack.theme.colors === null) problems.push('theme.colors must be an object');
      else for (const [k, v] of Object.entries(pack.theme.colors)) if (!isStr(v)) problems.push(`theme.colors.${k} must be a string`);
    }
  }

  return problems;
}

// Validates a content pack against what engines/scale/index.html actually reads.
// Plain Node import: no DOM access here. See content-packs/README.md for the contract.
const TAKES = new Set(['us', 'them', 'split']);
// The first sentence of a candidate's `hears`, by bias. The engine maps 0-1 to "fair", 2 to "pitch", 3 to "sheet".
const BANDS = ['Their own words.', 'A fair test.', 'Close to your pitch.', 'Straight off your data sheet.'];
const isStr = v => typeof v === 'string' && v.length > 0;
const isNum = v => typeof v === 'number' && Number.isFinite(v);

function checkCriterion(c, kind, problems) {
  const tag = `${kind} "${c && c.id}"`;
  if (!isStr(c?.id)) return problems.push(`${kind}: missing string id`);
  if (!isStr(c.stamp)) problems.push(`${tag}: stamp must be a non-empty string`);
  if (!isNum(c.w) || c.w < 1 || c.w > 3) problems.push(`${tag}: w must be a number 1-3`);
  if (!TAKES.has(c.takes)) problems.push(`${tag}: takes must be 'us', 'them' or 'split'`);
  if (kind === 'stated') {
    for (const f of ['said', 'matters', 'note']) if (!isStr(c[f])) problems.push(`${tag}: ${f} must be a non-empty string`);
  } else {
    if (!Number.isInteger(c.bias) || c.bias < 0 || c.bias > 3) problems.push(`${tag}: bias must be a whole number 0-3`);
    if (typeof c.known !== 'boolean') problems.push(`${tag}: known must be a boolean`);
    for (const f of ['measures', 'hears', 'theirs', 'say']) if (!isStr(c[f])) problems.push(`${tag}: ${f} must be a non-empty string`);
    // The engine shows the first sentence of `hears` after placement as the band the learner's read is checked against.
    if (isStr(c.hears) && Number.isInteger(c.bias) && BANDS[c.bias]) {
      const first = c.hears.split('.')[0] + '.';
      if (first !== BANDS[c.bias]) problems.push(`${tag}: hears must start with "${BANDS[c.bias]}" for bias ${c.bias} (it starts with "${first}")`);
    }
  }
}

export function validatePack(pack) {
  const problems = [];
  if (!pack || typeof pack !== 'object') return ['pack must be an object'];

  if (!isStr(pack.id)) problems.push('id is required');
  if (!isStr(pack.title)) problems.push('title is required');
  if (!isStr(pack.industry)) problems.push('industry is required (the buyer\'s setting, e.g. "a regional bank")');
  if (!isStr(pack.category)) problems.push('category is required (what is being bought, e.g. "SIEM")');

  for (const side of ['us', 'them']) {
    const v = pack[side];
    if (!v || !isStr(v.name) || !isStr(v.short)) problems.push(`${side} must be { name, short } strings`);
  }

  const cred = pack.cred || {};
  if (!isNum(cred.start) || cred.start < 0 || cred.start > 100) problems.push('cred.start must be a number 0-100');
  if (!isNum(cred.perBias) || cred.perBias < 0) problems.push('cred.perBias must be a number >= 0');
  if (!isNum(cred.threshold) || cred.threshold < 0 || cred.threshold > 100) problems.push('cred.threshold must be a number 0-100');

  if (!isNum(pack.swing) || pack.swing <= 0) problems.push('swing must be a positive number');

  if (!Array.isArray(pack.stated) || pack.stated.length < 1) problems.push('stated must be a non-empty array');
  if (!Array.isArray(pack.candidates) || pack.candidates.length < 1) problems.push('candidates must be a non-empty array');

  if (Array.isArray(pack.stated)) pack.stated.forEach(c => checkCriterion(c, 'stated', problems));
  if (Array.isArray(pack.candidates)) pack.candidates.forEach(c => checkCriterion(c, 'candidates', problems));

  if (Array.isArray(pack.stated) && Array.isArray(pack.candidates)) {
    const ids = [...pack.stated, ...pack.candidates].map(c => c?.id).filter(Boolean);
    const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
    if (dupes.length) problems.push(`duplicate criterion ids: ${[...new Set(dupes)].join(', ')}`);

    if (!isNum(pack.maxPlace) || pack.maxPlace < 1) problems.push('maxPlace must be a number >= 1');
    else if (pack.maxPlace > pack.candidates.length) problems.push(`maxPlace (${pack.maxPlace}) cannot exceed the candidates pool (${pack.candidates.length})`);
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

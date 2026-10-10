// Content pack validator for the tuner engine.
// export function validatePack(pack): string[] — [] means the pack is good.
// Mirrors content-packs/README.md's contract. Checked at import under plain
// node (no DOM touched here) and again at runtime before the engine boots.

export function validatePack(pack) {
  const problems = [];
  const fail = (msg) => problems.push(msg);

  if (!pack || typeof pack !== 'object') return ['pack must be an object'];
  if (typeof pack.id !== 'string' || !pack.id) fail('pack.id must be a non-empty string');
  if (typeof pack.title !== 'string' || !pack.title) fail('pack.title must be a non-empty string');

  const stations = pack.stations;
  if (!Array.isArray(stations) || stations.length < 1) {
    fail('pack.stations must be a non-empty array');
    return problems; // nothing else can be checked without stations
  }
  const stationIds = new Set();
  stations.forEach((s, i) => {
    const where = `stations[${i}]`;
    if (!s || typeof s !== 'object') { fail(`${where} must be an object`); return; }
    if (typeof s.id !== 'string' || !s.id) fail(`${where}.id must be a non-empty string`);
    else if (stationIds.has(s.id)) fail(`${where}.id "${s.id}" is a duplicate`);
    else stationIds.add(s.id);
    if (typeof s.name !== 'string' || !s.name) fail(`${where}.name must be a non-empty string`);
    if (typeof s.short !== 'string' || !s.short) fail(`${where}.short must be a non-empty string`);
    if (typeof s.f !== 'number' || !(s.f >= 0 && s.f <= 1)) fail(`${where}.f must be a number between 0 and 1`);
    if (typeof s.points !== 'string' || !s.points) fail(`${where}.points must be a non-empty string`);
    if (typeof s.tells !== 'string' || !s.tells) fail(`${where}.tells must be a non-empty string`);
    if (typeof s.leaves !== 'string') fail(`${where}.leaves must be a string`);
  });

  if (typeof pack.hidden !== 'string' || !pack.hidden) fail('pack.hidden must be a non-empty string');
  else if (!stationIds.has(pack.hidden)) fail(`pack.hidden "${pack.hidden}" does not match any station id`);

  const phrases = pack.phrases;
  if (!Array.isArray(phrases) || phrases.length < 1) {
    fail('pack.phrases must be a non-empty array');
    return problems;
  }
  phrases.forEach((p, i) => {
    const where = `phrases[${i}]`;
    if (!p || typeof p !== 'object') { fail(`${where} must be an object`); return; }
    if (typeof p.text !== 'string' || !p.text) fail(`${where}.text must be a non-empty string`);
    if (typeof p.src !== 'string' || !p.src) fail(`${where}.src must be a non-empty string`);
    else if (!stationIds.has(p.src)) fail(`${where}.src "${p.src}" does not match any station id`);
    if (typeof p.why !== 'string' || !p.why) fail(`${where}.why must be a non-empty string`);

    const reframes = p.reframes;
    if (!Array.isArray(reframes) || reframes.length < 2) {
      fail(`${where}.reframes must be an array with at least 2 options`);
      return;
    }
    let answerCount = 0;
    reframes.forEach((r, k) => {
      const rw = `${where}.reframes[${k}]`;
      if (!r || typeof r !== 'object') { fail(`${rw} must be an object`); return; }
      if (typeof r.label !== 'string' || !r.label) fail(`${rw}.label must be a non-empty string`);
      if (typeof r.line !== 'string' || !r.line) fail(`${rw}.line must be a non-empty string`);
      if (typeof r.answers !== 'boolean') fail(`${rw}.answers must be a boolean`);
      else if (r.answers) answerCount++;
    });
    if (answerCount !== 1) fail(`${where}.reframes must have exactly one option with answers:true (found ${answerCount})`);
  });

  return problems;
}

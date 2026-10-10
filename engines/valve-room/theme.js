// Theme packs — the stencil-and-brass look, as swappable data.
// See ../../layers/theme/registry.ts for the pattern this follows (lookup +
// default + never-crash fallback). No build step: plain module, no import
// from registry.ts itself so this engine stays no-build.
const PACKS = {
  default: {
    cream: '#EBDDB8',   // CSS text / gauge face
    brass: '#C99A4B',   // CSS accent (counter numerals)
    red:   '#B8302A',   // CSS danger / tank liquid tint
    ink:   '#15120E',   // CSS dark text on gauge faces
    brassHex: 0xE2B96C, // THREE brass material (wheels, gauges, valves)
    brassDarkHex: 0x8f6a2c,
    lampOnHex: 0x7CFFA0, // consumer lamp glow when working
    lampOffHex: 0x2a2f2c,
    redLampHex: 0xff2a1a, // alarm wash when something is broken
  },
};

/** Build getTheme(packId), the wall's side of `content.theme.pack`. */
function createThemeRegistry(label, packs, defaultPack) {
  if (!packs[defaultPack]) throw new Error(`[${label}] default pack "${defaultPack}" is not registered`);
  return function getTheme(packId) {
    const requestedPack = packId || defaultPack;
    const theme = packs[requestedPack];
    if (theme) return { theme, requestedPack, activePack: requestedPack };
    console.warn(`[valve-room] pack "${requestedPack}" not available, using "${defaultPack}"`);
    return { theme: packs[defaultPack], requestedPack, activePack: defaultPack };
  };
}

export const getTheme = createThemeRegistry('valve-room', PACKS, 'default');

/** Apply a pack (plus any single-color overrides from content.theme.colors) to the CSS root. */
export function applyThemeColors(theme, colors) {
  const vars = { '--cream': theme.cream, '--brass': theme.brass, '--red': theme.red, '--ink': theme.ink };
  Object.assign(vars, colors || {});
  for (const [k, v] of Object.entries(vars)) document.documentElement.style.setProperty(k, v);
}

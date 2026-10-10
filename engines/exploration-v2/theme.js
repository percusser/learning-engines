// ../../layers/theme/registry.ts
function createThemeRegistry(label, packs, defaultPack) {
  if (!packs[defaultPack]) {
    throw new Error(`[${label}] default pack "${defaultPack}" is not registered`);
  }
  return function getTheme2(packId) {
    const requestedPack = packId || defaultPack;
    const theme = packs[requestedPack];
    if (theme) {
      return { theme, requestedPack, activePack: requestedPack };
    }
    console.warn(`[${label}] pack "${requestedPack}" not available, using "${defaultPack}"`);
    return { theme: packs[defaultPack], requestedPack, activePack: defaultPack };
  };
}

// src/theme.ts
var warehouseLook = {
  label: "Receiving Bay",
  room: { w: 18, d: 14, h: 6.2 },
  floor: { base: "#6E6E6B", joint: "#4A4A48", speck: "#8A8A85", gloss: 0.28 },
  walls: { base: "#8C8F8A", ribDark: "#6E726E", dado: "#4C5B63", dadoH: 1.25 },
  ceiling: { deck: "#3C4147", truss: "#5A6069" },
  accent: { safety: "#E0A82E", hazard: "#1C1C1C", pipe: "#7A4A3C", tape: "#D8C24A" },
  steel: { rack: "#D06A2C", beam: "#2F5FA8", deck: "#9A9DA2" },
  lights: { color: "#FFF4DC", intensity: 1, height: 5.4, cols: 3, rows: 2 },
  // NB: 'pallets' and 'drums' are deliberately absent — the safety-walk
  // content builds those two as inspectable sites, and listing them here
  // as scenery too produced a second copy inside the first.
  props: [
    "racking",
    "dockDoor",
    "palletJack",
    "bollards",
    "extinguisher",
    "floorTape",
    "safetyBoard",
    "crates"
  ]
};
var hospitalLook = {
  label: "Supply Room",
  room: { w: 14, d: 11, h: 3.4 },
  floor: { base: "#C9CEC8", joint: "#A9B0AA", speck: "#DDE1DA", gloss: 0.55 },
  walls: { base: "#E4E7E2", ribDark: "#CFD4CE", dado: "#7FA8A0", dadoH: 1.05 },
  ceiling: { deck: "#EEF1EC", truss: "#C4C9C4" },
  accent: { safety: "#3E8E7E", hazard: "#B23A3A", pipe: "#B8BEC4", tape: "#7FA8A0" },
  steel: { rack: "#DDE2DE", beam: "#B4BCC0", deck: "#CBD1CD" },
  lights: { color: "#F2F8FF", intensity: 1.15, height: 3.1, cols: 3, rows: 2 },
  props: [
    "racking",
    "pallets",
    "bollards",
    "extinguisher",
    "floorTape",
    "safetyBoard",
    "crates"
  ]
};
var retailLook = {
  label: "Stockroom",
  room: { w: 15, d: 12, h: 4.4 },
  floor: { base: "#8A7358", joint: "#6A5842", speck: "#A08A6C", gloss: 0.34 },
  walls: { base: "#D8CDBC", ribDark: "#B8AC98", dado: "#6E5744", dadoH: 1.15 },
  ceiling: { deck: "#4A4238", truss: "#6A6055" },
  accent: { safety: "#D8802E", hazard: "#2A2420", pipe: "#8A7A66", tape: "#C4A24A" },
  steel: { rack: "#4A5560", beam: "#6E7A85", deck: "#9AA2A8" },
  lights: { color: "#FFEFD0", intensity: 0.95, height: 3.9, cols: 3, rows: 2 },
  props: [
    "racking",
    "pallets",
    "palletJack",
    "extinguisher",
    "floorTape",
    "safetyBoard",
    "crates",
    "drums"
  ]
};
var THEMES = {
  default: warehouseLook,
  warehouse: warehouseLook,
  hospital: hospitalLook,
  retail: retailLook
};
var getTheme = createThemeRegistry("exploration-v2", THEMES, "default");
function applyColorOverrides(theme, colors) {
  if (!colors) return theme;
  const t = JSON.parse(JSON.stringify(theme));
  for (const [path, value] of Object.entries(colors)) {
    const parts = path.split(".");
    let obj = t;
    for (let i = 0; i < parts.length - 1; i++) {
      if (obj == null || typeof obj !== "object") {
        obj = null;
        break;
      }
      obj = obj[parts[i]];
    }
    if (obj && typeof obj === "object") obj[parts[parts.length - 1]] = value;
  }
  return t;
}
export {
  THEMES,
  applyColorOverrides,
  getTheme
};

// COPY of layers/audio/audio.js — do not edit here; run tools/audio/sync-audio-layer.sh
// Shared audio for every engine: sample playback, one looping bed, ducking, mute.
// Zero dependencies, plain ES module. Importmap engines use a synced copy at
// engines/<id>/assets/audio/audio.js (tools/audio/sync-audio-layer.sh); edit THIS file, then sync.
//
//   const audio = createAudio({ sfx: { punch: url, ... }, beds: { room: url }, storageKey: 'tuner.muted' });
//   audio.bed('room');          // starts once the context unlocks (first pointerdown/keydown)
//   audio.play('punch');        // one-shot; also pushed to window.__audioLog for tests
//   audio.duck(1800);           // dip the bed under a reveal
//   audio.mountToggle(button);  // "Sound on" / "Sound off", remembered in localStorage
//
// URLs may be files or data: URIs (the file:// bundle inlines them).
export function createAudio({ sfx = {}, beds = {}, gains = {}, storageKey = 'audio.muted' } = {}) {
  const G = { master: 0.8, sfx: 1, bed: 0.55, duck: 0.3, ...gains };
  const log = (window.__audioLog ||= []);
  let ctx = null, master, sfxBus, bedBus, bedSrc = null, bedName = null, toggleEl = null;
  const buffers = new Map(), voices = new Map();
  let muted = false;
  try { muted = localStorage.getItem(storageKey) === '1'; } catch (_) {}

  const load = (name, url) => fetch(url).then((r) => r.arrayBuffer()).then((b) => ctx.decodeAudioData(b))
    .then((buf) => { buffers.set(name, buf); if (name === bedName) startBed(); })
    .catch((e) => console.warn(`[audio] ${name} failed to load`, e));

  function unlock() {
    removeEventListener('pointerdown', unlock, true); removeEventListener('keydown', unlock, true);
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    master = ctx.createGain(); master.gain.value = muted ? 0 : G.master; master.connect(ctx.destination);
    sfxBus = ctx.createGain(); sfxBus.gain.value = G.sfx; sfxBus.connect(master);
    bedBus = ctx.createGain(); bedBus.gain.value = G.bed; bedBus.connect(master);
    if (document.hidden) ctx.suspend();
    for (const [n, u] of Object.entries({ ...sfx, ...beds })) load(n, u);
  }
  addEventListener('pointerdown', unlock, true); addEventListener('keydown', unlock, true);
  document.addEventListener('visibilitychange', () => { if (ctx) document.hidden ? ctx.suspend() : ctx.resume(); });

  function startBed() {
    if (bedSrc) { try { bedSrc.stop(); } catch (_) {} bedSrc = null; }
    const buf = bedName && buffers.get(bedName); if (!buf) return;
    bedSrc = ctx.createBufferSource(); bedSrc.buffer = buf; bedSrc.loop = true; bedSrc.connect(bedBus); bedSrc.start();
  }

  const api = {
    /** One-shot. opts: { gain = 1, rate = 1, overlap = false }. A repeat of the same name cuts the previous one off
     *  (fast repeats never stack) unless overlap is true. Ignored while locked, muted, hidden or not yet loaded (still logged). */
    play(name, { gain = 1, rate = 1, overlap = false } = {}) {
      log.push(name);
      const buf = ctx && buffers.get(name);
      if (!buf || muted || document.hidden) return;
      const t = ctx.currentTime, prev = !overlap && voices.get(name);
      if (prev) { prev.g.gain.setTargetAtTime(0, t, 0.01); try { prev.src.stop(t + 0.05); } catch (_) {} }
      const src = ctx.createBufferSource(), g = ctx.createGain();
      src.buffer = buf; src.playbackRate.value = rate; g.gain.value = gain;
      src.connect(g).connect(sfxBus); src.start();
      if (!overlap) { voices.set(name, { src, g }); src.onended = () => { if (voices.get(name)?.src === src) voices.delete(name); }; }
    },
    /** Switch the looping bed (null stops it). Starts on unlock/load if not ready yet. */
    bed(name) { if (name === bedName) return; bedName = name; log.push('bed:' + name); if (ctx) startBed(); },
    /** Dip the bed for `ms`, then bring it back. */
    duck(ms = 1500) {
      if (!ctx) return; const t = ctx.currentTime, g = bedBus.gain;
      g.cancelScheduledValues(t); g.setTargetAtTime(G.bed * G.duck, t, 0.08); g.setTargetAtTime(G.bed, t + ms / 1000, 0.4);
    },
    setMuted(m) {
      muted = !!m;
      try { localStorage.setItem(storageKey, muted ? '1' : '0'); } catch (_) {}
      if (master) master.gain.setTargetAtTime(muted ? 0 : G.master, ctx.currentTime, 0.03);
      if (toggleEl) { toggleEl.textContent = muted ? 'Sound off' : 'Sound on'; toggleEl.setAttribute('aria-pressed', String(!muted)); }
    },
    get muted() { return muted; },
    /** Names decoded so far (tests: every sfx/bed should appear shortly after the first click). */
    get loaded() { return [...buffers.keys()]; },
    /** Pass an existing <button>, or a container to get a new one appended. Returns the button. */
    mountToggle(el) {
      if (el.tagName !== 'BUTTON') { const b = document.createElement('button'); b.type = 'button'; el.appendChild(b); el = b; }
      toggleEl = el; el.addEventListener('click', () => api.setMuted(!muted)); api.setMuted(muted); return el;
    },
  };
  return api;
}

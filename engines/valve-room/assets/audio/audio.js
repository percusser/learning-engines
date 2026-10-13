// COPY of layers/audio/audio.js — do not edit here; run tools/audio/sync-audio-layer.sh
// Shared audio for every engine: sample playback, one looping bed, manual ducking, mute.
// Zero dependencies, plain ES module. Importmap engines use a synced copy at
// engines/<id>/assets/audio/audio.js (tools/audio/sync-audio-layer.sh); edit THIS file, then sync.
//
//   const audio = createAudio({ sfx: { punch: url, ... }, beds: { room: url }, storageKey: 'tuner.muted' });
//   audio.bed('room');          // starts once the context unlocks (a click or key press; retried on every one until running)
//   audio.play('punch');        // one-shot; also pushed to window.__audioLog for tests
//   audio.duck(1800);           // dip the bed under a deliberate reveal (play() does NOT dip it; pass autoDuck:true to createAudio to dip under every effect)
//   audio.mountToggle(button);  // "Sound on" / "Sound off", remembered in localStorage
//   audio.finish('victory');    // end of a run: bed fades out (400 ms), then the `sting-victory` (or `sting-defeat`) sfx plays once; the bed stays off
//   audio.reset();              // a new run begins: the bed may start again (call it before audio.bed(...))
//
// URLs may be files or data: URIs (the file:// bundle inlines them).
export function createAudio({ sfx = {}, beds = {}, gains = {}, storageKey = 'audio.muted', autoDuck = false } = {}) {
  const G = { master: 0.8, sfx: 1, bed: 0.55, duck: 0.3, ...gains };
  const log = (window.__audioLog ||= []);
  let ctx = null, master, sfxBus, bedBus, bedSrc = null, bedName = null, toggleEl = null;
  const buffers = new Map(), voices = new Map();
  let muted = false, duckUntil = 0, finished = false, finishTimer = 0;
  try { muted = localStorage.getItem(storageKey) === '1'; } catch (_) {}

  // A busy local server can drop a request, so a file that fails is fetched again (3 tries) instead of staying silent.
  const load = (name, url, tries = 3) => fetch(url).then((r) => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.arrayBuffer(); })
    .then((b) => ctx.decodeAudioData(b))
    .then((buf) => { buffers.set(name, buf); if (name === bedName) startBed(); })
    .catch((e) => tries > 1 ? new Promise((r) => setTimeout(r, 800)).then(() => load(name, url, tries - 1))
      : console.warn(`[audio] ${name} failed to load`, e));

  // Browsers start an AudioContext only inside a user gesture, and not every gesture counts (Escape, a modifier key,
  // a touch pointerdown). So every gesture calls resume() until the context is running; the listeners stay for the
  // whole page, because a context can also stop later (Safari "interrupted", another app taking the output).
  const GESTURES = ['pointerdown', 'pointerup', 'click', 'keydown', 'touchend'];
  let warned = false;
  function unlock() {
    if (!ctx) {
      ctx = new (window.AudioContext || window.webkitAudioContext)();
      master = ctx.createGain(); master.gain.value = muted ? 0 : G.master; master.connect(ctx.destination);
      sfxBus = ctx.createGain(); sfxBus.gain.value = G.sfx; sfxBus.connect(master);
      bedBus = ctx.createGain(); bedBus.gain.value = G.bed; bedBus.connect(master);
      ctx.onstatechange = () => { if (ctx.state === 'running' && bedName && !bedSrc) startBed(); };
      for (const [n, u] of Object.entries({ ...sfx, ...beds })) load(n, u);
    }
    if (ctx.state === 'running') return;
    ctx.resume().catch(() => {});
    if (!warned) setTimeout(() => {
      if (ctx.state !== 'running' && !document.hidden && !warned) { warned = true; console.warn(`[audio] the AudioContext is still ${ctx.state} after a click or key press; the next click or key press tries again`); }
    }, 1000);
  }
  for (const g of GESTURES) addEventListener(g, unlock, true);
  document.addEventListener('visibilitychange', () => {
    if (!ctx) return;
    // the music keeps playing in a background tab (like a video player); only bring it back if the browser paused it
    if (!document.hidden) ctx.resume().catch(() => {});
  });

  function startBed() {
    if (bedSrc) { try { bedSrc.stop(); } catch (_) {} bedSrc = null; }
    const buf = bedName && buffers.get(bedName); if (!buf) return;
    bedSrc = ctx.createBufferSource(); bedSrc.buffer = buf; bedSrc.loop = true; bedSrc.connect(bedBus); bedSrc.start();
  }

  // Dip the bed to G.bed*G.duck (attack time constant `atk`, ~60 ms to settle), hold for `ms`, release (~0.4 s).
  // Reschedules from the current value, and never shortens a hold that is already running, so bursts neither stack nor clip.
  function dip(ms, atk) {
    const t = ctx.currentTime, end = Math.max(duckUntil, t + ms / 1000), g = bedBus.gain;
    duckUntil = end;
    g.cancelScheduledValues(t); g.setTargetAtTime(G.bed * G.duck, t, atk); g.setTargetAtTime(G.bed, end, 0.15);
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
      if (autoDuck && bedSrc) dip(Math.min(buf.duration / rate, 1.2) * 1000, 0.02);
      if (!overlap) { voices.set(name, { src, g }); src.onended = () => { if (voices.get(name)?.src === src) voices.delete(name); }; }
    },
    /** Switch the looping bed (null stops it). Starts on unlock/load if not ready yet. */
    bed(name) { if (finished || name === bedName) return; bedName = name; log.push('bed:' + name); if (ctx) startBed(); },
    /** Dip the bed for `ms`, then bring it back. */
    duck(ms = 1500) {
      if (!ctx || finished) return; const t = ctx.currentTime, g = bedBus.gain;
      duckUntil = Math.max(duckUntil, t + ms / 1000);
      g.cancelScheduledValues(t); g.setTargetAtTime(G.bed * G.duck, t, 0.08); g.setTargetAtTime(G.bed, duckUntil, 0.4);
    },
    /** End of a run. kind: 'victory' | 'defeat'. Fades the bed out over 400 ms, then plays the sfx buffer `sting-<kind>` once
     *  (silently skipped if it is missing). The bed does not come back until reset(). A second call does nothing. */
    finish(kind) {
      if (finished) return;
      finished = true; bedName = null; log.push('finish:' + kind);
      if (ctx && bedSrc) {
        const t = ctx.currentTime, g = bedBus.gain, src = bedSrc;
        g.cancelScheduledValues(t); g.setValueAtTime(g.value, t); g.linearRampToValueAtTime(0, t + 0.4);
        setTimeout(() => { try { src.stop(); } catch (_) {} if (bedSrc === src) bedSrc = null; }, 450);
      }
      finishTimer = setTimeout(() => { finishTimer = 0; api.play('sting-' + kind); }, 400);
    },
    /** A new run begins: restores the bed (call before bed(...)) so replays and new rounds get music again. */
    reset() {
      if (finishTimer) { clearTimeout(finishTimer); finishTimer = 0; }
      finished = false; bedName = null; log.push('reset');
      if (bedSrc) { try { bedSrc.stop(); } catch (_) {} bedSrc = null; }
      if (ctx) { const t = ctx.currentTime; bedBus.gain.cancelScheduledValues(t); bedBus.gain.setValueAtTime(G.bed, t); }
    },
    setMuted(m) {
      muted = !!m;
      try { localStorage.setItem(storageKey, muted ? '1' : '0'); } catch (_) {}
      if (master) master.gain.setTargetAtTime(muted ? 0 : G.master, ctx.currentTime, 0.03);
      if (toggleEl) { toggleEl.textContent = muted ? 'Sound off' : 'Sound on'; toggleEl.setAttribute('aria-pressed', String(!muted)); }
    },
    get muted() { return muted; },
    /** Test hook: live gains. */
    get debug() { return ctx ? { master: master.gain.value, sfx: sfxBus.gain.value, bed: bedBus.gain.value, bedPlaying: !!bedSrc, state: ctx.state } : null; },
    /** Names decoded so far (tests: every sfx/bed should appear shortly after the first click). */
    get loaded() { return [...buffers.keys()]; },
    /** Pass an existing <button>, or a container to get a new one appended. Returns the button. */
    mountToggle(el) {
      if (el.tagName !== 'BUTTON') { const b = document.createElement('button'); b.type = 'button'; el.appendChild(b); el = b; }
      toggleEl = el; el.addEventListener('click', () => api.setMuted(!muted)); api.setMuted(muted); return el;
    },
  };
  (window.__audioInstances ||= []).push(api);   // test hook: tests read api.debug / api.loaded
  return api;
}

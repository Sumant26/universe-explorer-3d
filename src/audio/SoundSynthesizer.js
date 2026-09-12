/**
 * @file SoundSynthesizer.js
 * A small procedural Web Audio engine: a warm, cozy ambient drone plus soft
 * UI chirps and an engine hum that rises during warp. No audio assets are
 * loaded — everything is synthesized, and the whole thing degrades to a
 * silent no-op if the Web Audio API is unavailable or blocked.
 */

export class SoundSynthesizer {
  constructor() {
    /** @type {?AudioContext} */
    this._ctx = null;
    this._muted = false;
    this._nodes = {};
    this._available = false;
  }

  /** Must be called from a user gesture (click/keypress) per browser autoplay rules. */
  init() {
    if (this._ctx) return;
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) {
      console.warn("[SoundSynthesizer] Web Audio API unavailable; running muted.");
      this._available = false;
      return;
    }
    try {
      this._ctx = new AudioCtx();
      this._available = true;
      this._buildAmbientDrone();
      this._buildEngineHum();
    } catch (err) {
      console.warn("[SoundSynthesizer] Failed to initialize audio:", err);
      this._available = false;
    }
  }

  /** @private cozy, low, slowly beating pad — two detuned sine oscillators. */
  _buildAmbientDrone() {
    const ctx = this._ctx;
    const gain = ctx.createGain();
    gain.gain.value = 0.05;
    gain.connect(ctx.destination);

    const osc1 = ctx.createOscillator();
    osc1.type = "sine";
    osc1.frequency.value = 96;
    const osc2 = ctx.createOscillator();
    osc2.type = "sine";
    osc2.frequency.value = 96.6; // slight detune for a slow, calm beat

    osc1.connect(gain);
    osc2.connect(gain);
    osc1.start();
    osc2.start();

    this._nodes.ambient = { gain, osc1, osc2 };
  }

  /** @private a soft low hum that we modulate louder/higher as warp speed rises. */
  _buildEngineHum() {
    const ctx = this._ctx;
    const gain = ctx.createGain();
    gain.gain.value = 0;
    gain.connect(ctx.destination);

    const osc = ctx.createOscillator();
    osc.type = "triangle";
    osc.frequency.value = 60;
    osc.connect(gain);
    osc.start();

    this._nodes.hum = { gain, osc };
  }

  /**
   * @param {number} speedFraction 0..1, current fraction of warp speed.
   */
  setEngineIntensity(speedFraction) {
    if (!this._available || !this._nodes.hum) return;
    const s = clamp01(speedFraction);
    const now = this._ctx.currentTime;
    this._nodes.hum.gain.gain.setTargetAtTime(this._muted ? 0 : s * 0.08, now, 0.15);
    this._nodes.hum.osc.frequency.setTargetAtTime(60 + s * 140, now, 0.2);
  }

  /** Plays a short, gentle two-tone chirp for UI confirmations (search select, arrival). */
  playChirp() {
    if (!this._available || this._muted) return;
    const ctx = this._ctx;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(660, now);
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.12);
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.exponentialRampToValueAtTime(0.06, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.4);
  }

  /** @param {boolean} muted */
  setMuted(muted) {
    this._muted = Boolean(muted);
    if (!this._available) return;
    const now = this._ctx.currentTime;
    this._nodes.ambient?.gain.gain.setTargetAtTime(this._muted ? 0 : 0.05, now, 0.2);
    if (!this._muted) return;
    this._nodes.hum?.gain.gain.setTargetAtTime(0, now, 0.2);
  }

  dispose() {
    if (!this._ctx) return;
    for (const node of Object.values(this._nodes)) {
      node.osc1?.stop?.();
      node.osc2?.stop?.();
      node.osc?.stop?.();
    }
    this._ctx.close?.();
    this._ctx = null;
    this._available = false;
  }
}

function clamp01(v) {
  if (!Number.isFinite(v)) return 0;
  return Math.min(Math.max(v, 0), 1);
}

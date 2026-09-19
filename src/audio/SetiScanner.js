/**
 * @file SetiScanner.js
 * Deep Space SETI Radio Receiver and Waterfall Spectrogram Engine.
 * Tunes across the 1420 MHz Hydrogen "Water Hole" line to intercept and demodulate
 * extraterrestrial carrier signals, Fast Radio Bursts, and pulsar rhythms.
 */

export const SETI_SIGNALS = [
  {
    id: "wow-signal",
    frequencyMhz: 1420.405,
    name: "1977 Big Ear 'Wow!' Signal",
    origin: "Constellation Sagittarius (Chi-1 Sagittarii)",
    bandwidthKhz: 10,
    snrDb: 32,
    code: "6EQUJ5",
    description:
      "An authentic, unexplained 72-second narrowband hydrogen line transmission recorded on August 15, 1977.",
    soundType: "WOW_TONE",
  },
  {
    id: "frb-repeater",
    frequencyMhz: 1420.25,
    name: "Fast Radio Burst FRB 121102",
    origin: "Dwarf Galaxy (3 Billion Light-Years)",
    bandwidthKhz: 80,
    snrDb: 24,
    code: "CHIRP-EXTRAGALACTIC",
    description: "Ultra-energetic millisecond radio dispersion sweeping downward across frequency channels.",
    soundType: "CHIRP",
  },
  {
    id: "vela-pulsar",
    frequencyMhz: 1420.7,
    name: "Vela Pulsar (PSR B0833-45)",
    origin: "Vela Supernova Remnant",
    bandwidthKhz: 40,
    snrDb: 28,
    code: "11.2 Hz PULSE TRAIN",
    description: "Spinning neutron star beam sweeping across Earth 11.2 times every second.",
    soundType: "PULSAR",
  },
  {
    id: "seti-beacon",
    frequencyMhz: 1420.82,
    name: "Extraterrestrial Harmonic Beacon",
    origin: "TRAPPIST-1 System Sector",
    bandwidthKhz: 5,
    snrDb: 38,
    code: "PRIME HARMONIC [2-3-5-7-11]",
    description: "Coherent artificial harmonic carrier wave pulsing at prime intervals.",
    soundType: "BEACON",
  },
];

export class SetiScanner {
  /**
   * @param {AudioContext} [audioCtx]
   */
  constructor(audioCtx) {
    this._ctx = audioCtx || null;
    this.frequencyMhz = 1420.405;
    this.bandwidthMhz = 1.0;
    this.isListening = false;
    this.volume = 0.5;

    this._osc = null;
    this._gain = null;
  }

  setContext(audioCtx) {
    this._ctx = audioCtx;
  }

  tick(dt) {
    // Periodic frequency drift or scanner background updates if listening
  }

  setFrequency(mhz) {
    this.frequencyMhz = Math.min(Math.max(Number(mhz) || 1420.0, 1420.0), 1421.0);
    this._updateDemodulator();
  }

  /**
   * Detects if current receiver frequency matches any known signal within 15 kHz tolerance.
   * @returns {typeof SETI_SIGNALS[0] | null}
   */
  detectSignal() {
    for (const sig of SETI_SIGNALS) {
      if (Math.abs(this.frequencyMhz - sig.frequencyMhz) <= 0.015) {
        return sig;
      }
    }
    return null;
  }

  /**
   * Computes a simulated FFT spectrogram line (array of 128 intensity bins) across 1420.0 - 1421.0 MHz.
   * @returns {Float32Array}
   */
  generateSpectrogramRow() {
    const bins = 128;
    const row = new Float32Array(bins);

    for (let i = 0; i < bins; i++) {
      // Cosmic background noise baseline
      row[i] = Math.random() * 0.15;
    }

    // Add spikes for signals
    for (const sig of SETI_SIGNALS) {
      const normalizedFreq = (sig.frequencyMhz - 1420.0) / 1.0;
      const binCenter = Math.floor(normalizedFreq * bins);

      if (binCenter >= 0 && binCenter < bins) {
        row[binCenter] = Math.min(1.0, row[binCenter] + (sig.snrDb / 40) * (0.8 + Math.random() * 0.2));
        if (binCenter > 0) row[binCenter - 1] += 0.35;
        if (binCenter < bins - 1) row[binCenter + 1] += 0.35;
      }
    }

    return row;
  }

  toggleListen() {
    this.isListening = !this.isListening;
    if (this.isListening) {
      this._startAudio();
    } else {
      this._stopAudio();
    }
    return this.isListening;
  }

  /** @private */
  _startAudio() {
    if (!this._ctx) return;
    try {
      if (this._ctx.state === "suspended") this._ctx.resume();

      this._gain = this._ctx.createGain();
      this._gain.gain.setValueAtTime(this.volume * 0.15, this._ctx.currentTime);
      this._gain.connect(this._ctx.destination);

      this._osc = this._ctx.createOscillator();
      this._osc.type = "sine";
      this._osc.frequency.setValueAtTime(440, this._ctx.currentTime);
      this._osc.connect(this._gain);
      this._osc.start();

      this._updateDemodulator();
    } catch {
      // ignore
    }
  }

  /** @private */
  _updateDemodulator() {
    if (!this._osc || !this._ctx) return;
    const sig = this.detectSignal();

    if (sig) {
      if (sig.soundType === "WOW_TONE") {
        this._osc.frequency.setValueAtTime(750, this._ctx.currentTime);
      } else if (sig.soundType === "CHIRP") {
        this._osc.frequency.setValueAtTime(1200, this._ctx.currentTime);
      } else if (sig.soundType === "PULSAR") {
        this._osc.frequency.setValueAtTime(220, this._ctx.currentTime);
      } else {
        this._osc.frequency.setValueAtTime(880, this._ctx.currentTime);
      }
      this._gain.gain.setValueAtTime(this.volume * 0.25, this._ctx.currentTime);
    } else {
      // Off-frequency static hiss
      this._osc.frequency.setValueAtTime(120, this._ctx.currentTime);
      this._gain.gain.setValueAtTime(this.volume * 0.04, this._ctx.currentTime);
    }
  }

  /** @private */
  _stopAudio() {
    if (this._osc) {
      try {
        this._osc.stop();
        this._osc.disconnect();
      } catch {
        // ignore
      }
      this._osc = null;
    }
    if (this._gain) {
      try {
        this._gain.disconnect();
      } catch {
        // ignore
      }
      this._gain = null;
    }
  }
}

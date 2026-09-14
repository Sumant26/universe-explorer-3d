/**
 * @file SpaceRadio.js
 * Procedural generative Lo-Fi Space Radio for the Cosmos Cabin dashboard.
 * Generates 3 unique ambient channels purely with the Web Audio API (zero audio files):
 *  - Channel 1: Cozy Cabin Lo-Fi (warm pentatonic chords, slow mellow progression)
 *  - Channel 2: Deep Space Drone (meditative sub-harmonic resonant pads)
 *  - Channel 3: Cosmic Frequencies (pulsar rhythmic clicks & solar wind sweeps)
 */

export const RADIO_STATIONS = [
  {
    id: "lofi-cabin",
    name: "Station 1: Cozy Cabin Lo-Fi",
    frequency: "88.4 FM",
    genre: "Warm Generative Chords",
  },
  {
    id: "deep-space",
    name: "Station 2: Deep Space Resonance",
    frequency: "94.2 FM",
    genre: "Sub-Harmonic Drone Pad",
  },
  {
    id: "pulsar-radio",
    name: "Station 3: Cosmic Frequencies",
    frequency: "107.9 FM",
    genre: "Pulsar Rhythms & Solar Wind",
  },
];

const CHORD_FREQS = [
  [130.81, 164.81, 196.0, 246.94], // C maj7
  [110.0, 130.81, 164.81, 196.0], // A min7
  [146.83, 174.61, 220.0, 261.63], // D min7
  [98.0, 123.47, 146.83, 196.0], // G 7
  [123.47, 155.56, 185.0, 220.0], // B min7b5
  [174.61, 220.0, 261.63, 329.63], // F maj7
];

export class SpaceRadio {
  /**
   * @param {AudioContext} [audioContext]
   */
  constructor(audioContext = null) {
    this._ctx = audioContext;
    this.currentStationIndex = 0;
    this.isPlaying = false;
    this.volume = 0.65;

    this._masterGain = null;
    this._nodes = [];
    this._stepTimer = null;
    this._stepCounter = 0;
  }

  setContext(audioContext) {
    this._ctx = audioContext;
  }

  /**
   * Toggles radio power on/off.
   * @returns {boolean} New power state.
   */
  togglePower() {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  start() {
    if (!this._ctx) return;
    if (this._ctx.state === "suspended") {
      this._ctx.resume();
    }
    this.isPlaying = true;
    this._buildStationAudio();
  }

  stop() {
    this.isPlaying = false;
    if (this._stepTimer) {
      clearInterval(this._stepTimer);
      this._stepTimer = null;
    }
    this._cleanupNodes();
  }

  /**
   * Changes current station.
   * @param {number} stationIndex
   * @returns {object} Station info
   */
  setStation(stationIndex) {
    this.currentStationIndex = (stationIndex + RADIO_STATIONS.length) % RADIO_STATIONS.length;
    if (this.isPlaying) {
      this._buildStationAudio();
    }
    return RADIO_STATIONS[this.currentStationIndex];
  }

  tuneNext() {
    return this.setStation(this.currentStationIndex + 1);
  }

  tunePrev() {
    return this.setStation(this.currentStationIndex - 1);
  }

  getCurrentStation() {
    return RADIO_STATIONS[this.currentStationIndex];
  }

  setVolume(vol) {
    this.volume = Math.min(Math.max(vol, 0), 1);
    if (this._masterGain && this._ctx) {
      this._masterGain.gain.setTargetAtTime(this.volume * 0.12, this._ctx.currentTime, 0.05);
    }
  }

  _cleanupNodes() {
    if (this._nodes) {
      for (const node of this._nodes) {
        try {
          if (node.stop) node.stop();
          if (node.disconnect) node.disconnect();
        } catch {
          // Ignored if node already stopped/disconnected
        }
      }
    }
    this._nodes = [];
  }

  _buildStationAudio() {
    if (!this._ctx || !this.isPlaying) return;
    this._cleanupNodes();
    if (this._stepTimer) clearInterval(this._stepTimer);

    const ctx = this._ctx;
    this._masterGain = ctx.createGain();
    this._masterGain.gain.value = this.volume * 0.12;
    this._masterGain.connect(ctx.destination);
    this._nodes.push(this._masterGain);

    const station = RADIO_STATIONS[this.currentStationIndex];

    if (station.id === "lofi-cabin") {
      this._startLofiStation(ctx);
    } else if (station.id === "deep-space") {
      this._startDeepSpaceDrone(ctx);
    } else if (station.id === "pulsar-radio") {
      this._startPulsarRadio(ctx);
    }
  }

  _startLofiStation(ctx) {
    const playChordStep = () => {
      if (!this.isPlaying || !this._ctx) return;
      const chordIndex = this._stepCounter % CHORD_FREQS.length;
      this._stepCounter++;
      const freqs = CHORD_FREQS[chordIndex];
      const now = ctx.currentTime;

      // Soft filtered warm synth chords
      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(650, now);
      filter.connect(this._masterGain);

      for (let i = 0; i < freqs.length; i++) {
        const osc = ctx.createOscillator();
        const chordGain = ctx.createGain();
        osc.type = i === 0 ? "triangle" : "sine";
        osc.frequency.setValueAtTime(freqs[i], now);

        chordGain.gain.setValueAtTime(0.001, now);
        chordGain.gain.linearRampToValueAtTime(0.035, now + 0.8);
        chordGain.gain.exponentialRampToValueAtTime(0.0001, now + 3.9);

        osc.connect(chordGain);
        chordGain.connect(filter);

        osc.start(now);
        osc.stop(now + 4.0);
      }
    };

    playChordStep();
    this._stepTimer = setInterval(playChordStep, 4000);
  }

  _startDeepSpaceDrone(ctx) {
    // 3 rich slow-beating sub oscillators
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(280, ctx.currentTime);
    filter.connect(this._masterGain);

    const baseFreqs = [55, 82.41, 110];
    baseFreqs.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = freq + i * 0.35; // Gentle phasing detune
      gain.gain.value = 0.045 / (i + 1);

      osc.connect(gain);
      gain.connect(filter);
      osc.start();
      this._nodes.push(osc, gain);
    });
  }

  _startPulsarRadio(ctx) {
    // Pulsing rhythmic click oscillator modulated at 3.2Hz (like a spinning neutron star)
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const panner = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
    const gain = ctx.createGain();

    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(420, now);

    // LFO for pulse envelope
    const lfo = ctx.createOscillator();
    lfo.type = "square";
    lfo.frequency.setValueAtTime(3.2, now);

    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 0.03;

    lfo.connect(lfoGain.gain);
    gain.gain.value = 0.025;

    osc.connect(gain);
    if (panner) {
      gain.connect(panner);
      panner.connect(this._masterGain);
      this._nodes.push(panner);
    } else {
      gain.connect(this._masterGain);
    }

    osc.start();
    lfo.start();
    this._nodes.push(osc, lfo, gain, lfoGain);
  }
}

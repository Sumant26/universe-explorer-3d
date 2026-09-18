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
    genre: "Pulsar Rhythms & Clicks",
  },
  {
    id: "solar-wind",
    name: "Station 4: Solar Wind Ambient",
    frequency: "101.3 FM",
    genre: "Modulated Plasma & Sweeps",
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
    } else if (station.id === "solar-wind") {
      this._startSolarWind(ctx);
    }
  }

  _startSolarWind(ctx) {
    // Modulated pink noise plasma buffer with resonant bandpass filter
    const bufferSize = ctx.sampleRate * 2;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    let b0 = 0,
      b1 = 0,
      b2 = 0,
      b3 = 0,
      b4 = 0,
      b5 = 0,
      b6 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.969 * b2 + white * 0.153852;
      b3 = 0.8665 * b3 + white * 0.3104856;
      b4 = 0.55 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.016898;
      output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.11;
      b6 = white * 0.115926;
    }

    const whiteNoise = ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(320, ctx.currentTime);
    filter.Q.setValueAtTime(4.5, ctx.currentTime);

    // LFO to sweep the solar wind frequency
    const sweepLfo = ctx.createOscillator();
    sweepLfo.type = "sine";
    sweepLfo.frequency.setValueAtTime(0.15, ctx.currentTime);

    const sweepGain = ctx.createGain();
    sweepGain.gain.setValueAtTime(180, ctx.currentTime);
    sweepLfo.connect(sweepGain);
    sweepGain.connect(filter.frequency);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.045, ctx.currentTime);

    whiteNoise.connect(filter);
    filter.connect(gain);
    gain.connect(this._masterGain);

    whiteNoise.start();
    sweepLfo.start();
    this._nodes.push(whiteNoise, filter, sweepLfo, sweepGain, gain);
  }

  /**
   * Updates dynamic planetary sonification based on proximity to celestial bodies.
   * Generates electromagnetic whistlers and magnetospheric resonances.
   * @param {{id: string, name: string, kind?: string, atmosphere?: string}} [targetBody]
   * @param {number} [distanceKm]
   */
  updatePlanetarySonification(targetBody, distanceKm = Infinity) {
    if (!this._ctx || !this.isPlaying || !targetBody || distanceKm > 500000) {
      if (this._planetaryGain && this._ctx) {
        this._planetaryGain.gain.setTargetAtTime(0, this._ctx.currentTime, 0.2);
      }
      return;
    }

    const ctx = this._ctx;
    if (!this._planetaryGain) {
      this._planetaryGain = ctx.createGain();
      this._planetaryGain.gain.value = 0;
      this._planetaryGain.connect(ctx.destination);

      this._planetaryOsc = ctx.createOscillator();
      this._planetaryOsc.type = "sine";
      this._planetaryOsc.frequency.value = 220;

      this._planetaryFilter = ctx.createBiquadFilter();
      this._planetaryFilter.type = "lowpass";
      this._planetaryFilter.frequency.value = 400;

      this._planetaryOsc.connect(this._planetaryFilter);
      this._planetaryFilter.connect(this._planetaryGain);
      this._planetaryOsc.start();
    }

    // Proximity factor (0 near 500,000km, 1 at 5,000km)
    const proximity = Math.min(Math.max((500000 - distanceKm) / 495000, 0), 1);
    const targetVol = proximity * 0.035 * this.volume;
    this._planetaryGain.gain.setTargetAtTime(targetVol, ctx.currentTime, 0.1);

    // Calculate base frequency from body signature
    let baseFreq = 180;
    if (targetBody.kind === "black_hole") baseFreq = 55;
    else if (targetBody.kind === "star" || targetBody.id === "sun") baseFreq = 120;
    else if (targetBody.id === "jupiter")
      baseFreq = 340; // Jovian decametric radiation
    else if (targetBody.id === "saturn")
      baseFreq = 260; // Ring resonance
    else if (targetBody.id === "earth") baseFreq = 440; // Earth auroral chorus

    this._planetaryOsc.frequency.setTargetAtTime(baseFreq + Math.sin(ctx.currentTime * 1.5) * 15, ctx.currentTime, 0.1);
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

/**
 * @file CassetteDeck.js
 * Vintage dashboard analog cassette deck simulation with warm tape saturation,
 * subtle flutter LFOs, digitized mission audio recordings, and spoken cosmic logs.
 */

export const CASSETTE_TAPES = [
  {
    id: "pale-blue-dot",
    title: "Pale Blue Dot",
    subtitle: "Carl Sagan · Voyager 1 Reflection",
    year: "1990",
    color: "#ffc17a",
    script:
      "Look again at that dot. That's here. That's home. That's us. On it everyone you love, everyone you know, everyone you ever heard of, every human being who ever was, lived out their lives. The aggregate of our joy and suffering, thousands of confident religions, ideologies, and economic doctrines... every saint and sinner in the history of our species lived there — on a mote of dust suspended in a sunbeam.",
  },
  {
    id: "apollo-11",
    title: "Tranquility Base Audio Loop",
    subtitle: "NASA Apollo 11 Lunar Landing",
    year: "1969",
    color: "#9ee6ff",
    script:
      "Contact light. Shutdown. Houston, Tranquility Base here. The Eagle has landed. Roger, Tranquility, we copy you on the ground. You got a bunch of guys about to turn blue. We're breathing again. Thanks a lot. That's one small step for man, one giant leap for mankind.",
  },
  {
    id: "voyager-record",
    title: "Voyager Golden Record",
    subtitle: "Greetings to the Cosmos & Whale Songs",
    year: "1977",
    color: "#f6d55c",
    script:
      "This is a present from a small, distant world, a token of our sounds, our science, our images, our music, our thoughts and our feelings. We are attempting to survive our time so we may live into yours.",
  },
  {
    id: "captains-log",
    title: "Cosmos Cabin Flight Log",
    subtitle: "Captain's Stellar Drift Diary",
    year: "3024",
    color: "#58e890",
    script:
      "Stardate Log: Interstellar cruise systems active. Cabin coffee warm. The star charts drift gently outside the porthole as we journey across the infinite deep.",
  },
];

export class CassetteDeck {
  /**
   * @param {AudioContext} [audioCtx]
   */
  constructor(audioCtx) {
    this._ctx = audioCtx || null;
    this.currentTapeIndex = 0;
    this.isPlaying = false;
    this.volume = 0.7;

    this._synthOsc = null;
    this._noiseNode = null;
    this._gainNode = null;
    this._utterance = null;
  }

  setContext(audioCtx) {
    this._ctx = audioCtx;
  }

  /**
   * @returns {typeof CASSETTE_TAPES[0]}
   */
  getCurrentTape() {
    return CASSETTE_TAPES[this.currentTapeIndex];
  }

  setTape(tapeId) {
    const idx = CASSETTE_TAPES.findIndex((t) => t.id === tapeId);
    if (idx !== -1) {
      this.currentTapeIndex = idx;
      if (this.isPlaying) {
        this.stop();
        this.play();
      }
    }
  }

  nextTape() {
    this.currentTapeIndex = (this.currentTapeIndex + 1) % CASSETTE_TAPES.length;
    if (this.isPlaying) {
      this.stop();
      this.play();
    }
    return this.getCurrentTape();
  }

  prevTape() {
    this.currentTapeIndex = (this.currentTapeIndex - 1 + CASSETTE_TAPES.length) % CASSETTE_TAPES.length;
    if (this.isPlaying) {
      this.stop();
      this.play();
    }
    return this.getCurrentTape();
  }

  togglePlay() {
    if (this.isPlaying) {
      this.stop();
    } else {
      this.play();
    }
    return this.isPlaying;
  }

  play() {
    this.isPlaying = true;
    this._startTapeWarmthAudio();
    this._startSpokenVoice();
  }

  stop() {
    this.isPlaying = false;
    this._stopAudioNodes();
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
  }

  /** @private starts subtle analog tape hiss & warm harmonic chord */
  _startTapeWarmthAudio() {
    if (!this._ctx) return;
    try {
      if (this._ctx.state === "suspended") {
        this._ctx.resume();
      }

      this._gainNode = this._ctx.createGain();
      this._gainNode.gain.setValueAtTime(this.volume * 0.15, this._ctx.currentTime);
      this._gainNode.connect(this._ctx.destination);

      // Low harmonic pad oscillator
      this._synthOsc = this._ctx.createOscillator();
      this._synthOsc.type = "triangle";
      this._synthOsc.frequency.setValueAtTime(110, this._ctx.currentTime); // A2 note

      // Gentle tape flutter LFO
      const flutterOsc = this._ctx.createOscillator();
      flutterOsc.frequency.setValueAtTime(4.5, this._ctx.currentTime);
      const flutterGain = this._ctx.createGain();
      flutterGain.gain.setValueAtTime(1.8, this._ctx.currentTime);
      flutterOsc.connect(flutterGain);
      flutterGain.connect(this._synthOsc.frequency);
      flutterOsc.start();

      this._synthOsc.connect(this._gainNode);
      this._synthOsc.start();
    } catch {
      // Ignore audio synthesis errors in non-browser envs
    }
  }

  /** @private starts speech narration with cosmic cadence */
  _startSpokenVoice() {
    if (typeof window === "undefined" || !window.speechSynthesis) return;

    window.speechSynthesis.cancel();
    const tape = this.getCurrentTape();
    const utterance = new window.SpeechSynthesisUtterance(tape.script);
    utterance.rate = 0.88;
    utterance.pitch = 0.95;
    utterance.volume = this.volume;

    utterance.onend = () => {
      if (this.isPlaying) {
        this.stop();
      }
    };

    window.speechSynthesis.speak(utterance);
    this._utterance = utterance;
  }

  /** @private */
  _stopAudioNodes() {
    if (this._synthOsc) {
      try {
        this._synthOsc.stop();
        this._synthOsc.disconnect();
      } catch {
        // ignored
      }
      this._synthOsc = null;
    }
    if (this._gainNode) {
      try {
        this._gainNode.disconnect();
      } catch {
        // ignored
      }
      this._gainNode = null;
    }
  }
}

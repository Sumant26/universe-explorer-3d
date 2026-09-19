/**
 * @file SetiScannerModal.js
 * Interactive modal featuring a real-time waterfall FFT radio spectrogram,
 * frequency tuner, and signal telemetry decoder.
 */

import { Actions } from "../state/StateActions.js";
import { SetiScanner } from "../audio/SetiScanner.js";

export class SetiScannerModal {
  /**
   * @param {HTMLElement} root
   * @param {import('../state/Store.js').Store} store
   * @param {{ setiScanner?: SetiScanner, onShowToast?: (msg: string) => void }} options
   */
  constructor(rootOrStore, storeOrOptions, options = {}) {
    if (rootOrStore instanceof HTMLElement) {
      this.root = rootOrStore;
      this.store = storeOrOptions;
      this.scanner = options.setiScanner || new SetiScanner();
      this.onShowToast = options.onShowToast;
    } else {
      this.root = document.body;
      this.store = rootOrStore;
      if (storeOrOptions instanceof SetiScanner) {
        this.scanner = storeOrOptions;
        this.onShowToast = options.onShowToast;
      } else {
        this.scanner = options.setiScanner || storeOrOptions?.setiScanner || new SetiScanner();
        this.onShowToast = options.onShowToast || storeOrOptions?.onShowToast;
      }
    }

    this.isOpen = false;
    this.animFrameId = null;

    this.initDOM();
    this.store.subscribe(
      (open) => this.toggle(open),
      (s) => s.ui.isSetiOpen
    );
  }

  initDOM() {
    this.modalEl = document.createElement("div");
    this.modalEl.className = "seti-modal-backdrop";
    this.modalEl.hidden = true;
    this.root.appendChild(this.modalEl);

    this.modalEl.innerHTML = `
      <div class="seti-modal">
        <div class="seti-header">
          <div class="seti-title-group">
            <span class="seti-icon">📡</span>
            <div>
              <h2>Deep Space SETI Radio Receiver</h2>
              <p class="seti-sub">1420 MHz Hydrogen "Water Hole" Spectrogram Waterfall</p>
            </div>
          </div>
          <button class="seti-close-btn" id="seti-close-x">✕</button>
        </div>

        <div class="seti-body">
          <div class="waterfall-container">
            <canvas id="seti-waterfall-canvas" width="480" height="240"></canvas>
            <div class="waterfall-freq-markers">
              <span>1420.0 MHz</span>
              <span>1420.5 MHz</span>
              <span>1421.0 MHz</span>
            </div>
          </div>

          <div class="seti-controls-card">
            <div class="tuning-dial-group">
              <label>Tuner Frequency: <span id="seti-freq-val">1420.405 MHz</span></label>
              <input type="range" id="seti-freq-slider" min="1420.0" max="1421.0" step="0.005" value="1420.405" class="builder-range" />
            </div>

            <div class="signal-decoder-card" id="signal-decoder-card">
              <div class="signal-name" id="signal-name">Scanning 1420 MHz Spectrum...</div>
              <div class="signal-details" id="signal-details">Adjust the frequency tuner to match intercepted carrier peaks.</div>
              <div class="signal-snr-bar" id="signal-snr-bar" hidden>
                <span>Signal Strength:</span>
                <div class="snr-fill-track"><div class="snr-fill" id="snr-fill" style="width: 0%"></div></div>
              </div>
            </div>

            <div class="seti-actions">
              <button class="seti-audio-btn" id="seti-audio-btn">🔊 Demodulate Audio</button>
            </div>
          </div>
        </div>
      </div>
    `;

    this.canvas = this.modalEl.querySelector("#seti-waterfall-canvas");
    this.ctx = this.canvas?.getContext("2d");

    this.bindEvents();
  }

  bindEvents() {
    this.modalEl.querySelector("#seti-close-x")?.addEventListener("click", () => this.close());

    const slider = this.modalEl.querySelector("#seti-freq-slider");
    slider?.addEventListener("input", (e) => {
      const freq = Number(e.target.value);
      this.scanner.setFrequency(freq);
      const valEl = this.modalEl.querySelector("#seti-freq-val");
      if (valEl) valEl.textContent = `${freq.toFixed(3)} MHz`;
      this.updateSignalDecoder();
    });

    const audioBtn = this.modalEl.querySelector("#seti-audio-btn");
    audioBtn?.addEventListener("click", () => {
      const isListening = this.scanner.toggleListen();
      audioBtn.classList.toggle("active", isListening);
      audioBtn.textContent = isListening ? "🔇 Mute Audio" : "🔊 Demodulate Audio";
    });
  }

  toggle(open) {
    this.isOpen = open;
    this.modalEl.hidden = !open;
    if (open) {
      this.updateSignalDecoder();
      this.startWaterfallLoop();
    } else {
      this.stopWaterfallLoop();
      if (this.scanner.isListening) {
        this.scanner.toggleListen();
      }
    }
  }

  close() {
    this.store.dispatch(Actions.toggleSetiScanner(false));
  }

  updateSignalDecoder() {
    const sig = this.scanner.detectSignal();
    const nameEl = this.modalEl.querySelector("#signal-name");
    const detailsEl = this.modalEl.querySelector("#signal-details");
    const snrBar = this.modalEl.querySelector("#signal-snr-bar");
    const snrFill = this.modalEl.querySelector("#snr-fill");

    if (sig) {
      if (nameEl) nameEl.textContent = `🎯 ${sig.name} [${sig.code}]`;
      if (detailsEl) detailsEl.textContent = `${sig.description} · Origin: ${sig.origin}`;
      if (snrBar) snrBar.hidden = false;
      if (snrFill) snrFill.style.width = `${Math.min(sig.snrDb * 2.5, 100)}%`;
      this.store.dispatch(Actions.interceptSetiSignal(sig));
    } else {
      if (nameEl) nameEl.textContent = "Scanning Background Cosmos...";
      if (detailsEl)
        detailsEl.textContent =
          "Background hydrogen emissions nominal. No coherent carrier detected at current frequency.";
      if (snrBar) snrBar.hidden = true;
    }
  }

  startWaterfallLoop() {
    if (!this.ctx || !this.canvas) return;

    const shiftWaterfall = () => {
      if (!this.isOpen) return;

      // Shift existing canvas rows downward
      const imgData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height - 2);
      this.ctx.putImageData(imgData, 0, 2);

      // Generate new top row
      const row = this.scanner.generateSpectrogramRow();
      const colWidth = this.canvas.width / row.length;

      for (let i = 0; i < row.length; i++) {
        const val = row[i];
        if (val > 0.6) {
          this.ctx.fillStyle = `rgb(${Math.round(val * 255)}, 220, 120)`;
        } else if (val > 0.3) {
          this.ctx.fillStyle = `rgb(98, ${Math.round(val * 240)}, 255)`;
        } else {
          this.ctx.fillStyle = `rgb(${Math.round(val * 40)}, ${Math.round(val * 60)}, ${Math.round(val * 120)})`;
        }
        this.ctx.fillRect(i * colWidth, 0, colWidth + 1, 2);
      }

      this.animFrameId = requestAnimationFrame(shiftWaterfall);
    };

    this.animFrameId = requestAnimationFrame(shiftWaterfall);
  }

  stopWaterfallLoop() {
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = null;
    }
  }
}

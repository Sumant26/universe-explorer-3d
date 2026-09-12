/**
 * @file TelemetryHUD.js
 * Bottom-of-screen flight instruments: speed (fraction of c), ETA, and the
 * ship-time vs. Earth-time dilation readout during warp.
 */

import { formatDuration } from '../physics/RelativityEngine.js';

export class TelemetryHUD {
  /**
   * @param {HTMLElement} root
   * @param {import('../state/Store.js').Store} store
   * @param {{
   *   onToggleHyperdrive?: () => void,
   *   onZoomIn?: () => void,
   *   onZoomOut?: () => void
   * }} [handlers]
   */
  constructor(root, store, handlers = {}) {
    if (!root) throw new Error('TelemetryHUD requires a root element');
    this.root = root;
    this.store = store;
    this._onToggleHyperdrive = handlers.onToggleHyperdrive ?? (() => {});
    this._onZoomIn = handlers.onZoomIn ?? (() => {});
    this._onZoomOut = handlers.onZoomOut ?? (() => {});
    this._render();
    this._unsubscribe = store.subscribe(
      (telemetry) => this._update(telemetry),
      (s) => s.flightTelemetry
    );
  }

  /** @private */
  _render() {
    this.root.innerHTML = `
      <div class="telemetry-hud-wrapper">
        <div class="flight-controls-hint">
          <span class="hint-key">W A S D</span> Flight &bull; <span class="hint-key">Shift</span> Hyperdrive &bull; <span class="hint-key">Scroll</span> Zoom &bull; <span class="hint-key">C</span> View
        </div>
        <div class="telemetry-hud">
          <button type="button" class="drive-status-badge" title="Toggle Hyperdrive Fast Flight">
            <span class="status-dot"></span>
            <span class="status-label" data-field="drive-status">Sublight</span>
          </button>
          <div class="telemetry-item"><span class="label">Speed</span><span class="value" data-field="speed">0.000c</span></div>
          <div class="telemetry-item"><span class="label">ETA</span><span class="value" data-field="eta">—</span></div>
          <div class="telemetry-item"><span class="label">Ship time</span><span class="value" data-field="ship-time">0s</span></div>
          <div class="telemetry-item"><span class="label">Earth time</span><span class="value" data-field="earth-time">0s</span></div>
          <div class="zoom-controls" role="group" aria-label="Camera Zoom">
            <button type="button" class="zoom-btn" data-action="zoom-in" title="Zoom In (+)">+</button>
            <button type="button" class="zoom-btn" data-action="zoom-out" title="Zoom Out (-)">−</button>
          </div>
        </div>
      </div>
    `;
    this._els = {
      speed: this.root.querySelector('[data-field="speed"]'),
      eta: this.root.querySelector('[data-field="eta"]'),
      shipTime: this.root.querySelector('[data-field="ship-time"]'),
      earthTime: this.root.querySelector('[data-field="earth-time"]'),
      driveStatus: this.root.querySelector('[data-field="drive-status"]'),
      driveBadge: this.root.querySelector('.drive-status-badge')
    };

    this._els.driveBadge?.addEventListener('click', () => {
      this._onToggleHyperdrive();
    });

    this.root.querySelector('[data-action="zoom-in"]')?.addEventListener('click', () => {
      this._onZoomIn();
    });

    this.root.querySelector('[data-action="zoom-out"]')?.addEventListener('click', () => {
      this._onZoomOut();
    });
  }

  /**
   * @param {object} telemetry
   * @param {boolean} [isBoost]
   */
  updateDriveMode(isBoost) {
    if (!this._els.driveStatus || !this._els.driveBadge) return;
    this._els.driveStatus.textContent = isBoost ? 'Hyperdrive' : 'Sublight';
    this._els.driveBadge.classList.toggle('hyperdrive-active', Boolean(isBoost));
  }

  /** @private @param {object} telemetry */
  _update(telemetry) {
    if (!telemetry) return;
    this._els.speed.textContent = `${telemetry.currentSpeedC.toFixed(3)}c`;
    this._els.eta.textContent = telemetry.etaSeconds > 0 ? formatDuration(telemetry.etaSeconds) : '—';
    this._els.shipTime.textContent = formatDuration(telemetry.timeDilationShipSec);
    this._els.earthTime.textContent = formatDuration(telemetry.timeDilationEarthSec);
  }

  dispose() {
    this._unsubscribe?.();
  }
}

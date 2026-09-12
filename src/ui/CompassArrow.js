/**
 * @file CompassArrow.js
 * The manual-mode guidance widget: a rotating arrow that always points
 * toward the searched target, plus a live distance readout. Updated every
 * frame directly (not through the Store) since bearing changes constantly
 * and doesn't need to be globally observable app state.
 */

import { FlightMode } from '../state/StateActions.js';

export class CompassArrow {
  /**
   * @param {HTMLElement} root
   * @param {import('../state/Store.js').Store} store
   */
  constructor(root, store) {
    if (!root) throw new Error('CompassArrow requires a root element');
    this.root = root;
    this.store = store;
    this._render();
    this._unsubscribe = store.subscribe(
      (mode) => this._setVisible(mode === FlightMode.MANUAL),
      (s) => s.flightMode
    );
    this._setVisible(store.getState().flightMode === FlightMode.MANUAL);
  }

  /** @private */
  _render() {
    this.root.innerHTML = `
      <div class="compass-arrow" hidden>
        <svg viewBox="0 0 64 64" class="compass-svg" aria-hidden="true">
          <circle cx="32" cy="32" r="28" class="compass-ring" />
          <polygon points="32,10 40,40 32,32 24,40" class="compass-needle" />
        </svg>
        <span class="compass-distance">—</span>
        <span class="compass-hint">Fly toward the arrow</span>
      </div>
    `;
    this._arrowEl = this.root.querySelector('.compass-arrow');
    this._needleEl = this.root.querySelector('.compass-needle');
    this._distanceEl = this.root.querySelector('.compass-distance');
  }

  /** @private @param {boolean} visible */
  _setVisible(visible) {
    if (this._arrowEl) this._arrowEl.hidden = !visible;
  }

  /**
   * @param {?ReturnType<typeof import('../spaceship/FlightPhysics.js').computeBearing>} bearing
   */
  update(bearing) {
    if (!bearing || !this._needleEl) return;
    // Signed yaw angle in the ship's local XZ plane (screen-space approximation).
    const yawDeg = Math.atan2(bearing.directionToTarget.x, -bearing.directionToTarget.z) * (180 / Math.PI);
    this._needleEl.setAttribute('transform', `rotate(${yawDeg} 32 32)`);
    this._needleEl.classList.toggle('aligned', bearing.aligned);
    // This is a flight-instrument gauge showing scene-relative distance, not
    // the real astronomical distance (that lives in the Detail Panel) — so
    // it's labeled in generic "flight units" rather than km/AU/ly.
    this._distanceEl.textContent = `${bearing.distance.toFixed(1)} flight units`;
  }

  dispose() {
    this._unsubscribe?.();
  }
}

import * as THREE from 'three';
import { store } from '../state/Store.js';
import { getCelestialById } from '../celestial/CelestialData.js';
import { CoordinateSystem } from '../physics/CoordinateSystem.js';

/**
 * Navigation Waypoint Indicator
 * Shows a cozy floating HUD waypoint card with distance readout,
 * Auto-Align button, and Cruise/Warp controls.
 */
export class NavWaypointIndicator {
  constructor({ containerId, onAlignClick, onAccelerateClick }) {
    this.container = document.getElementById(containerId);
    this.onAlignClick = onAlignClick;
    this.onAccelerateClick = onAccelerateClick;
    this.currentTargetId = null;

    this._bindStore();
    this.render();
  }

  _bindStore() {
    store.subscribe('selectedObjectId', (id) => {
      this.currentTargetId = id;
      this.render();
    });
  }

  render() {
    if (!this.container) return;

    if (!this.currentTargetId) {
      this.container.innerHTML = '';
      return;
    }

    const data = getCelestialById(this.currentTargetId);
    if (!data) return;

    const distFormatted = CoordinateSystem.formatDistance(data.distanceFromEarthKm);

    this.container.innerHTML = `
      <div class="glass-panel nav-waypoint-card">
        <div style="display: flex; align-items: center; justify-content: space-between; gap: 14px;">
          <div>
            <div style="font-family: var(--font-tech); font-size: 11px; color: var(--color-pastel-amber); font-weight: 700; letter-spacing: 1px;">
              SCENIC DESTINATION
            </div>
            <div style="font-family: var(--font-display); font-size: 16px; font-weight: 700; color: #ffffff;">
              ${data.name}
            </div>
          </div>
          <span style="font-family: var(--font-tech); font-size: 13px; color: rgba(253, 246, 236, 0.75); font-weight: 600;">
            ${distFormatted.formatted}
          </span>
        </div>

        <div style="display: flex; gap: 8px; margin-top: 12px;">
          <button class="scale-btn" id="btn-auto-align" style="flex: 1; padding: 7px 12px; font-size: 12px;">
            🎯 AUTO-ALIGN
          </button>
          <button class="scale-btn active" id="btn-auto-accel" style="flex: 1; padding: 7px 12px; font-size: 12px;">
            ✨ WARP CRUISE
          </button>
        </div>
      </div>
    `;

    document.getElementById('btn-auto-align')?.addEventListener('click', () => {
      if (this.onAlignClick && this.currentTargetId) {
        this.onAlignClick(this.currentTargetId);
      }
    });

    document.getElementById('btn-auto-accel')?.addEventListener('click', () => {
      if (this.onAccelerateClick && this.currentTargetId) {
        this.onAccelerateClick(this.currentTargetId);
      }
    });
  }
}

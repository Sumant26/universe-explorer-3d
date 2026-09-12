/**
 * @file DetailPanel.js
 * Shows the full detail card for the currently selected/arrived-at
 * astronomical object: name, location, galaxy, solar system, distance from
 * Earth, travel time, habitability, and atmosphere.
 */

import { getCelestialBodyById } from "../celestial/CelestialData.js";
import { getSatelliteById } from "../celestial/SatelliteData.js";
import { computeHabitability, normalizeAtmosphere } from "../physics/HabitabilityEngine.js";
import { computeTravelBreakdown, formatDuration } from "../physics/RelativityEngine.js";
import { formatDistance } from "../physics/CoordinateSystem.js";
import { Actions } from "../state/StateActions.js";

export class DetailPanel {
  /**
   * @param {HTMLElement} root
   * @param {import('../state/Store.js').Store} store
   */
  constructor(root, store) {
    if (!root) throw new Error("DetailPanel requires a root element");
    this.root = root;
    this.store = store;
    this._currentId = null;

    this._unsubscribers = [
      store.subscribe(
        () => this._render(),
        (s) => `${s.selectedObject}|${s.ui.isDetailPanelOpen}`
      ),
    ];
    this._render();
  }

  /** @param {string} id - celestial body id or satellite id */
  show(id) {
    this._currentId = id;
    this.store.dispatch(Actions.selectObject(id));
    this.store.dispatch(Actions.toggleDetailPanel(true));
  }

  close() {
    this.store.dispatch(Actions.toggleDetailPanel(false));
  }

  /** @private */
  _render() {
    const state = this.store.getState();
    if (!state.ui.isDetailPanelOpen) {
      this.root.innerHTML = "";
      this.root.hidden = true;
      return;
    }

    const id = this._currentId ?? state.selectedObject;
    const body = getCelestialBodyById(id);
    const satellite = !body ? getSatelliteById(id) : null;

    if (!body && !satellite) {
      this.root.innerHTML = `
        <div class="detail-panel empty">
          <p>Search for a world, star, galaxy, or satellite to see its story here.</p>
        </div>`;
      this.root.hidden = false;
      return;
    }

    this.root.hidden = false;
    this.root.innerHTML = body ? this._renderCelestial(body) : this._renderSatellite(satellite);

    this.root.querySelector(".detail-close")?.addEventListener("click", () => this.close());
    this.root.querySelector('[data-action="open-habitability"]')?.addEventListener("click", () => {
      this.store.dispatch(Actions.toggleHabitability(true));
    });
  }

  /** @private */
  _renderCelestial(body) {
    let habitability;
    try {
      habitability = computeHabitability(body.environment);
    } catch (err) {
      console.error("[DetailPanel] habitability calc failed:", err);
      habitability = { score: 0, classification: "Unknown", factors: {} };
    }

    let travel;
    try {
      travel = computeTravelBreakdown(body.distanceFromEarthKm);
    } catch (err) {
      console.error("[DetailPanel] travel calc failed:", err);
      travel = null;
    }

    const atmosphere = normalizeAtmosphere(body.environment.composition);
    const isHabitable = habitability.score >= 45;

    return `
      <div class="detail-panel">
        <button type="button" class="detail-close" aria-label="Close details">&times;</button>
        <h2 class="detail-title">${escapeHtml(body.name)}</h2>
        <p class="detail-description">${escapeHtml(body.description)}</p>

        <dl class="detail-fields">
          <div><dt>Location</dt><dd>${escapeHtml(body.location)}</dd></div>
          <div><dt>Galaxy</dt><dd>${escapeHtml(body.galaxy)}</dd></div>
          <div><dt>Solar system</dt><dd>${escapeHtml(body.solarSystem ?? "Not applicable")}</dd></div>
          <div><dt>Distance from Earth</dt><dd>${escapeHtml(formatDistance(body.distanceFromEarthKm))}</dd></div>
          <div><dt>Time to reach it</dt><dd>${travel ? escapeHtml(formatDuration(travel.relativistic999c.seconds)) + " at 0.999c" : "Unknown"}</dd></div>
          <div><dt>Habitable?</dt><dd class="${isHabitable ? "yes" : "no"}">${isHabitable ? `Yes — ${habitability.classification}` : `No — ${habitability.classification}`}</dd></div>
          <div class="atmosphere-field"><dt>Atmosphere</dt><dd>${this._renderAtmosphere(atmosphere)}</dd></div>
        </dl>

        ${travel ? this._renderTravelBreakdown(travel) : ""}

        <button type="button" class="detail-habitability-score" data-action="open-habitability">
          <span>Habitability score</span>
          <div class="score-bar"><div class="score-bar-fill" style="width:${habitability.score}%"></div></div>
          <span>${habitability.score}%</span>
        </button>
      </div>
    `;
  }

  /** @private */
  _renderSatellite(satellite) {
    return `
      <div class="detail-panel">
        <button type="button" class="detail-close" aria-label="Close details">&times;</button>
        <h2 class="detail-title">${escapeHtml(satellite.name)}</h2>
        <p class="detail-description">${escapeHtml(satellite.description)}</p>
        <dl class="detail-fields">
          <div><dt>Agency</dt><dd>${escapeHtml(satellite.agency)}</dd></div>
          <div><dt>Launched</dt><dd>${escapeHtml(String(satellite.launchYear))}</dd></div>
          <div><dt>Status</dt><dd>${escapeHtml(satellite.status)}</dd></div>
          <div><dt>Purpose</dt><dd>${escapeHtml(satellite.purpose)}</dd></div>
          <div><dt>Current location</dt><dd>${escapeHtml(satellite.location)}</dd></div>
          <div><dt>Distance from Earth</dt><dd>${escapeHtml(formatDistance(satellite.distanceFromEarthKm))}</dd></div>
        </dl>
      </div>
    `;
  }

  /** @private */
  _renderAtmosphere(atmosphere) {
    if (atmosphere.length === 0) return '<span class="no-atmosphere">No meaningful atmosphere</span>';
    return `<ul class="atmosphere-list">${atmosphere
      .map((a) => `<li><span>${escapeHtml(a.gas)}</span><span>${a.percent}%</span></li>`)
      .join("")}</ul>`;
  }

  /** @private */
  _renderTravelBreakdown(travel) {
    const rows = [travel.lightSpeed, travel.relativistic999c, travel.fusionDrive01c, travel.chemicalRocket];
    return `
      <div class="travel-breakdown">
        <h3>How long would it take?</h3>
        <ul>
          ${rows
            .map(
              (r) => `<li><span>${escapeHtml(r.label)}</span><span>${escapeHtml(formatDuration(r.seconds))}</span></li>`
            )
            .join("")}
        </ul>
      </div>
    `;
  }

  dispose() {
    this._unsubscribers.forEach((u) => u());
  }
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str ?? "";
  return div.innerHTML;
}

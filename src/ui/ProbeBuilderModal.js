/**
 * @file ProbeBuilderModal.js
 * Interactive modal allowing players to design, customize, and deploy
 * artificial satellites, science orbiters, and solar sails into custom planetary orbits.
 */

import { Actions } from "../state/StateActions.js";
import { PROBE_CHASSIS, calculateSignalLatency, calculateSolarPower } from "../physics/CustomProbeBuilder.js";
import { CELESTIAL_BODIES } from "../celestial/CelestialData.js";

export class ProbeBuilderModal {
  /**
   * @param {HTMLElement} root
   * @param {import('../state/Store.js').Store} store
   * @param {{ onShowToast?: (msg: string) => void }} options
   */
  constructor(root, store, options = {}) {
    this.root = root;
    this.store = store;
    this.onShowToast = options.onShowToast;

    this.selectedChassis = "CUBESAT";
    this.selectedParent = "earth";
    this.probeName = "Aegis-1";
    this.orbitRadiusKm = 12000;
    this.inclinationDeg = 28;

    this.init();
    this.store.subscribe(
      (open) => this.toggle(open),
      (s) => s.ui.isProbeBuilderOpen
    );
  }

  init() {
    this.modalEl = document.createElement("div");
    this.modalEl.className = "probe-builder-backdrop";
    this.modalEl.hidden = true;
    this.root.appendChild(this.modalEl);

    this.render();
  }

  toggle(open) {
    this.modalEl.hidden = !open;
    if (open) {
      this.render();
    }
  }

  render() {
    const parentBody = CELESTIAL_BODIES.find((b) => b.id === this.selectedParent) || CELESTIAL_BODIES[3];
    const chassis = PROBE_CHASSIS[this.selectedChassis] || PROBE_CHASSIS.CUBESAT;

    const distSunAu = (parentBody.distanceFromEarthKm + 149597870) / 149597870;
    const power = calculateSolarPower(distSunAu, chassis.basePowerW);
    const latency = calculateSignalLatency(parentBody.distanceFromEarthKm);

    this.modalEl.innerHTML = `
      <div class="probe-builder-modal">
        <div class="builder-header">
          <div class="builder-title-group">
            <span class="builder-icon">🛰️</span>
            <div>
              <h2>Orbital Probe Workshop</h2>
              <p class="builder-sub">Design & launch custom probes into planetary orbits</p>
            </div>
          </div>
          <button class="builder-close-btn" id="builder-close-x">✕</button>
        </div>

        <div class="builder-body">
          <div class="builder-column">
            <div class="builder-form-group">
              <label>Probe Designation Name</label>
              <input type="text" id="builder-name-input" class="builder-input" value="${this.probeName}" />
            </div>

            <div class="builder-form-group">
              <label>Chassis Archetype</label>
              <div class="chassis-grid">
                ${Object.values(PROBE_CHASSIS)
                  .map(
                    (c) => `
                  <div class="chassis-card ${c.id === this.selectedChassis ? "selected" : ""}" data-chassis="${c.id}">
                    <div class="chassis-icon">${c.icon}</div>
                    <div class="chassis-name">${c.name}</div>
                    <div class="chassis-meta">${c.massKg} kg · ${c.scienceSensor}</div>
                  </div>
                `
                  )
                  .join("")}
              </div>
            </div>

            <div class="builder-form-group">
              <label>Parent Target Body</label>
              <select id="builder-parent-select" class="builder-select">
                ${CELESTIAL_BODIES.filter((b) => ["planet", "moon", "star"].includes(b.type))
                  .map(
                    (b) => `
                  <option value="${b.id}" ${b.id === this.selectedParent ? "selected" : ""}>
                    ${b.name} (${b.system || "Solar System"})
                  </option>
                `
                  )
                  .join("")}
              </select>
            </div>
          </div>

          <div class="builder-column">
            <div class="builder-form-group">
              <label>Orbital Altitude: <span id="radius-val">${(this.orbitRadiusKm / 1000).toFixed(0)}k km</span></label>
              <input type="range" id="builder-radius-slider" min="3000" max="60000" step="1000" value="${this.orbitRadiusKm}" class="builder-range" />
            </div>

            <div class="builder-form-group">
              <label>Orbital Inclination: <span id="inc-val">${this.inclinationDeg}°</span></label>
              <input type="range" id="builder-inc-slider" min="0" max="90" step="1" value="${this.inclinationDeg}" class="builder-range" />
            </div>

            <div class="telemetry-preview-card">
              <div class="preview-title">Real-time Telemetry Estimate</div>
              <div class="preview-grid">
                <div class="preview-stat">
                  <span class="preview-label">Signal Delay (1-way)</span>
                  <span class="preview-value">${latency.formatted}</span>
                </div>
                <div class="preview-stat">
                  <span class="preview-label">Solar Generation</span>
                  <span class="preview-value">${power.currentPowerW.toFixed(0)} W (${power.status})</span>
                </div>
                <div class="preview-stat">
                  <span class="preview-label">Dry Mass</span>
                  <span class="preview-value">${chassis.massKg} kg</span>
                </div>
                <div class="preview-stat">
                  <span class="preview-label">Primary Sensor</span>
                  <span class="preview-value sensor">${chassis.scienceSensor}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="builder-footer">
          <button class="builder-btn-cancel" id="builder-cancel-btn">Cancel</button>
          <button class="builder-btn-launch" id="builder-launch-btn">🚀 Deploy to Orbit</button>
        </div>
      </div>
    `;

    this.bindEvents();
  }

  bindEvents() {
    this.modalEl.querySelector("#builder-close-x")?.addEventListener("click", () => this.close());
    this.modalEl.querySelector("#builder-cancel-btn")?.addEventListener("click", () => this.close());

    this.modalEl.querySelectorAll(".chassis-card").forEach((card) => {
      card.addEventListener("click", () => {
        this.selectedChassis = card.dataset.chassis;
        this.render();
      });
    });

    const nameInput = this.modalEl.querySelector("#builder-name-input");
    nameInput?.addEventListener("input", (e) => {
      this.probeName = e.target.value;
    });

    const parentSelect = this.modalEl.querySelector("#builder-parent-select");
    parentSelect?.addEventListener("change", (e) => {
      this.selectedParent = e.target.value;
      this.render();
    });

    const radiusSlider = this.modalEl.querySelector("#builder-radius-slider");
    radiusSlider?.addEventListener("input", (e) => {
      this.orbitRadiusKm = Number(e.target.value);
      const valEl = this.modalEl.querySelector("#radius-val");
      if (valEl) valEl.textContent = `${(this.orbitRadiusKm / 1000).toFixed(0)}k km`;
    });

    const incSlider = this.modalEl.querySelector("#builder-inc-slider");
    incSlider?.addEventListener("input", (e) => {
      this.inclinationDeg = Number(e.target.value);
      const valEl = this.modalEl.querySelector("#inc-val");
      if (valEl) valEl.textContent = `${this.inclinationDeg}°`;
    });

    this.modalEl.querySelector("#builder-launch-btn")?.addEventListener("click", () => {
      this.launch();
    });
  }

  launch() {
    const chassis = PROBE_CHASSIS[this.selectedChassis] || PROBE_CHASSIS.CUBESAT;
    const id = `custom-probe-${Date.now()}`;
    const name = this.probeName.trim() || `Probe-${Math.floor(Math.random() * 900 + 100)}`;

    const customSatellite = {
      id,
      name,
      chassis: this.selectedChassis,
      parentId: this.selectedParent,
      orbitRadiusKm: this.orbitRadiusKm,
      inclinationDeg: this.inclinationDeg,
      icon: chassis.icon,
      launchedAt: Date.now(),
      distanceFromEarthKm: 150000,
    };

    this.store.dispatch(Actions.addCustomSatellite(customSatellite));
    this.onShowToast?.(`🚀 Satellite "${name}" deployed into orbit!`);
    this.close();
  }

  close() {
    this.store.dispatch(Actions.toggleProbeBuilder(false));
  }
}

/**
 * @file CockpitInteractions.js
 * Raycasting and interactive controls for the First-Person Cockpit View:
 *  - Cabin dome reading lamp switch (toggles warm interior light)
 *  - Radio knob (tunes channels and toggles space radio)
 *  - Warp throttle lever (engages autopilot jump)
 *  - Bobblehead / dice (nudges with physical spring rebound)
 *  - Dashboard HUD palette theme toggle
 */

import * as THREE from "three";

export const COCKPIT_PALETTES = [
  { name: "Warm Amber", primary: "#ffb854", secondary: "#ffd27a" },
  { name: "Emerald Retro", primary: "#58e890", secondary: "#a0ffd0" },
  { name: "Cyber Cyan", primary: "#62e8ff", secondary: "#b5f5ff" },
];

export class CockpitInteractions {
  /**
   * @param {{
   *   camera: THREE.Camera,
   *   shipGroup: THREE.Group,
   *   audio?: any,
   *   spaceRadio?: any,
   *   bobbleheadProp?: any,
   *   onEngageWarp?: () => void,
   *   onShowToast?: (msg: string) => void
   * }} options
   */
  constructor(options) {
    this.camera = options.camera;
    this.shipGroup = options.shipGroup;
    this.audio = options.audio;
    this.spaceRadio = options.spaceRadio;
    this.bobblehead = options.bobbleheadProp;
    this.onEngageWarp = options.onEngageWarp;
    this.onShowToast = options.onShowToast;

    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();

    this.cabinLightOn = true;
    this.currentPaletteIndex = 0;
  }

  /**
   * Handles pointer click on 3D cockpit objects.
   * @param {MouseEvent} event
   * @param {boolean} isCockpitView
   * @returns {boolean} True if an interactive element was clicked.
   */
  handleClick(event, isCockpitView) {
    if (!isCockpitView || !this.camera || !this.shipGroup) return false;

    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObjects(this.shipGroup.children, true);

    if (intersects.length === 0) return false;

    // Search up hierarchy for named interactive objects
    for (const hit of intersects) {
      let obj = hit.object;
      while (obj && obj !== this.shipGroup) {
        if (obj.name === "switch-cabin-light" || obj.name === "lamp-bulb") {
          this.toggleCabinLight();
          return true;
        }
        if (obj.name === "radio-knob" || obj.name === "dash-radio") {
          this.tuneRadio();
          return true;
        }
        if (obj.name === "warp-lever") {
          this.triggerWarpLever();
          return true;
        }
        if (obj.name === "bobblehead-head" || obj.name === "bobblehead-prop") {
          this.tapBobblehead();
          return true;
        }
        if (obj.name === "coffee-mug" || obj.name === "coffee-mug-body") {
          this.tapCoffeeMug();
          return true;
        }
        if (obj.name === "palette-switch") {
          this.cycleTheme();
          return true;
        }
        obj = obj.parent;
      }
    }

    return false;
  }

  tapCoffeeMug() {
    this.audio?.playChirp();
    this.onShowToast?.("☕ Hot space roast coffee — cozy and warm!");
  }

  toggleCabinLight() {
    this.cabinLightOn = !this.cabinLightOn;
    const lamp = this.shipGroup.getObjectByName("cabin-lamp-light");
    if (lamp) {
      lamp.intensity = this.cabinLightOn ? 1.6 : 0.05;
    }
    const bulb = this.shipGroup.getObjectByName("lamp-bulb");
    if (bulb && bulb.material) {
      bulb.material.color.setHex(this.cabinLightOn ? 0xffdfaa : 0x443322);
    }
    this.audio?.playChirp();
    this.onShowToast?.(this.cabinLightOn ? "Cabin Light: ON" : "Cabin Light: OFF");
  }

  tuneRadio() {
    if (!this.spaceRadio) return;
    if (!this.spaceRadio.isPlaying) {
      this.spaceRadio.start();
      const station = this.spaceRadio.getCurrentStation();
      this.onShowToast?.(`📻 Space Radio: ON (${station.name})`);
    } else {
      const station = this.spaceRadio.tuneNext();
      this.onShowToast?.(`📻 Radio: ${station.name} [${station.frequency}]`);
    }
    this.audio?.playChirp();
  }

  triggerWarpLever() {
    this.audio?.playChirp();
    this.onEngageWarp?.();
  }

  tapBobblehead() {
    if (this.bobblehead) {
      this.bobblehead.nudge(3.5, (Math.random() - 0.5) * 4.0);
    }
    this.audio?.playChirp();
  }

  cycleTheme() {
    this.currentPaletteIndex = (this.currentPaletteIndex + 1) % COCKPIT_PALETTES.length;
    const palette = COCKPIT_PALETTES[this.currentPaletteIndex];
    document.documentElement.style.setProperty("--color-amber-glow", palette.primary);
    this.onShowToast?.(`Dashboard HUD Palette: ${palette.name}`);
    this.audio?.playChirp();
  }
}

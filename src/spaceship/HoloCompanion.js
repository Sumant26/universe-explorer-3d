/**
 * @file HoloCompanion.js
 * Holographic Cabin AI Companion ("Different") floating above the dashboard holo-emitter.
 * Features an animated 3D gyro-holo mesh, speech synthesis, and contextual flight lore.
 */

import * as THREE from "three";
import { Actions } from "../state/StateActions.js";
import { getCelestialBodyById } from "../celestial/CelestialData.js";

export const CELESTIAL_LORE_CUES = {
  mars: "Captain, Mars hosts Olympus Mons — a volcano three times the height of Mount Everest!",
  jupiter: "Approaching the king of planets. Jupiter's magnetic field is fourteen times stronger than Earth's.",
  saturn: "Saturn's rings span 280,000 kilometers across, yet they are only about 10 meters thick!",
  europa: "Europa's hidden saltwater ocean may contain more water than all of Earth's oceans combined.",
  titan: "Titan is the only moon in the solar system with a dense atmosphere and liquid methane lakes.",
  "sagittarius-a-star": "Singularity warning! 4 million solar masses concentrated beyond the event horizon.",
  sun: "Solar corona proximity detected. Surface temperature exceeds 5,500 degrees Celsius.",
  moon: "Entering lunar orbit. Mare Tranquillitatis beneath our forward flight path.",
};

export class HoloCompanion {
  /**
   * @param {import('../state/Store.js').Store} store
   * @param {{ onShowToast?: (msg: string) => void }} options
   */
  constructor(store, options = {}) {
    this.store = store;
    this.onShowToast = options.onShowToast;

    this.group = new THREE.Group();
    this.group.name = "holo-companion";

    this.enabled = true;
    this.isSpeaking = false;

    this.initMesh();

    // Subscribe to target selections to announce contextual astronomy lore
    this.store.subscribe(
      (targetId) => {
        if (targetId && this.enabled) {
          this.announceBody(targetId);
        }
      },
      (s) => s.targetObject
    );
  }

  initMesh() {
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x62e8ff,
      wireframe: true,
    });
    this.core = new THREE.Mesh(new THREE.IcosahedronGeometry(0.018, 1), coreMat);

    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xffd27a,
      wireframe: true,
    });
    this.outerRing = new THREE.Mesh(new THREE.TorusGeometry(0.026, 0.002, 8, 24), ringMat);
    this.innerRing = new THREE.Mesh(new THREE.TorusGeometry(0.022, 0.002, 8, 24), ringMat);

    this.haloGlow = new THREE.PointLight(0x62e8ff, 0.6, 0.3);

    this.group.add(this.core, this.outerRing, this.innerRing, this.haloGlow);
    this.group.position.set(0.18, 0.04, -0.06); // Hovering above right holo-emitter
  }

  announceBody(bodyId) {
    const customCue = CELESTIAL_LORE_CUES[bodyId];
    let message = customCue;

    if (!message) {
      const body = getCelestialBodyById(bodyId);
      if (body) {
        message = `Target locked: ${body.name} (${body.type || "Celestial Body"}). Distance: ${(body.distanceFromEarthKm / 1e6).toFixed(1)}M km.`;
      }
    }

    if (message) {
      this.speak(message, "curious");
    }
  }

  warnReentry() {
    this.speak("Thermal warning! Re-entry plasma ionization detected on forward canopy.", "alert");
  }

  warnHighG() {
    this.speak("High-G turn! Inertial dampening engaged.", "warning");
  }

  speak(message, mood = "neutral") {
    this.store.dispatch(Actions.triggerAiSpeech(message, mood));
    this.onShowToast?.(`🤖 Different: "${message}"`);

    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      const utterance = new window.SpeechSynthesisUtterance(message);
      utterance.pitch = 1.35; // Cheerful friendly AI pitch
      utterance.rate = 1.05;
      utterance.volume = 0.65;

      utterance.onstart = () => {
        this.isSpeaking = true;
        this.store.dispatch(Actions.setAiSpeaking(true));
      };
      utterance.onend = () => {
        this.isSpeaking = false;
        this.store.dispatch(Actions.setAiSpeaking(false));
      };

      window.speechSynthesis.speak(utterance);
    }
  }

  speakOnTarget(bodyId) {
    this.announceBody(bodyId);
  }

  tick(dt, elapsed = 0) {
    this.update(dt, elapsed || Date.now() * 0.001);
  }

  update(dt, elapsed) {
    if (!this.group) return;

    // Bobbing vertical hover motion
    this.group.position.y = 0.04 + Math.sin(elapsed * 3.0) * 0.006;

    // Gyro ring rotations
    if (this.outerRing) {
      this.outerRing.rotation.x = elapsed * 1.5;
      this.outerRing.rotation.y = elapsed * 1.2;
    }
    if (this.innerRing) {
      this.innerRing.rotation.y = -elapsed * 2.0;
      this.innerRing.rotation.z = elapsed * 1.4;
    }
    if (this.core) {
      this.core.rotation.y = elapsed * 2.5;
      const scale = 1.0 + Math.sin(elapsed * 6.0) * 0.15;
      this.core.scale.setScalar(scale);
    }
  }
}

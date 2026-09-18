/**
 * @file CosmicEventsManager.js
 * Manages dynamic deep-space particle streams (Perseids, Geminids, Comet Halley debris)
 * and dispatches transient astronomical emergency alerts (Supernovae, Solar Coronal Mass Ejections).
 */

import * as THREE from "three";
import { Actions } from "../state/StateActions.js";

export const METEOR_STREAMS = [
  {
    id: "perseids",
    name: "Perseid Meteor Stream",
    color: 0x62e8ff,
    particleCount: 250,
    radius: 12.0,
    thickness: 1.8,
    center: { x: 0, y: 0.5, z: 2.0 },
  },
  {
    id: "geminids",
    name: "Geminid Asteroidal Debris Belt",
    color: 0xffd27a,
    particleCount: 200,
    radius: 18.0,
    thickness: 2.2,
    center: { x: 5.0, y: -0.8, z: -4.0 },
  },
  {
    id: "halley-tail",
    name: "Halley Comet Ionized Tail",
    color: 0xa8f5ff,
    particleCount: 300,
    radius: 25.0,
    thickness: 1.5,
    center: { x: -8.0, y: 1.2, z: 8.0 },
  },
];

export const TRANSIENT_ALERTS = [
  {
    id: "supernova-andromeda",
    title: "✨ Supernova Optical Flare Detected",
    type: "SUPERNOVA",
    source: "Andromeda Galaxy (M31)",
    description: "Type Ia Supernova detected in outer spiral arm. Massive optical and neutrino brightening.",
  },
  {
    id: "solar-cme-storm",
    title: "⚠️ Solar Coronal Mass Ejection Warning",
    type: "SOLAR_CME",
    source: "Sol Active Region 3842",
    description: "X9.2-class solar flare shockwave inbound. Extreme magnetic ionization on ship HUD.",
  },
];

export class CosmicEventsManager {
  /**
   * @param {THREE.Scene} scene
   * @param {import('../state/Store.js').Store} store
   * @param {{ onShowToast?: (msg: string) => void }} options
   */
  constructor(scene, store, options = {}) {
    this.scene = scene;
    this.store = store;
    this.onShowToast = options.onShowToast;

    this.streamGroups = new Map();
    this.insideStreams = new Set();

    this.initStreams();
  }

  initStreams() {
    for (const stream of METEOR_STREAMS) {
      const geom = new THREE.BufferGeometry();
      const posArray = new Float32Array(stream.particleCount * 3);
      const velArray = new Float32Array(stream.particleCount * 3);

      for (let i = 0; i < stream.particleCount; i++) {
        const theta = Math.random() * Math.PI * 2;
        const r = stream.radius + (Math.random() - 0.5) * stream.thickness;
        const x = stream.center.x + r * Math.cos(theta);
        const y = stream.center.y + (Math.random() - 0.5) * stream.thickness;
        const z = stream.center.z + r * Math.sin(theta);

        posArray[i * 3] = x;
        posArray[i * 3 + 1] = y;
        posArray[i * 3 + 2] = z;

        velArray[i * 3] = (Math.random() - 0.5) * 0.1;
        velArray[i * 3 + 1] = (Math.random() - 0.5) * 0.1;
        velArray[i * 3 + 2] = (Math.random() - 0.5) * 0.1;
      }

      geom.setAttribute("position", new THREE.BufferAttribute(posArray, 3));
      geom.setAttribute("velocity", new THREE.BufferAttribute(velArray, 3));

      const mat = new THREE.PointsMaterial({
        color: stream.color,
        size: 0.12,
        transparent: true,
        opacity: 0.75,
        blending: THREE.AdditiveBlending,
      });

      const points = new THREE.Points(geom, mat);
      points.name = `stream:${stream.id}`;
      this.scene.add(points);
      this.streamGroups.set(stream.id, { points, stream });
    }
  }

  /**
   * Updates stream particle rotation and detects ship collisions with meteor fields.
   * @param {number} dt
   * @param {THREE.Vector3} shipPosition
   */
  update(dt, shipPosition) {
    for (const [id, { points, stream }] of this.streamGroups) {
      points.rotation.y += dt * 0.04;

      // Distance from ship to stream center torus
      const dx = shipPosition.x - stream.center.x;
      const dz = shipPosition.z - stream.center.z;
      const planarDist = Math.sqrt(dx * dx + dz * dz);
      const distToRing = Math.abs(planarDist - stream.radius);
      const distY = Math.abs(shipPosition.y - stream.center.y);

      const isInside = distToRing < stream.thickness && distY < stream.thickness;

      if (isInside && !this.insideStreams.has(id)) {
        this.insideStreams.add(id);
        this.onShowToast?.(`☄️ Entering ${stream.name}! Cosmic particle stream detected.`);
      } else if (!isInside && this.insideStreams.has(id)) {
        this.insideStreams.delete(id);
      }
    }
  }

  /**
   * Triggers a random transient astronomical alert.
   */
  triggerRandomEvent() {
    const alert = TRANSIENT_ALERTS[Math.floor(Math.random() * TRANSIENT_ALERTS.length)];
    this.store.dispatch(Actions.triggerCosmicEvent(alert));
    this.onShowToast?.(`${alert.title}: ${alert.description}`);
  }
}

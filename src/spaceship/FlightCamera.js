/**
 * @file FlightCamera.js
 * Positions the camera relative to the ship for the three view modes, with
 * smooth (lerped) transitions so switching views never pops harshly.
 */

import * as THREE from 'three';
import { CameraMode } from '../state/StateActions.js';

const BASE_OFFSETS = {
  [CameraMode.COCKPIT]: new THREE.Vector3(0, 0.03, 0.04),
  [CameraMode.THIRD_PERSON]: new THREE.Vector3(0, 0.28, 1.25),
  [CameraMode.CINEMATIC]: new THREE.Vector3(0.85, 0.35, 1.1)
};

const LOOK_AHEAD = {
  [CameraMode.COCKPIT]: new THREE.Vector3(0, 0.02, -2.5),
  [CameraMode.THIRD_PERSON]: new THREE.Vector3(0, 0.06, -2.0),
  [CameraMode.CINEMATIC]: new THREE.Vector3(0, 0.03, -0.5)
};

const TRANSITION_SPEED = 10.0; // snug tracking, prevents camera lagging/rubber-banding backwards
const BASE_FOV = 60;
const BOOST_FOV = 74;

export class FlightCamera {
  /**
   * @param {THREE.PerspectiveCamera} camera
   * @param {THREE.Object3D} ship
   */
  constructor(camera, ship) {
    this.camera = camera;
    this.ship = ship;
    this.mode = CameraMode.COCKPIT;
    this._currentPos = new THREE.Vector3();
    this._currentLook = new THREE.Vector3();
    this._mouseParallax = { x: 0, y: 0 };
    this._initialized = false;
    this._zoomLevel = 1.0;
    this._targetZoom = 1.0;
    this._targetFov = BASE_FOV;
  }

  /** @param {string} mode - one of CameraMode */
  setMode(mode) {
    if (Object.values(CameraMode).includes(mode)) {
      this.mode = mode;
    }
  }

  /**
   * Adjusts the camera zoom level.
   * @param {number} delta - negative to zoom in, positive to zoom out.
   */
  adjustZoom(delta) {
    this._targetZoom = clamp(this._targetZoom + delta, 0.45, 2.8);
  }

  /** @param {number} level */
  setZoom(level) {
    this._targetZoom = clamp(level, 0.45, 2.8);
  }

  get zoomLevel() {
    return this._targetZoom;
  }

  /** @param {number} normalizedX -1..1 @param {number} normalizedY -1..1 */
  setMouseParallax(normalizedX, normalizedY) {
    this._mouseParallax.x = clamp(normalizedX, -1, 1);
    this._mouseParallax.y = clamp(normalizedY, -1, 1);
  }

  /**
   * @param {number} dt seconds
   * @param {boolean} [isBoost]
   * @param {number} [speedFraction]
   */
  update(dt, isBoost = false, speedFraction = 0) {
    // Smooth zoom interpolation
    this._zoomLevel += (this._targetZoom - this._zoomLevel) * Math.min(dt * 8, 1);

    const baseOffset = BASE_OFFSETS[this.mode];
    const offset = baseOffset.clone();
    const lookAt = LOOK_AHEAD[this.mode].clone();

    if (this.mode === CameraMode.COCKPIT) {
      offset.x += this._mouseParallax.x * 0.06;
      offset.y += this._mouseParallax.y * 0.04;
      lookAt.x += this._mouseParallax.x * 1.4;
      lookAt.y += this._mouseParallax.y * 0.8;
    } else {
      // Scale exterior camera distance by zoom level
      offset.multiplyScalar(this._zoomLevel);
    }

    // High-speed micro-vibration
    if (isBoost && speedFraction > 0.3) {
      const shakeIntensity = 0.012 * Math.min(speedFraction, 1);
      offset.x += (Math.random() - 0.5) * shakeIntensity;
      offset.y += (Math.random() - 0.5) * shakeIntensity;
    }

    const worldOffset = offset.clone().applyQuaternion(this.ship.quaternion);
    const desiredPos = this.ship.position.clone().add(worldOffset);

    const worldLook = lookAt.clone().applyQuaternion(this.ship.quaternion);
    const desiredLook = this.ship.position.clone().add(worldLook);

    if (!this._initialized) {
      this._currentPos.copy(desiredPos);
      this._currentLook.copy(desiredLook);
      this._initialized = true;
    } else {
      const t = 1 - Math.exp(-TRANSITION_SPEED * dt);
      this._currentPos.lerp(desiredPos, t);
      this._currentLook.lerp(desiredLook, t);
    }

    this.camera.position.copy(this._currentPos);
    this.camera.lookAt(this._currentLook);

    // Dynamic FOV in cockpit mode: scaled by boost and cockpit zoom level
    if (this.mode === CameraMode.COCKPIT) {
      const cockpitFov = (isBoost ? BOOST_FOV : BASE_FOV) * this._zoomLevel;
      this._targetFov = clamp(cockpitFov, 35, 85);
    } else {
      this._targetFov = isBoost ? BOOST_FOV : BASE_FOV;
    }

    if (Math.abs(this.camera.fov - this._targetFov) > 0.05) {
      const fovT = 1 - Math.exp(-3.0 * dt);
      this.camera.fov += (this._targetFov - this.camera.fov) * fovT;
      this.camera.updateProjectionMatrix();
    }
  }
}

function clamp(v, min, max) {
  return Math.min(Math.max(v, min), max);
}

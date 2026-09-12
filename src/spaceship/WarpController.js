/**
 * @file WarpController.js
 * Drives autopilot ("warp") travel: eases the ship from its current
 * position to a target position over a computed duration, drives the
 * warp-streak visual effect, and reports live telemetry (speed, ETA, time
 * dilation) into the Store. Delegates all timing/easing math to the pure
 * WarpProgress module so the sequence itself stays unit-testable.
 */

import * as THREE from "three";
import { computeWarpProgress, chooseJumpDuration, WarpPhase } from "./WarpProgress.js";
import { createWarpStreakMaterial } from "../celestial/shaders/WarpStreakShader.js";
import { lorentzFactor, properTime, SPEED_OF_LIGHT_KM_S } from "../physics/RelativityEngine.js";
import { sceneUnitsToDistanceKm } from "../physics/CoordinateSystem.js";
import { FlightStatus } from "../state/StateActions.js";
import { Actions } from "../state/StateActions.js";

export class WarpController {
  /**
   * @param {object} deps
   * @param {THREE.Scene} deps.scene
   * @param {THREE.Object3D} deps.ship
   * @param {import('../state/Store.js').Store} deps.store
   */
  constructor({ scene, ship, store }) {
    this.scene = scene;
    this.ship = ship;
    this.store = store;

    this._streaks = this._buildStreakField();
    this.scene.add(this._streaks);

    this._active = false;
    this._elapsed = 0;
    this._duration = 0;
    this._startPos = new THREE.Vector3();
    this._endPos = new THREE.Vector3();
    this._distanceKm = 0;
    this._onArrive = null;
  }

  /** @private */
  _buildStreakField(count = 800) {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 2] = -Math.random() * 60;
    }
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const material = createWarpStreakMaterial({});
    const points = new THREE.Points(geometry, material);
    points.name = "warp-streaks";
    points.frustumCulled = false;
    points.visible = false;
    return points;
  }

  /**
   * Begins an autopilot jump.
   * @param {THREE.Vector3} startPos
   * @param {THREE.Vector3} endPos
   * @param {number} distanceKm - real-world distance represented, for telemetry.
   * @param {() => void} [onArrive]
   */
  beginJump(startPos, endPos, distanceKm, onArrive, targetSafeRadius = 1.0) {
    this._startPos.copy(startPos);

    // Standoff at a comfortable, scenic orbital distance so we arrive safely outside the object
    const toTarget = endPos.clone().sub(startPos);
    const dist = toTarget.length();
    const dir = dist > 1e-5 ? toTarget.clone().normalize() : new THREE.Vector3(0, 0, -1);
    const standoff = Math.max(targetSafeRadius + 1.2, 1.8);
    const actualEnd = dist > standoff ? endPos.clone().sub(dir.clone().multiplyScalar(standoff)) : endPos.clone();

    this._endPos.copy(actualEnd);
    this._distanceKm = Number.isFinite(distanceKm) ? distanceKm : sceneUnitsToDistanceKm(startPos.distanceTo(endPos));
    this._duration = chooseJumpDuration(this._distanceKm);
    this._elapsed = 0;
    this._active = true;
    this._onArrive = onArrive ?? null;
    this._streaks.visible = true;

    // Orient the spaceship's nose directly forward toward the jump target
    this.ship.userData.forward = dir.clone();
    this.ship.lookAt(this.ship.position.clone().add(dir));

    this.store.dispatch(Actions.setFlightStatus(FlightStatus.SPOOLING));
  }

  cancel() {
    this._active = false;
    this._streaks.visible = false;
  }

  get isActive() {
    return this._active;
  }

  /** @param {number} dt seconds @param {number} elapsedTotal seconds (for streak animation) */
  update(dt, elapsedTotal) {
    const material = this._streaks.material;
    if (material?.uniforms?.uSpeedFraction) {
      // Idle drift shimmer even when not warping, for ambience.
      material.uniforms.uSpeedFraction.value = this._active
        ? material.uniforms.uSpeedFraction.value
        : 0.05 + Math.sin(elapsedTotal * 0.5) * 0.02;
    }

    if (!this._active) return;

    this._elapsed += dt;
    const progress = computeWarpProgress(this._elapsed, this._duration);

    const nextPos = this._startPos.clone().lerp(this._endPos, progress.pathT);
    this.ship.position.copy(nextPos);

    // Keep the ship pointed strictly forward along its flight trajectory
    const jumpDir = this._endPos.clone().sub(this._startPos);
    if (jumpDir.lengthSq() > 1e-6) {
      jumpDir.normalize();
      this.ship.userData.forward = jumpDir.clone();
      this.ship.lookAt(this.ship.position.clone().add(jumpDir));
    }

    if (material?.uniforms?.uSpeedFraction) {
      material.uniforms.uSpeedFraction.value = progress.speedFraction;
    }
    this._streaks.position.copy(this.ship.position);

    this._reportTelemetry(progress);

    const status =
      progress.phase === WarpPhase.SPOOLING
        ? FlightStatus.SPOOLING
        : progress.phase === WarpPhase.DECELERATING
          ? FlightStatus.DECELERATING
          : FlightStatus.WARP;
    if (this.store.getState().flightStatus !== status) {
      this.store.dispatch(Actions.setFlightStatus(status));
    }

    if (progress.phase === WarpPhase.ARRIVED) {
      this._active = false;
      this._streaks.visible = false;
      this.ship.userData.velocity = { x: 0, y: 0, z: 0 };
      this.ship.userData.bankAngle = 0;
      this.store.dispatch(Actions.setFlightStatus(FlightStatus.ARRIVED));
      this.store.dispatch(Actions.updateTelemetry({ currentSpeedC: 0, etaSeconds: 0, distanceRemainingKm: 0 }));
      this._onArrive?.();
    }
  }

  /** @private */
  _reportTelemetry(progress) {
    const speedC = progress.speedFraction * 0.999;
    const gamma = lorentzFactor(speedC);
    const remainingKm = this._distanceKm * (1 - progress.pathT);
    const remainingDurationSeconds = Math.max(this._duration - this._elapsed, 0);

    this.store.dispatch(
      Actions.updateTelemetry({
        currentSpeedC: speedC,
        lorentzFactor: gamma,
        distanceRemainingKm: remainingKm,
        totalDistanceKm: this._distanceKm,
        timeDilationEarthSec: this._elapsed,
        timeDilationShipSec: properTime(this._elapsed, speedC),
        etaSeconds: remainingDurationSeconds,
      })
    );
  }
}

export { SPEED_OF_LIGHT_KM_S };

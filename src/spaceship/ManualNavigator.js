/**
 * @file ManualNavigator.js
 * Drives "manual mode": the pilot hand-flies the ship (keyboard input) while
 * a guidance arrow shows the bearing to the searched target. Wraps the pure
 * math in FlightPhysics.js with keyboard bookkeeping and arrival detection,
 * kept separate from Three.js so the flight logic is unit-testable.
 */

import { integrateManualFlight, computeBearing } from "./FlightPhysics.js";

const DEFAULT_KEY_MAP = {
  thrustForward: ["KeyS", "ArrowDown", "s", "S", "arrowdown"],
  thrustBackward: ["KeyW", "ArrowUp", "w", "W", "arrowup"],
  yawLeft: ["KeyA", "ArrowLeft", "a", "A", "arrowleft"],
  yawRight: ["KeyD", "ArrowRight", "d", "D", "arrowright"],
  strafeLeft: ["KeyQ", "q", "Q"],
  strafeRight: ["KeyE", "e", "E"],
  pitchUp: ["KeyR", "r", "R"],
  pitchDown: ["KeyF", "f", "F"],
  boost: ["ShiftLeft", "ShiftRight", "KeyB", "b", "B", "shift"],
};

export class ManualNavigator {
  /**
   * @param {object} [options]
   * @param {Record<string, string[]>} [options.keyMap]
   * @param {number} [options.arrivalRadius] - scene units within which the ship "arrives".
   */
  constructor({ keyMap = DEFAULT_KEY_MAP, arrivalRadius = 2 } = {}) {
    /** @private */
    this._keyMap = keyMap;
    /** @private */
    this._arrivalRadius = arrivalRadius;
    /** @private @type {Set<string>} */
    this._pressedKeys = new Set();
    /** @private */
    this._targetPosition = null;
    /** @private */
    this._hyperdriveLocked = false;
  }

  /** @param {KeyboardEvent} event */
  handleKeyDown(event) {
    if (event?.code) this._pressedKeys.add(event.code);
    if (event?.key) this._pressedKeys.add(event.key.toLowerCase());
  }

  /** @param {KeyboardEvent} event */
  handleKeyUp(event) {
    if (event?.code) this._pressedKeys.delete(event.code);
    if (event?.key) this._pressedKeys.delete(event.key.toLowerCase());
  }

  /** Clears all held keys, e.g. when the window loses focus. */
  resetInput() {
    this._pressedKeys.clear();
  }

  /** Toggle hyperdrive lock from UI or shortcut */
  toggleHyperdriveLock(force) {
    this._hyperdriveLocked = typeof force === "boolean" ? force : !this._hyperdriveLocked;
    return this._hyperdriveLocked;
  }

  get isHyperdriveLocked() {
    return this._hyperdriveLocked;
  }

  /** @param {{x:number,y:number,z:number}|null} position */
  setTarget(position) {
    this._targetPosition = position;
  }

  /** @returns {{thrust: number, yaw: number, pitch: number, strafe: number, boost: boolean}} */
  readInput() {
    const pressed = (codes) => codes?.some((c) => this._pressedKeys.has(c)) ?? false;
    let thrust = 0;
    if (pressed(this._keyMap.thrustForward)) thrust += 1;
    if (pressed(this._keyMap.thrustBackward)) thrust -= 1;
    let yaw = 0;
    if (pressed(this._keyMap.yawRight)) yaw += 1;
    if (pressed(this._keyMap.yawLeft)) yaw -= 1;
    let strafe = 0;
    if (pressed(this._keyMap.strafeRight)) strafe += 1;
    if (pressed(this._keyMap.strafeLeft)) strafe -= 1;
    let pitch = 0;
    if (pressed(this._keyMap.pitchUp)) pitch += 1;
    if (pressed(this._keyMap.pitchDown)) pitch -= 1;
    const boost = this._hyperdriveLocked || pressed(this._keyMap.boost);
    return { thrust, yaw, pitch, strafe, boost };
  }

  /**
   * Advances the manual flight simulation by one tick.
   * @param {import('./FlightPhysics.js').ManualFlightState} state
   * @param {number} dt
   * @returns {{
   *   state: import('./FlightPhysics.js').ManualFlightState,
   *   bearing: ?ReturnType<typeof computeBearing>,
   *   input: ReturnType<ManualNavigator['readInput']>
   * }}
   */
  step(state, dt) {
    const input = this.readInput();
    const nextState = integrateManualFlight(state, input, dt);
    const bearing = this._targetPosition
      ? computeBearing(nextState.position, nextState.forward, this._targetPosition, this._arrivalRadius)
      : null;
    return { state: nextState, bearing, input };
  }
}

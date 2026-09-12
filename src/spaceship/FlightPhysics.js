/**
 * @file FlightPhysics.js
 * Framework-independent vector math and manual-flight integration for the
 * spaceship. Deliberately avoids importing Three.js so the flight model can
 * be unit tested in plain Node/jsdom and reused if the renderer ever changes.
 */

/** @typedef {{x: number, y: number, z: number}} Vec3 */

/** @returns {Vec3} */
export function vAdd(a, b) {
  return { x: a.x + b.x, y: a.y + b.y, z: a.z + b.z };
}

/** @returns {Vec3} */
export function vSub(a, b) {
  return { x: a.x - b.x, y: a.y - b.y, z: a.z - b.z };
}

/** @returns {Vec3} */
export function vScale(a, s) {
  return { x: a.x * s, y: a.y * s, z: a.z * s };
}

/** @returns {number} */
export function vLength(a) {
  return Math.sqrt(a.x * a.x + a.y * a.y + a.z * a.z);
}

/** @returns {Vec3} a unit vector, or {0,0,1} if `a` is (near) zero-length. */
export function vNormalize(a) {
  const len = vLength(a);
  if (len < 1e-9) return { x: 0, y: 0, z: 1 };
  return { x: a.x / len, y: a.y / len, z: a.z / len };
}

/** @returns {number} */
export function vDot(a, b) {
  return a.x * b.x + a.y * b.y + a.z * b.z;
}

/** @returns {Vec3} linear interpolation between a and b, t clamped to [0,1]. */
export function vLerp(a, b, t) {
  const ct = Math.min(Math.max(t, 0), 1);
  return { x: a.x + (b.x - a.x) * ct, y: a.y + (b.y - a.y) * ct, z: a.z + (b.z - a.z) * ct };
}

/**
 * @typedef {object} ManualFlightState
 * @property {Vec3} position
 * @property {Vec3} velocity
 * @property {Vec3} forward - unit heading vector.
 * @property {number} [bankAngle] - roll/bank angle in radians for turning animation.
 */

/**
 * @typedef {object} ManualFlightInput
 * @property {number} thrust - -1 (reverse) to 1 (full forward).
 * @property {number} yaw - -1 (left) to 1 (right), turn rate scalar.
 * @property {number} pitch - -1 (down) to 1 (up), turn rate scalar.
 * @property {number} [strafe] - -1 (left) to 1 (right) lateral thrust.
 * @property {boolean|number} [boost] - whether hyper-speed / boost is active.
 */

export const MAX_MANUAL_SPEED = 24; // scene units / second (standard cruise)
export const BOOST_MANUAL_SPEED = 180; // scene units / second (hyperdrive fast travel)
export const ACCELERATION = 28; // scene units / second^2
export const BOOST_ACCELERATION = 140; // scene units / second^2
export const LINEAR_DAMPING = 0.94; // fraction of velocity retained per second
export const TURN_RATE_RAD_S = 2.2;

/**
 * Integrates one physics step of hand-flown (manual mode) movement. Pure
 * function: returns a new state object, never mutates the input.
 * @param {ManualFlightState} state
 * @param {ManualFlightInput} input
 * @param {number} dt - seconds, expected small (e.g. 1/60).
 * @returns {ManualFlightState}
 */
export function integrateManualFlight(state, input, dt) {
  const safeDt = clampDt(dt);
  const thrust = clamp(safe(input?.thrust), -1, 1);
  const yaw = clamp(safe(input?.yaw), -1, 1);
  const pitch = clamp(safe(input?.pitch), -1, 1);
  const strafe = clamp(safe(input?.strafe), -1, 1);
  const isBoost = Boolean(input?.boost);

  const currentMaxSpeed = isBoost ? BOOST_MANUAL_SPEED : MAX_MANUAL_SPEED;
  const currentAccel = isBoost ? BOOST_ACCELERATION : ACCELERATION;

  // Rotate `forward` around yaw and pitch
  const forward = rotateForward(state.forward, yaw * TURN_RATE_RAD_S * safeDt, pitch * TURN_RATE_RAD_S * safeDt);

  // Compute local right vector for strafing
  const right = vNormalize({ x: -forward.z, y: 0, z: forward.x });

  // Desired thrust vector: W (+thrust) moves forward along nose heading, S (-thrust) moves backward
  const forwardAccel = vScale(forward, thrust * currentAccel);
  const strafeAccel = vScale(right, strafe * currentAccel * 0.7);
  const totalAccel = vAdd(forwardAccel, strafeAccel);

  let velocity = vAdd(state.velocity, vScale(totalAccel, safeDt));

  // Align velocity direction with forward heading when actively thrusting for snappy, responsive steering
  const speed = vLength(velocity);
  if (speed > 0.05 && thrust !== 0) {
    const targetVelDir = thrust >= 0 ? forward : vScale(forward, -1);
    const steerT = Math.min(safeDt * 8.0, 1.0);
    const blendedDir = vNormalize(vLerp(vNormalize(velocity), targetVelDir, steerT));
    velocity = vScale(blendedDir, speed);
  }

  // Exponential damping so releasing input coasts to a gentle stop
  const dampingFactor = Math.pow(LINEAR_DAMPING, safeDt * 60);
  velocity = vScale(velocity, dampingFactor);

  const clampedSpeed = vLength(velocity);
  if (clampedSpeed > currentMaxSpeed) {
    velocity = vScale(vNormalize(velocity), currentMaxSpeed);
  }

  const position = vAdd(state.position, vScale(velocity, safeDt));

  // Smooth bank/roll angle in radians: negative for left turn, positive for right turn
  const targetBank = -yaw * 0.45;
  const currentBank = state.bankAngle ?? 0;
  const bankAngle = currentBank + (targetBank - currentBank) * Math.min(safeDt * 8, 1);

  return { position, velocity, forward, bankAngle };
}

/**
 * Resolves proximity collisions against celestial bodies so the ship cannot
 * penetrate or clip through planetary surfaces.
 * @param {Vec3} position
 * @param {Vec3} velocity
 * @param {Array<{ position: Vec3, safeRadius: number }>} obstacles
 * @returns {{ position: Vec3, velocity: Vec3, collided: boolean }}
 */
export function resolveCelestialCollisions(position, velocity, obstacles = []) {
  let pos = { ...position };
  let vel = { ...velocity };
  let collided = false;

  for (const obs of obstacles) {
    if (!obs || !obs.position || !obs.safeRadius || obs.safeRadius <= 0) continue;
    const toShip = vSub(pos, obs.position);
    const dist = vLength(toShip);
    if (dist < obs.safeRadius) {
      collided = true;
      const normal = vNormalize(toShip);
      // Softly clamp to boundary without pushing inward
      pos = vAdd(obs.position, vScale(normal, obs.safeRadius));
      // Zero out only the inward velocity component so it doesn't penetrate or bounce backward
      const normalVel = vDot(vel, normal);
      if (normalVel < 0) {
        vel = vSub(vel, vScale(normal, normalVel));
      }
    }
  }

  return { position: pos, velocity: vel, collided };
}

/**
 * Computes the heading the pilot needs (bearing) to point directly at a
 * target, for driving the manual-mode guidance arrow.
 * @param {Vec3} shipPosition
 * @param {Vec3} shipForward - unit vector.
 * @param {Vec3} targetPosition
 * @param {number} [arrivalRadius]
 * @returns {{
 *   distance: number,
 *   directionToTarget: Vec3,
 *   angleOffsetDeg: number,
 *   aligned: boolean,
 *   arrived: boolean
 * }}
 */
export function computeBearing(shipPosition, shipForward, targetPosition, arrivalRadius = 2) {
  const toTarget = vSub(targetPosition, shipPosition);
  const distance = vLength(toTarget);
  const direction = vNormalize(toTarget);
  const forward = vNormalize(shipForward);
  const cosAngle = clamp(vDot(forward, direction), -1, 1);
  const angleOffsetDeg = (Math.acos(cosAngle) * 180) / Math.PI;

  return {
    distance,
    directionToTarget: direction,
    angleOffsetDeg,
    aligned: angleOffsetDeg < 5,
    arrived: distance <= arrivalRadius
  };
}

/** @private 3D rotation of forward heading around local up (yaw) and local right (pitch). */
function rotateForward(forward, yawRad, pitchRad) {
  let f = vNormalize(forward);

  // 1. Compute local right axis
  let right = vNormalize({ x: -f.z, y: 0, z: f.x });
  if (Math.abs(f.x) < 1e-5 && Math.abs(f.z) < 1e-5) {
    right = { x: 1, y: 0, z: 0 };
  }

  // 2. Compute local up axis (right x f)
  const up = vNormalize({
    x: right.y * f.z - right.z * f.y,
    y: right.z * f.x - right.x * f.z,
    z: right.x * f.y - right.y * f.x
  });

  // 3. Yaw rotation around local up axis (positive yaw turns right toward +right)
  if (Math.abs(yawRad) > 1e-7) {
    const cosY = Math.cos(yawRad);
    const sinY = Math.sin(yawRad);
    f = vNormalize(vAdd(vScale(f, cosY), vScale(right, sinY)));
  }

  // 4. Pitch rotation around local right axis (positive pitch pitches up toward +up)
  if (Math.abs(pitchRad) > 1e-7) {
    const cosP = Math.cos(pitchRad);
    const sinP = Math.sin(pitchRad);
    f = vNormalize(vAdd(vScale(f, cosP), vScale(up, sinP)));
  }

  // Guard against vertical gimbal lock
  if (f.y > 0.88 || f.y < -0.88) {
    const clampedY = Math.sign(f.y) * 0.88;
    const xzScale = Math.sqrt(Math.max(1 - clampedY * clampedY, 0));
    const h = vNormalize({ x: f.x, y: 0, z: f.z });
    f = { x: h.x * xzScale, y: clampedY, z: h.z * xzScale };
  }

  return f;
}

function clamp(v, min, max) {
  return Math.min(Math.max(v, min), max);
}

function safe(v) {
  return Number.isFinite(v) ? v : 0;
}

function clampDt(dt) {
  if (!Number.isFinite(dt) || dt < 0) return 0;
  return Math.min(dt, 0.1); // guard against huge dt after tab-switch/hitch
}

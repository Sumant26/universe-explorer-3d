/**
 * @file OrbitalMechanics.js
 * Lightweight circular/elliptical orbit math used to gently animate moons,
 * planets, and asteroid-belt instances. This intentionally is NOT a full
 * n-body simulator — it's a believable, cheap, deterministic approximation
 * that keeps the "cozy drifting universe" feeling smooth at 60fps.
 */

/**
 * Computes a position on an (optionally elliptical) orbit at a given time.
 * @param {object} params
 * @param {number} params.semiMajorAxis - orbit radius (scene units) along x.
 * @param {number} [params.eccentricity=0] - 0 = circle, (0,1) = ellipse.
 * @param {number} params.periodSeconds - real/simulated orbital period, > 0.
 * @param {number} params.timeSeconds - current simulation time.
 * @param {number} [params.phaseOffset=0] - radians, initial angular offset.
 * @param {number} [params.inclinationDeg=0] - tilt of the orbital plane.
 * @returns {{x: number, y: number, z: number, angle: number}}
 */
export function computeOrbitPosition({
  semiMajorAxis,
  eccentricity = 0,
  periodSeconds,
  timeSeconds,
  phaseOffset = 0,
  inclinationDeg = 0,
}) {
  const a = safe(semiMajorAxis, 0);
  const e = clamp(safe(eccentricity, 0), 0, 0.95);
  const period = safe(periodSeconds, 1) || 1;
  const t = safe(timeSeconds, 0);

  const meanAnomaly = ((t / period) * 2 * Math.PI + safe(phaseOffset, 0)) % (2 * Math.PI);
  const b = a * Math.sqrt(1 - e * e); // semi-minor axis
  const angle = meanAnomaly;

  const xFlat = a * Math.cos(angle) - a * e; // focus at origin
  const zFlat = b * Math.sin(angle);

  const incl = (safe(inclinationDeg, 0) * Math.PI) / 180;
  const y = zFlat * Math.sin(incl);
  const z = zFlat * Math.cos(incl);

  return { x: xFlat, y, z, angle };
}

/**
 * Simple axial rotation angle for planet self-spin, in radians.
 * @param {number} timeSeconds
 * @param {number} rotationPeriodSeconds - seconds per full rotation; sign flips direction.
 * @returns {number} radians, wrapped to [0, 2*PI)
 */
export function computeRotationAngle(timeSeconds, rotationPeriodSeconds) {
  const period = safe(rotationPeriodSeconds, 0);
  if (period === 0) return 0;
  const t = safe(timeSeconds, 0);
  const angle = ((t / period) * 2 * Math.PI) % (2 * Math.PI);
  return angle < 0 ? angle + 2 * Math.PI : angle;
}

function clamp(v, min, max) {
  return Math.min(Math.max(v, min), max);
}

function safe(v, fallback) {
  return Number.isFinite(v) ? v : fallback;
}

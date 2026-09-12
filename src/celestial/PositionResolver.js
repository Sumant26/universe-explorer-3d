/**
 * @file PositionResolver.js
 * Turns the curated celestial/satellite data into concrete, navigable 3D
 * scene positions. Bodies gravitationally bound to a parent (moons around
 * planets, planets around the Sun) are placed on their real orbit, scaled
 * to a comfortable size; everything else (distant stars, galaxies, cosmic
 * structures) gets a deterministic "shell" position per scale tier so the
 * whole universe stays within a navigable, non-exploding coordinate range.
 *
 * This deliberately trades strict astrometric accuracy in *position* for a
 * cozy, flyable scene — all *displayed* numbers (distance, travel time,
 * habitability) still come from the real physical data in CelestialData.js.
 */

import { computeOrbitPosition } from '../physics/OrbitalMechanics.js';

const AU_SCENE_SCALE = 6; // scene units per AU^(1/3), keeps the solar system compact but readable
const TIER_SHELL_RADIUS = { 0: 0, 1: 0, 2: 55, 3: 170, 4: 340 };
const DAY_SECONDS = 86400;

/**
 * @param {import('./CelestialData.js').CelestialBody[]} bodies
 * @param {number} timeSeconds - simulation time, for orbital motion.
 * @returns {Map<string, {x:number, y:number, z:number}>}
 */
export function resolveScenePositions(bodies, timeSeconds = 0) {
  const byId = new Map(bodies.map((b) => [b.id, b]));
  const resolved = new Map();
  const resolving = new Set();

  function resolve(id) {
    if (resolved.has(id)) return resolved.get(id);
    const body = byId.get(id);
    if (!body) {
      const fallback = { x: 0, y: 0, z: 0 };
      resolved.set(id, fallback);
      return fallback;
    }
    if (resolving.has(id)) {
      // Defensive cycle guard: a malformed data set shouldn't infinite-loop.
      const fallback = { x: 0, y: 0, z: 0 };
      resolved.set(id, fallback);
      return fallback;
    }
    resolving.add(id);

    let position;
    if (body.orbit && body.orbit.parentId) {
      const parentPos = resolve(body.orbit.parentId);
      const orbit = computeOrbitPosition({
        semiMajorAxis: Math.cbrt(Math.max(body.orbit.semiMajorAxisAu, 1e-6)) * AU_SCENE_SCALE,
        eccentricity: body.orbit.eccentricity ?? 0,
        periodSeconds: Math.max(body.orbit.periodDays, 0.01) * DAY_SECONDS,
        timeSeconds,
        phaseOffset: hashToUnit(body.id) * Math.PI * 2,
        inclinationDeg: body.orbit.inclinationDeg ?? 0
      });
      position = { x: parentPos.x + orbit.x, y: parentPos.y + orbit.y, z: parentPos.z + orbit.z };
    } else if (body.id === 'sun') {
      position = { x: 0, y: 0, z: 0 };
    } else {
      position = shellPosition(body.id, TIER_SHELL_RADIUS[body.scaleTier] ?? 200);
    }

    resolving.delete(id);
    resolved.set(id, position);
    return position;
  }

  for (const body of bodies) resolve(body.id);
  return resolved;
}

/**
 * Positions satellites relative to the body they orbit (or, if none, a
 * bounded position derived from their real distance from Earth).
 * @param {import('./SatelliteData.js').SatelliteRecord[]} satellites
 * @param {Map<string, {x:number,y:number,z:number}>} celestialPositions
 * @returns {Map<string, {x:number,y:number,z:number}>}
 */
export function resolveSatellitePositions(satellites, celestialPositions) {
  const result = new Map();
  const earthPos = celestialPositions.get('earth') ?? { x: 0, y: 0, z: 0 };

  for (const sat of satellites) {
    if (sat.orbitsBodyId && celestialPositions.has(sat.orbitsBodyId)) {
      const base = celestialPositions.get(sat.orbitsBodyId);
      const offset = shellPosition(sat.id, 0.5);
      result.set(sat.id, { x: base.x + offset.x, y: base.y + offset.y, z: base.z + offset.z });
    } else {
      const au = sat.distanceFromEarthKm / 149_597_870.7;
      const radius = clamp(6 + Math.log10(1 + au) * 6, 6, 60);
      const dir = shellPosition(sat.id, 1);
      const len = Math.hypot(dir.x, dir.y, dir.z) || 1;
      result.set(sat.id, {
        x: earthPos.x + (dir.x / len) * radius,
        y: earthPos.y + (dir.y / len) * radius,
        z: earthPos.z + (dir.z / len) * radius
      });
    }
  }
  return result;
}

/** @private deterministic pseudo-random point on a sphere of the given radius. */
function shellPosition(id, radius) {
  const h1 = hashToUnit(id + 'θ');
  const h2 = hashToUnit(id + 'φ');
  const theta = h1 * Math.PI * 2;
  const phi = Math.acos(2 * h2 - 1);
  return {
    x: radius * Math.sin(phi) * Math.cos(theta),
    y: radius * Math.cos(phi) * 0.4, // flatten slightly toward a galactic-plane feel
    z: radius * Math.sin(phi) * Math.sin(theta)
  };
}

/** @private deterministic string hash mapped to [0, 1). */
function hashToUnit(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) >>> 0;
  }
  return (hash % 100000) / 100000;
}

function clamp(v, min, max) {
  return Math.min(Math.max(v, min), max);
}

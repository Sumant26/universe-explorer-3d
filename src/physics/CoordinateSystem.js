/**
 * @file CoordinateSystem.js
 * Converts real astronomical distances (km / AU / ly) into a bounded,
 * logarithmically-scaled 3D scene-unit space so that a moon, a planet,
 * a star 4 light-years away, and a galaxy 2.5 million light-years away
 * can all coexist in one Three.js scene without float-precision blowups.
 */

export const KM_PER_AU = 149_597_870.7;
export const KM_PER_LY = 9_460_730_472_580.8;
export const AU_PER_LY = KM_PER_LY / KM_PER_AU;

/** @param {number} km @returns {number} astronomical units */
export function kmToAu(km) {
  return safeNumber(km) / KM_PER_AU;
}

/** @param {number} km @returns {number} light-years */
export function kmToLy(km) {
  return safeNumber(km) / KM_PER_LY;
}

/** @param {number} au @returns {number} km */
export function auToKm(au) {
  return safeNumber(au) * KM_PER_AU;
}

/** @param {number} ly @returns {number} km */
export function lyToKm(ly) {
  return safeNumber(ly) * KM_PER_LY;
}

/**
 * Maps a real distance in kilometers to a scene-space distance in units,
 * using a signed-log curve: `sign(km) * log10(1 + |km| / kmPerUnit)`.
 * This keeps nearby objects (moons, planets) comfortably spread out while
 * compressing extreme distances (other galaxies) into a navigable range.
 * @param {number} distanceKm
 * @param {number} [kmPerUnit=1_000_000] - km represented by one "unit" of log curvature.
 * @param {number} [sceneScale=40] - multiplier applied to the log result.
 * @returns {number} scene units, always finite.
 */
export function distanceKmToSceneUnits(distanceKm, kmPerUnit = 1_000_000, sceneScale = 40) {
  const km = safeNumber(distanceKm);
  if (km <= 0) return 0;
  return sceneScale * Math.log10(1 + km / kmPerUnit);
}

/**
 * Inverse of {@link distanceKmToSceneUnits}, recovering an approximate km
 * distance from a scene-unit distance. Used for HUD sanity displays / tests.
 * @param {number} sceneUnits
 * @param {number} [kmPerUnit=1_000_000]
 * @param {number} [sceneScale=40]
 * @returns {number} km
 */
export function sceneUnitsToDistanceKm(sceneUnits, kmPerUnit = 1_000_000, sceneScale = 40) {
  const units = safeNumber(sceneUnits);
  if (units <= 0) return 0;
  return kmPerUnit * (10 ** (units / sceneScale) - 1);
}

/**
 * Converts spherical astronomical coordinates (right ascension / declination
 * in degrees, plus a real distance) into a Cartesian `{x, y, z}` position in
 * scene units, using {@link distanceKmToSceneUnits} for the radius.
 * @param {number} raDeg - right ascension, degrees [0, 360)
 * @param {number} decDeg - declination, degrees [-90, 90]
 * @param {number} distanceKm - real distance from the coordinate system's origin
 * @param {number} [kmPerUnit]
 * @param {number} [sceneScale]
 * @returns {{x: number, y: number, z: number}}
 */
export function sphericalToCartesian(raDeg, decDeg, distanceKm, kmPerUnit, sceneScale) {
  const ra = degToRad(safeNumber(raDeg));
  const dec = degToRad(clamp(safeNumber(decDeg), -90, 90));
  const r = distanceKmToSceneUnits(distanceKm, kmPerUnit, sceneScale);
  return {
    x: r * Math.cos(dec) * Math.cos(ra),
    y: r * Math.sin(dec),
    z: r * Math.cos(dec) * Math.sin(ra)
  };
}

/** @param {number} deg @returns {number} radians */
export function degToRad(deg) {
  return (safeNumber(deg) * Math.PI) / 180;
}

/** @param {number} rad @returns {number} degrees */
export function radToDeg(rad) {
  return (safeNumber(rad) * 180) / Math.PI;
}

/**
 * Formats a raw km distance as the friendliest human-readable unit
 * (km for near objects, AU for solar-system scale, ly beyond that).
 * @param {number} distanceKm
 * @returns {string}
 */
export function formatDistance(distanceKm) {
  const km = safeNumber(distanceKm);
  if (km < 0) return 'unknown';
  if (km < 5_000_000) return `${formatNumber(km)} km`;
  const au = kmToAu(km);
  if (au < 2000) return `${formatNumber(au)} AU`;
  return `${formatNumber(kmToLy(km))} ly`;
}

function formatNumber(n) {
  if (!Number.isFinite(n)) return '—';
  if (n >= 1000) return n.toLocaleString('en-US', { maximumFractionDigits: 0 });
  if (n >= 1) return n.toFixed(2);
  return n.toPrecision(2);
}

function clamp(v, min, max) {
  return Math.min(Math.max(v, min), max);
}

function safeNumber(n) {
  return Number.isFinite(n) ? n : 0;
}

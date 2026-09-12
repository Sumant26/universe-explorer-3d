/**
 * @file RelativityEngine.js
 * Special-relativity helpers used by the warp travel HUD: Lorentz factor,
 * time dilation, and multi-propulsion travel-time estimates.
 *
 * All functions are pure and guard against the v -> c singularity so the
 * UI never receives NaN/Infinity.
 */

/** Speed of light, km/s. */
export const SPEED_OF_LIGHT_KM_S = 299792.458;

/** Fraction of c we treat as the practical ceiling to avoid a literal singularity. */
const MAX_BETA = 0.999999;

/**
 * Lorentz factor gamma = 1 / sqrt(1 - v^2/c^2).
 * @param {number} velocityFractionOfC - v/c, expected in [0, 1).
 * @returns {number} gamma, always finite and >= 1.
 */
export function lorentzFactor(velocityFractionOfC) {
  const beta = clampBeta(velocityFractionOfC);
  const denom = Math.sqrt(1 - beta * beta);
  if (denom <= 0) return Number.POSITIVE_INFINITY > 0 ? 1 / Math.sqrt(1 - MAX_BETA * MAX_BETA) : 1;
  return 1 / denom;
}

/**
 * Proper (traveler) time elapsed for a given Earth-frame duration.
 * @param {number} earthSeconds - elapsed seconds in the Earth/observer frame.
 * @param {number} velocityFractionOfC - v/c.
 * @returns {number} elapsed seconds experienced by the traveler.
 */
export function properTime(earthSeconds, velocityFractionOfC) {
  if (!Number.isFinite(earthSeconds) || earthSeconds < 0) return 0;
  const gamma = lorentzFactor(velocityFractionOfC);
  return earthSeconds / gamma;
}

/**
 * Travel time (Earth frame) to cover a distance at a given speed.
 * @param {number} distanceKm
 * @param {number} speedKmS
 * @returns {number} seconds, 0 if distance is 0, Infinity guarded to a large finite number if speed is 0.
 */
export function travelTimeSeconds(distanceKm, speedKmS) {
  if (!Number.isFinite(distanceKm) || distanceKm <= 0) return 0;
  if (!Number.isFinite(speedKmS) || speedKmS <= 0) return Number.POSITIVE_INFINITY;
  return distanceKm / speedKmS;
}

/**
 * Builds the full multi-propulsion travel breakdown shown in the Detail Panel.
 * @param {number} distanceKm - straight-line distance to the object.
 * @returns {{
 *   lightSpeed: {seconds: number, label: string},
 *   relativistic999c: {seconds: number, shipSeconds: number, label: string},
 *   fusionDrive01c: {seconds: number, label: string},
 *   chemicalRocket: {seconds: number, label: string}
 * }}
 */
export function computeTravelBreakdown(distanceKm) {
  const safeDistance = Number.isFinite(distanceKm) && distanceKm > 0 ? distanceKm : 0;

  const lightSeconds = travelTimeSeconds(safeDistance, SPEED_OF_LIGHT_KM_S);
  const relSpeed = 0.999 * SPEED_OF_LIGHT_KM_S;
  const relSeconds = travelTimeSeconds(safeDistance, relSpeed);
  const relShipSeconds = properTime(relSeconds, 0.999);
  const fusionSeconds = travelTimeSeconds(safeDistance, 0.1 * SPEED_OF_LIGHT_KM_S);
  const chemicalSeconds = travelTimeSeconds(safeDistance, 40000 / 3600); // 40,000 km/h -> km/s

  return {
    lightSpeed: { seconds: lightSeconds, label: 'At light speed (c)' },
    relativistic999c: {
      seconds: relSeconds,
      shipSeconds: relShipSeconds,
      label: 'Relativistic cruiser (0.999c)'
    },
    fusionDrive01c: { seconds: fusionSeconds, label: 'Fusion drive (0.1c)' },
    chemicalRocket: { seconds: chemicalSeconds, label: 'Chemical rocket (~40,000 km/h)' }
  };
}

/**
 * Formats a duration in seconds into a friendly, human-readable string,
 * choosing the coarsest sensible unit (seconds up to millennia).
 * @param {number} seconds
 * @returns {string}
 */
export function formatDuration(seconds) {
  if (!Number.isFinite(seconds)) return 'effectively forever';
  if (seconds < 0) return '0 seconds';

  const YEAR = 365.25 * 24 * 3600;
  if (seconds < 60) return `${seconds.toFixed(1)} sec`;
  if (seconds < 3600) return `${(seconds / 60).toFixed(1)} min`;
  if (seconds < 86400) return `${(seconds / 3600).toFixed(1)} hr`;
  if (seconds < YEAR) return `${(seconds / 86400).toFixed(1)} days`;
  const years = seconds / YEAR;
  if (years < 1000) return `${years.toFixed(2)} yr`;
  if (years < 1e6) return `${(years / 1000).toFixed(2)}k yr`;
  return `${(years / 1e6).toFixed(2)}M yr`;
}

/** @private clamp v/c into a safe, sub-luminal range. */
function clampBeta(beta) {
  if (!Number.isFinite(beta)) return 0;
  return Math.min(Math.max(beta, 0), MAX_BETA);
}

/**
 * @file HabitabilityEngine.js
 * Scores how livable a celestial body is from its physical parameters, and
 * classifies what kind of human presence (if any) would be feasible.
 * All scoring is a simplified, transparent heuristic — not a peer-reviewed
 * astrobiology model — designed to be explainable in the UI.
 */

/** @enum {string} */
export const OccupationClass = Object.freeze({
  EARTH_LIKE: "Directly Habitable",
  DOME_REQUIRED: "Dome Settlement Required",
  SUBTERRANEAN: "Subterranean / Radiation-Shielded Base",
  EXTREME_TERRAFORMING: "Extreme Terraforming Required",
  GAS_OUTPOST: "Gas Giant Cloud Outpost Only",
  UNINHABITABLE: "Uninhabitable",
});

/**
 * @typedef {object} HabitabilityInput
 * @property {number} surfaceTempC - average surface temperature, Celsius.
 * @property {number} atmosphericPressureAtm - surface pressure in Earth atmospheres.
 * @property {number} surfaceGravityG - surface gravity in units of g (Earth = 1).
 * @property {number} radiationIndex - 0 (safe) to 10 (lethal), relative scale.
 * @property {boolean} hasLiquidWater
 * @property {boolean} isGasGiant
 */

/**
 * @param {HabitabilityInput} input
 * @returns {{score: number, classification: string, factors: Record<string, number>}}
 *   score is 0-100. factors are each sub-score (0-1) for the UI breakdown.
 */
export function computeHabitability(input) {
  const {
    surfaceTempC = -273,
    atmosphericPressureAtm = 0,
    surfaceGravityG = 0,
    radiationIndex = 10,
    hasLiquidWater = false,
    isGasGiant = false,
  } = input ?? {};

  if (isGasGiant) {
    return {
      score: 2,
      classification: OccupationClass.GAS_OUTPOST,
      factors: { temperature: 0, pressure: 0, gravity: 0, radiation: 0, water: 0 },
    };
  }

  const temperatureFactor = gaussianScore(surfaceTempC, -10, 35, 60); // ideal band ~[-10, 35]C
  const pressureFactor = gaussianScore(atmosphericPressureAtm, 0.5, 1.5, 0.6);
  const gravityFactor = gaussianScore(surfaceGravityG, 0.6, 1.4, 0.5);
  const radiationFactor = clamp01(1 - safe(radiationIndex, 10) / 10);
  const waterFactor = hasLiquidWater ? 1 : 0;

  const weighted =
    temperatureFactor * 0.3 + pressureFactor * 0.2 + gravityFactor * 0.15 + radiationFactor * 0.2 + waterFactor * 0.15;

  const score = Math.round(clamp01(weighted) * 100);

  return {
    score,
    classification: classify(score, { atmosphericPressureAtm, radiationIndex }),
    factors: {
      temperature: temperatureFactor,
      pressure: pressureFactor,
      gravity: gravityFactor,
      radiation: radiationFactor,
      water: waterFactor,
    },
  };
}

/**
 * @param {number} score - 0-100 from {@link computeHabitability}
 * @param {{atmosphericPressureAtm: number, radiationIndex: number}} context
 * @returns {string}
 */
function classify(score, { atmosphericPressureAtm, radiationIndex }) {
  if (score >= 75) return OccupationClass.EARTH_LIKE;
  if (score >= 45) return OccupationClass.DOME_REQUIRED;
  if (safe(radiationIndex, 10) >= 6 || safe(atmosphericPressureAtm, 0) < 0.01) {
    return score >= 15 ? OccupationClass.SUBTERRANEAN : OccupationClass.UNINHABITABLE;
  }
  if (score >= 15) return OccupationClass.EXTREME_TERRAFORMING;
  return OccupationClass.UNINHABITABLE;
}

/**
 * Bell-curve-ish score: 1.0 inside [idealLow, idealHigh], decaying smoothly
 * to 0 as the value moves `tolerance` units beyond the band edges.
 * @private
 */
function gaussianScore(value, idealLow, idealHigh, tolerance) {
  const v = safe(value, idealLow - tolerance);
  if (v >= idealLow && v <= idealHigh) return 1;
  const distance = v < idealLow ? idealLow - v : v - idealHigh;
  const t = Math.max(tolerance, 1e-6);
  return clamp01(Math.exp(-((distance / t) ** 2)));
}

function clamp01(v) {
  if (!Number.isFinite(v)) return 0;
  return Math.min(Math.max(v, 0), 1);
}

function safe(v, fallback) {
  return Number.isFinite(v) ? v : fallback;
}

/**
 * Builds a friendly atmosphere composition breakdown for display, filling
 * in "Trace" for anything not explicitly listed and normalizing to 100%.
 * @param {Record<string, number>} composition - gas name -> percentage.
 * @returns {Array<{gas: string, percent: number}>} sorted descending by percent.
 */
export function normalizeAtmosphere(composition) {
  const entries = Object.entries(composition ?? {}).filter(([, v]) => Number.isFinite(v) && v > 0);
  const total = entries.reduce((sum, [, v]) => sum + v, 0);
  if (total <= 0) return [];
  return entries
    .map(([gas, v]) => ({ gas, percent: Math.round((v / total) * 1000) / 10 }))
    .sort((a, b) => b.percent - a.percent);
}

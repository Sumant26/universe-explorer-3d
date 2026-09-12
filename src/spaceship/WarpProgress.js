/**
 * @file WarpProgress.js
 * Pure timing/easing math for the autopilot warp sequence: spool-up, warp
 * cruise, and deceleration. Kept free of Three.js so the flight timeline can
 * be unit tested precisely.
 */

/** @enum {string} */
export const WarpPhase = Object.freeze({
  SPOOLING: "SPOOLING",
  CRUISE: "CRUISE",
  DECELERATING: "DECELERATING",
  ARRIVED: "ARRIVED",
});

const SPOOL_SECONDS = 1.4;
const DECEL_SECONDS = 1.6;

/**
 * @param {number} elapsedSeconds - time since the warp jump was engaged.
 * @param {number} totalDurationSeconds - total planned duration of this jump (>= spool+decel).
 * @returns {{
 *   phase: string, phaseProgress: number, overallProgress: number,
 *   speedFraction: number, pathT: number
 * }}
 *   speedFraction: 0..1 fraction of max warp speed (for the speedometer/visuals).
 *   pathT: 0..1 fraction of the physical path covered (for positioning the ship).
 */
export function computeWarpProgress(elapsedSeconds, totalDurationSeconds) {
  const total = Math.max(safe(totalDurationSeconds), SPOOL_SECONDS + DECEL_SECONDS + 0.1);
  const t = clamp(safe(elapsedSeconds), 0, total);
  const cruiseSeconds = Math.max(total - SPOOL_SECONDS - DECEL_SECONDS, 0.1);

  if (t >= total) {
    return { phase: WarpPhase.ARRIVED, phaseProgress: 1, overallProgress: 1, speedFraction: 0, pathT: 1 };
  }

  if (t < SPOOL_SECONDS) {
    const phaseProgress = t / SPOOL_SECONDS;
    const speedFraction = easeInQuad(phaseProgress);
    // Distance covered during spool is small; approximate with an integral-ish ease.
    const pathT = 0.02 * easeInQuad(phaseProgress);
    return { phase: WarpPhase.SPOOLING, phaseProgress, overallProgress: t / total, speedFraction, pathT };
  }

  if (t < SPOOL_SECONDS + cruiseSeconds) {
    const phaseProgress = (t - SPOOL_SECONDS) / cruiseSeconds;
    const pathT = 0.02 + phaseProgress * 0.9;
    return { phase: WarpPhase.CRUISE, phaseProgress, overallProgress: t / total, speedFraction: 1, pathT };
  }

  const decelT = t - SPOOL_SECONDS - cruiseSeconds;
  const phaseProgress = decelT / DECEL_SECONDS;
  const speedFraction = 1 - easeOutQuad(phaseProgress);
  const pathT = 0.92 + easeOutQuad(phaseProgress) * 0.08;
  return {
    phase: WarpPhase.DECELERATING,
    phaseProgress,
    overallProgress: t / total,
    speedFraction,
    pathT: clamp(pathT, 0, 1),
  };
}

/**
 * Chooses a sensible total warp-jump duration (seconds of screen time) for a
 * given real distance, compressing huge intergalactic hops so the player
 * never waits an unreasonable amount of real time.
 * @param {number} distanceKm
 * @returns {number} seconds, always >= SPOOL_SECONDS + DECEL_SECONDS.
 */
export function chooseJumpDuration(distanceKm) {
  const km = Math.max(safe(distanceKm), 0);
  // Logarithmic mapping keeps a Moon trip short and a galaxy trip longer,
  // without ever becoming an unplayable wait.
  const base = SPOOL_SECONDS + DECEL_SECONDS;
  const extra = Math.min(Math.log10(1 + km) * 0.9, 14);
  return base + extra;
}

function easeInQuad(t) {
  return t * t;
}

function easeOutQuad(t) {
  return 1 - (1 - t) * (1 - t);
}

function clamp(v, min, max) {
  return Math.min(Math.max(v, min), max);
}

function safe(v) {
  return Number.isFinite(v) ? v : 0;
}

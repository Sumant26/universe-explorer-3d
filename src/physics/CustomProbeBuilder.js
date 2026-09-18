/**
 * @file CustomProbeBuilder.js
 * Physics modeling for player-constructed deep-space probes and custom satellites.
 * Computes Keplerian orbital trajectories, light-speed signal latency, and solar irradiance.
 */

export const SPEED_OF_LIGHT_KM_S = 299792.458;
export const AU_KM = 149597870.7;

/**
 * Chassis archetype definitions for custom satellites.
 */
export const PROBE_CHASSIS = Object.freeze({
  CUBESAT: {
    id: "CUBESAT",
    name: "Nano CubeSat (3U)",
    massKg: 12,
    basePowerW: 40,
    scienceSensor: "Magnetometer & Optical Imager",
    icon: "🛰️",
  },
  ORBITER: {
    id: "ORBITER",
    name: "Deep Space Orbiter",
    massKg: 450,
    basePowerW: 320,
    scienceSensor: "Radar Altimeter & Spectrometer",
    icon: "🛸",
  },
  SOLAR_SAIL: {
    id: "SOLAR_SAIL",
    name: "Photonic Solar Sail",
    massKg: 85,
    basePowerW: 150,
    scienceSensor: "Cosmic Ray Detector & Laser Comms",
    icon: "⛵",
  },
});

/**
 * Calculates one-way and round-trip light speed signal latency.
 * @param {number} distanceKm Distance in kilometers.
 * @returns {{ oneWaySeconds: number, roundTripSeconds: number, formatted: string }}
 */
export function calculateSignalLatency(distanceKm) {
  const dist = Math.max(0, distanceKm || 0);
  const oneWaySeconds = dist / SPEED_OF_LIGHT_KM_S;
  const roundTripSeconds = oneWaySeconds * 2;

  let formatted;
  if (oneWaySeconds < 1) {
    formatted = `${Math.round(oneWaySeconds * 1000)} ms`;
  } else if (oneWaySeconds < 60) {
    formatted = `${oneWaySeconds.toFixed(1)} sec`;
  } else if (oneWaySeconds < 3600) {
    const mins = Math.floor(oneWaySeconds / 60);
    const secs = Math.round(oneWaySeconds % 60);
    formatted = `${mins}m ${secs}s`;
  } else {
    const hrs = Math.floor(oneWaySeconds / 3600);
    const mins = Math.round((oneWaySeconds % 3600) / 60);
    formatted = `${hrs}h ${mins}m`;
  }

  return {
    oneWaySeconds,
    roundTripSeconds,
    formatted,
  };
}

/**
 * Calculates solar irradiance & solar panel efficiency based on inverse square law of distance to the Sun.
 * @param {number} distanceFromSunAu Distance from the Sun in Astronomical Units (AU).
 * @param {number} basePowerW Base power output at 1 AU.
 * @returns {{ solarFluxFraction: number, currentPowerW: number, status: 'OPTIMAL'|'REDUCED'|'CRITICAL'|'RTG_ONLY' }}
 */
export function calculateSolarPower(distanceFromSunAu, basePowerW = 200) {
  const au = Math.max(distanceFromSunAu || 1, 0.05);
  const solarFluxFraction = 1.0 / (au * au);
  const currentPowerW = basePowerW * solarFluxFraction;

  let status = "OPTIMAL";
  if (solarFluxFraction < 0.04) {
    status = "RTG_ONLY";
  } else if (solarFluxFraction < 0.25) {
    status = "CRITICAL";
  } else if (solarFluxFraction < 0.8) {
    status = "REDUCED";
  }

  return {
    solarFluxFraction,
    currentPowerW,
    status,
  };
}

/**
 * Computes 3D position offset for a custom satellite around its parent body.
 * @param {number} semiMajorAxisKm Orbital radius.
 * @param {number} inclinationDeg Orbit inclination angle in degrees.
 * @param {number} elapsedSeconds Time elapsed in seconds.
 * @param {number} periodSeconds Orbital period in seconds.
 * @returns {{ x: number, y: number, z: number }}
 */
export function computeCustomOrbitalPosition(semiMajorAxisKm, inclinationDeg, elapsedSeconds, periodSeconds = 3600) {
  const period = Math.max(periodSeconds, 1);
  const meanAnomaly = ((elapsedSeconds % period) / period) * Math.PI * 2;
  const incRad = ((inclinationDeg || 0) * Math.PI) / 180;

  const r = semiMajorAxisKm;
  const x = r * Math.cos(meanAnomaly);
  const z = r * Math.sin(meanAnomaly) * Math.cos(incRad);
  const y = r * Math.sin(meanAnomaly) * Math.sin(incRad);

  return { x, y, z };
}

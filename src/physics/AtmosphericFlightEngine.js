/**
 * @file AtmosphericFlightEngine.js
 * Pure mathematical model for atmospheric flight skimming, dynamic pressure,
 * re-entry heating intensity, aerodynamic drag, and flight stabilization.
 */

/**
 * Calculates atmospheric properties for a craft at a given distance from a planetary body.
 *
 * @param {number} distanceKm Distance from planet center in km.
 * @param {number} planetRadiusKm Visual/physical radius of planet in km.
 * @param {number} scaleHeightKm Scale height of the atmosphere in km (typically 7-15 km).
 * @param {number} surfacePressureAtm Atmospheric pressure at surface (1.0 for Earth).
 * @returns {{
 *   altitudeKm: number,
 *   inAtmosphere: boolean,
 *   normalizedAltitude: number,
 *   densityFraction: number,
 *   pressureAtm: number
 * }}
 */
export function calculateAtmosphericDensity(distanceKm, planetRadiusKm, scaleHeightKm = 12, surfacePressureAtm = 1.0) {
  if (distanceKm <= 0 || planetRadiusKm <= 0 || surfacePressureAtm <= 0) {
    return {
      altitudeKm: 0,
      inAtmosphere: false,
      normalizedAltitude: 1,
      densityFraction: 0,
      pressureAtm: 0,
    };
  }

  const altitudeKm = Math.max(distanceKm - planetRadiusKm, 0);
  const maxAtmosphereAltitudeKm = scaleHeightKm * 8.5; // Boundary of perceptible atmosphere

  if (altitudeKm >= maxAtmosphereAltitudeKm) {
    return {
      altitudeKm,
      inAtmosphere: false,
      normalizedAltitude: 1,
      densityFraction: 0,
      pressureAtm: 0,
    };
  }

  // Exponential barometric formula: ρ = ρ₀ * e^(-h / H)
  const densityFraction = Math.exp(-altitudeKm / Math.max(scaleHeightKm, 1));
  const pressureAtm = surfacePressureAtm * densityFraction;
  const normalizedAltitude = Math.min(Math.max(altitudeKm / maxAtmosphereAltitudeKm, 0), 1);

  return {
    altitudeKm,
    inAtmosphere: densityFraction > 0.0001,
    normalizedAltitude,
    densityFraction,
    pressureAtm,
  };
}

/**
 * Calculates re-entry plasma heating and aerodynamic drag force.
 *
 * @param {number} speedVelocityUnits Current craft speed.
 * @param {number} densityFraction Atmospheric density fraction (0..1).
 * @param {number} [entrySpeedThreshold=18] Speed above which compression shock forms plasma.
 * @returns {{
 *   heatIntensity: number,       // 0..1 normalized plasma glow intensity
 *   dragForce: number,           // Drag magnitude to subtract from velocity
 *   plasmaColor: string,         // Hex color string for re-entry fire
 *   turbulenceShake: number      // Amplitude for camera/ship cockpit shake
 * }}
 */
export function calculateReentryHeating(speedVelocityUnits, densityFraction, entrySpeedThreshold = 18) {
  if (densityFraction <= 0.0001 || speedVelocityUnits <= 1) {
    return { heatIntensity: 0, dragForce: 0, plasmaColor: "#ff7733", turbulenceShake: 0 };
  }

  // Dynamic pressure q = 0.5 * ρ * v^2
  const dynamicPressure = 0.5 * densityFraction * speedVelocityUnits ** 2;
  const excessSpeed = Math.max(speedVelocityUnits - entrySpeedThreshold, 0);

  // Plasma heat intensity forms quadratically above speed threshold in dense air
  const rawHeat = (excessSpeed / 60) * Math.sqrt(densityFraction) * 1.5;
  const heatIntensity = Math.min(Math.max(rawHeat, 0), 1.0);

  // Drag force is proportional to atmospheric density and velocity
  const dragCoefficient = 0.08;
  const dragForce = Math.min(dynamicPressure * dragCoefficient, speedVelocityUnits * 0.9);

  // Re-entry color shifts from warm orange to bright incandescent cyan-white at peak heat
  let plasmaColor = "#ff6a2b";
  if (heatIntensity > 0.75) {
    plasmaColor = "#aae8ff";
  } else if (heatIntensity > 0.45) {
    plasmaColor = "#ffd066";
  }

  const turbulenceShake = heatIntensity * 0.035 + dynamicPressure * 0.0008;

  return {
    heatIntensity,
    dragForce,
    plasmaColor,
    turbulenceShake: Math.min(turbulenceShake, 0.08),
  };
}

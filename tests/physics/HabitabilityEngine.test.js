import { describe, it, expect } from 'vitest';
import { computeHabitability, normalizeAtmosphere, OccupationClass } from '../../src/physics/HabitabilityEngine.js';

describe('HabitabilityEngine', () => {
  it('scores an Earth-like environment highly and classifies it as directly habitable', () => {
    const result = computeHabitability({
      surfaceTempC: 15,
      atmosphericPressureAtm: 1,
      surfaceGravityG: 1,
      radiationIndex: 1,
      hasLiquidWater: true,
      isGasGiant: false
    });
    expect(result.score).toBeGreaterThanOrEqual(75);
    expect(result.classification).toBe(OccupationClass.EARTH_LIKE);
  });

  it('scores a hostile, airless environment low and classifies accordingly', () => {
    const result = computeHabitability({
      surfaceTempC: -200,
      atmosphericPressureAtm: 0,
      surfaceGravityG: 0.05,
      radiationIndex: 9,
      hasLiquidWater: false,
      isGasGiant: false
    });
    expect(result.score).toBeLessThan(30);
  });

  it('always classifies gas giants as a gas outpost with a very low score', () => {
    const result = computeHabitability({
      surfaceTempC: -150,
      atmosphericPressureAtm: 0,
      surfaceGravityG: 2,
      radiationIndex: 8,
      hasLiquidWater: false,
      isGasGiant: true
    });
    expect(result.classification).toBe(OccupationClass.GAS_OUTPOST);
    expect(result.score).toBeLessThan(10);
  });

  it('never returns a score outside [0, 100] or a NaN', () => {
    const result = computeHabitability({});
    expect(result.score).toBeGreaterThanOrEqual(0);
    expect(result.score).toBeLessThanOrEqual(100);
    expect(Number.isNaN(result.score)).toBe(false);
  });

  it('handles missing/undefined input without throwing', () => {
    expect(() => computeHabitability(undefined)).not.toThrow();
    expect(() => computeHabitability(null)).not.toThrow();
  });

  it('all factor sub-scores are within [0, 1]', () => {
    const result = computeHabitability({
      surfaceTempC: 500,
      atmosphericPressureAtm: 90,
      surfaceGravityG: 3,
      radiationIndex: 4,
      hasLiquidWater: false,
      isGasGiant: false
    });
    for (const value of Object.values(result.factors)) {
      expect(value).toBeGreaterThanOrEqual(0);
      expect(value).toBeLessThanOrEqual(1);
    }
  });

  describe('normalizeAtmosphere', () => {
    it('normalizes gas percentages to sum to ~100', () => {
      const result = normalizeAtmosphere({ N2: 39, O2: 21 });
      const total = result.reduce((sum, r) => sum + r.percent, 0);
      expect(total).toBeCloseTo(100, 0);
    });

    it('sorts descending by percentage', () => {
      const result = normalizeAtmosphere({ N2: 10, CO2: 90 });
      expect(result[0].gas).toBe('CO2');
    });

    it('returns an empty array for empty/invalid composition', () => {
      expect(normalizeAtmosphere({})).toEqual([]);
      expect(normalizeAtmosphere(undefined)).toEqual([]);
      expect(normalizeAtmosphere({ X: -5, Y: 0 })).toEqual([]);
    });
  });
});

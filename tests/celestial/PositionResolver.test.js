import { describe, it, expect } from 'vitest';
import { resolveScenePositions, resolveSatellitePositions } from '../../src/celestial/PositionResolver.js';
import { CELESTIAL_BODIES } from '../../src/celestial/CelestialData.js';
import { SATELLITES } from '../../src/celestial/SatelliteData.js';

describe('PositionResolver', () => {
  it('resolves a finite position for every celestial body', () => {
    const positions = resolveScenePositions(CELESTIAL_BODIES, 0);
    for (const body of CELESTIAL_BODIES) {
      const pos = positions.get(body.id);
      expect(pos).toBeDefined();
      expect(Number.isFinite(pos.x)).toBe(true);
      expect(Number.isFinite(pos.y)).toBe(true);
      expect(Number.isFinite(pos.z)).toBe(true);
    }
  });

  it('places the Sun at the origin', () => {
    const positions = resolveScenePositions(CELESTIAL_BODIES, 0);
    const sun = positions.get('sun');
    expect(sun.x).toBeCloseTo(0, 6);
    expect(sun.y).toBeCloseTo(0, 6);
    expect(sun.z).toBeCloseTo(0, 6);
  });

  it('keeps a moon close to its parent planet, not at solar-system scale', () => {
    const positions = resolveScenePositions(CELESTIAL_BODIES, 0);
    const earth = positions.get('earth');
    const moon = positions.get('moon');
    const distance = Math.hypot(moon.x - earth.x, moon.y - earth.y, moon.z - earth.z);
    const sun = positions.get('sun');
    const earthSunDistance = Math.hypot(earth.x - sun.x, earth.y - sun.y, earth.z - sun.z);
    expect(distance).toBeLessThan(earthSunDistance);
  });

  it('moves an orbiting body over time (it is not static)', () => {
    const t0 = resolveScenePositions(CELESTIAL_BODIES, 0).get('earth');
    const t1 = resolveScenePositions(CELESTIAL_BODIES, 20_000_000).get('earth');
    const moved = Math.hypot(t1.x - t0.x, t1.y - t0.y, t1.z - t0.z);
    expect(moved).toBeGreaterThan(0);
  });

  it('is deterministic: same time input always yields the same position', () => {
    const a = resolveScenePositions(CELESTIAL_BODIES, 12345).get('mars');
    const b = resolveScenePositions(CELESTIAL_BODIES, 12345).get('mars');
    expect(a).toEqual(b);
  });

  it('does not infinite-loop or throw on a malformed cyclic orbit graph', () => {
    const cyclic = [
      { id: 'a', orbit: { parentId: 'b', semiMajorAxisAu: 1, periodDays: 10 }, scaleTier: 0 },
      { id: 'b', orbit: { parentId: 'a', semiMajorAxisAu: 1, periodDays: 10 }, scaleTier: 0 }
    ];
    expect(() => resolveScenePositions(cyclic, 0)).not.toThrow();
  });
});

describe('resolveSatellitePositions', () => {
  it('places every satellite at a finite position', () => {
    const celestialPositions = resolveScenePositions(CELESTIAL_BODIES, 0);
    const satPositions = resolveSatellitePositions(SATELLITES, celestialPositions);
    for (const sat of SATELLITES) {
      const pos = satPositions.get(sat.id);
      expect(pos).toBeDefined();
      expect(Number.isFinite(pos.x)).toBe(true);
      expect(Number.isFinite(pos.y)).toBe(true);
      expect(Number.isFinite(pos.z)).toBe(true);
    }
  });

  it('places an Earth-orbiting satellite near Earth', () => {
    const celestialPositions = resolveScenePositions(CELESTIAL_BODIES, 0);
    const satPositions = resolveSatellitePositions(SATELLITES, celestialPositions);
    const earth = celestialPositions.get('earth');
    const iss = satPositions.get('iss');
    const distance = Math.hypot(iss.x - earth.x, iss.y - earth.y, iss.z - earth.z);
    expect(distance).toBeLessThan(3);
  });

  it('places a satellite with no orbitsBodyId at a bounded, finite distance from Earth', () => {
    const celestialPositions = resolveScenePositions(CELESTIAL_BODIES, 0);
    const satPositions = resolveSatellitePositions(SATELLITES, celestialPositions);
    const earth = celestialPositions.get('earth');
    const voyager = satPositions.get('voyager-1');
    const distance = Math.hypot(voyager.x - earth.x, voyager.y - earth.y, voyager.z - earth.z);
    expect(distance).toBeGreaterThan(0);
    expect(distance).toBeLessThan(1000);
  });
});

import { describe, it, expect } from 'vitest';
import {
  vAdd, vSub, vScale, vLength, vNormalize, vDot, vLerp,
  integrateManualFlight, computeBearing, resolveCelestialCollisions
} from '../../src/spaceship/FlightPhysics.js';

describe('vector math', () => {
  it('vAdd/vSub are inverses', () => {
    const a = { x: 1, y: 2, z: 3 };
    const b = { x: 4, y: -1, z: 2 };
    expect(vSub(vAdd(a, b), b)).toEqual(a);
  });

  it('vLength computes Euclidean length', () => {
    expect(vLength({ x: 3, y: 4, z: 0 })).toBeCloseTo(5, 6);
  });

  it('vNormalize returns a unit vector', () => {
    const n = vNormalize({ x: 3, y: 4, z: 0 });
    expect(vLength(n)).toBeCloseTo(1, 6);
  });

  it('vNormalize handles a zero-length vector without dividing by zero', () => {
    const n = vNormalize({ x: 0, y: 0, z: 0 });
    expect(Number.isFinite(n.x)).toBe(true);
    expect(vLength(n)).toBeCloseTo(1, 6);
  });

  it('vDot of perpendicular unit vectors is 0', () => {
    expect(vDot({ x: 1, y: 0, z: 0 }, { x: 0, y: 1, z: 0 })).toBeCloseTo(0, 6);
  });

  it('vLerp clamps t into [0, 1]', () => {
    const a = { x: 0, y: 0, z: 0 };
    const b = { x: 10, y: 0, z: 0 };
    expect(vLerp(a, b, -5)).toEqual(a);
    expect(vLerp(a, b, 5)).toEqual(b);
    expect(vLerp(a, b, 0.5)).toEqual({ x: 5, y: 0, z: 0 });
  });

  it('vScale scales all components uniformly', () => {
    expect(vScale({ x: 1, y: -2, z: 3 }, 2)).toEqual({ x: 2, y: -4, z: 6 });
  });
});

describe('integrateManualFlight', () => {
  const baseState = () => ({
    position: { x: 0, y: 0, z: 0 },
    velocity: { x: 0, y: 0, z: 0 },
    forward: { x: 0, y: 0, z: -1 }
  });

  it('moves the ship forward when thrust is applied', () => {
    let state = baseState();
    for (let i = 0; i < 30; i++) {
      state = integrateManualFlight(state, { thrust: 1, yaw: 0, pitch: 0 }, 1 / 60);
    }
    expect(state.position.z).toBeLessThan(0); // forward is -z
  });

  it('turns right (+X) when positive yaw is applied', () => {
    let state = baseState();
    for (let i = 0; i < 30; i++) {
      state = integrateManualFlight(state, { thrust: 0, yaw: 1, pitch: 0 }, 1 / 60);
    }
    expect(state.forward.x).toBeGreaterThan(0); // right is +x
  });

  it('turns left (-X) when negative yaw is applied', () => {
    let state = baseState();
    for (let i = 0; i < 30; i++) {
      state = integrateManualFlight(state, { thrust: 0, yaw: -1, pitch: 0 }, 1 / 60);
    }
    expect(state.forward.x).toBeLessThan(0); // left is -x
  });

  it('accelerates much faster and reaches higher speed under boost/hyperdrive', () => {
    let normalState = baseState();
    let boostState = baseState();
    for (let i = 0; i < 60; i++) {
      normalState = integrateManualFlight(normalState, { thrust: 1, yaw: 0, pitch: 0, boost: false }, 1 / 60);
      boostState = integrateManualFlight(boostState, { thrust: 1, yaw: 0, pitch: 0, boost: true }, 1 / 60);
    }
    const normalSpeed = vLength(normalState.velocity);
    const boostSpeed = vLength(boostState.velocity);
    expect(boostSpeed).toBeGreaterThan(normalSpeed * 3);
  });

  it('never mutates the input state object', () => {
    const state = baseState();
    const snapshot = JSON.parse(JSON.stringify(state));
    integrateManualFlight(state, { thrust: 1, yaw: 0, pitch: 0 }, 1 / 60);
    expect(state).toEqual(snapshot);
  });

  it('caps speed at a maximum even under sustained normal thrust', () => {
    let state = baseState();
    for (let i = 0; i < 600; i++) {
      state = integrateManualFlight(state, { thrust: 1, yaw: 0, pitch: 0 }, 1 / 60);
    }
    const speed = vLength(state.velocity);
    expect(speed).toBeLessThan(25); // generous ceiling above MAX_MANUAL_SPEED
  });

  it('decelerates toward rest when thrust is released (damping)', () => {
    let state = { ...baseState(), velocity: { x: 0, y: 0, z: -5 } };
    for (let i = 0; i < 120; i++) {
      state = integrateManualFlight(state, { thrust: 0, yaw: 0, pitch: 0 }, 1 / 60);
    }
    expect(vLength(state.velocity)).toBeLessThan(0.5);
  });

  it('clamps out-of-range inputs instead of producing NaN', () => {
    const state = baseState();
    const next = integrateManualFlight(state, { thrust: 999, yaw: -999, pitch: 999 }, 1 / 60);
    expect(Number.isFinite(next.position.x)).toBe(true);
    expect(Number.isFinite(next.velocity.x)).toBe(true);
  });

  it('guards against a huge or invalid dt', () => {
    const state = baseState();
    const next = integrateManualFlight(state, { thrust: 1, yaw: 0, pitch: 0 }, 1e9);
    expect(Number.isFinite(next.position.x)).toBe(true);
    expect(Number.isFinite(next.position.z)).toBe(true);
  });

  it('handles negative/NaN dt without throwing', () => {
    const state = baseState();
    expect(() => integrateManualFlight(state, { thrust: 1, yaw: 0, pitch: 0 }, -1)).not.toThrow();
    expect(() => integrateManualFlight(state, { thrust: 1, yaw: 0, pitch: 0 }, NaN)).not.toThrow();
  });
});

describe('computeBearing', () => {
  it('reports aligned when the ship already faces the target', () => {
    const bearing = computeBearing({ x: 0, y: 0, z: 0 }, { x: 0, y: 0, z: -1 }, { x: 0, y: 0, z: -10 });
    expect(bearing.aligned).toBe(true);
    expect(bearing.angleOffsetDeg).toBeCloseTo(0, 1);
  });

  it('reports not aligned when facing away from the target', () => {
    const bearing = computeBearing({ x: 0, y: 0, z: 0 }, { x: 0, y: 0, z: 1 }, { x: 0, y: 0, z: -10 });
    expect(bearing.aligned).toBe(false);
    expect(bearing.angleOffsetDeg).toBeCloseTo(180, 1);
  });

  it('reports arrived within the arrival radius', () => {
    const bearing = computeBearing({ x: 0, y: 0, z: 0 }, { x: 0, y: 0, z: -1 }, { x: 0, y: 0, z: -1 }, 2);
    expect(bearing.arrived).toBe(true);
  });

  it('reports not arrived outside the arrival radius', () => {
    const bearing = computeBearing({ x: 0, y: 0, z: 0 }, { x: 0, y: 0, z: -1 }, { x: 0, y: 0, z: -10 }, 2);
    expect(bearing.arrived).toBe(false);
  });

  it('computes the correct straight-line distance', () => {
    const bearing = computeBearing({ x: 0, y: 0, z: 0 }, { x: 0, y: 0, z: -1 }, { x: 3, y: 4, z: 0 });
    expect(bearing.distance).toBeCloseTo(5, 6);
  });
});

describe('resolveCelestialCollisions', () => {
  it('detects and repels position when inside safeRadius of an obstacle', () => {
    const obstacle = { position: { x: 0, y: 0, z: -10 }, safeRadius: 2.0 };
    const shipPos = { x: 0, y: 0, z: -9.0 }; // 1.0 unit from obstacle center, inside safeRadius of 2.0
    const shipVel = { x: 0, y: 0, z: -5.0 }; // heading inward towards obstacle

    const result = resolveCelestialCollisions(shipPos, shipVel, [obstacle]);
    expect(result.collided).toBe(true);
    // Position should be pushed back to boundary (distance = 2.0)
    expect(result.position.z).toBeCloseTo(-8.0, 3);
    // Inward velocity should be deflected
    expect(result.velocity.z).toBeGreaterThanOrEqual(0);
  });

  it('passes through unchanged when outside safeRadius', () => {
    const obstacle = { position: { x: 0, y: 0, z: -10 }, safeRadius: 2.0 };
    const shipPos = { x: 0, y: 0, z: -5.0 }; // 5 units away, well outside safeRadius
    const shipVel = { x: 0, y: 0, z: -1.0 };

    const result = resolveCelestialCollisions(shipPos, shipVel, [obstacle]);
    expect(result.collided).toBe(false);
    expect(result.position.z).toBe(-5.0);
    expect(result.velocity.z).toBe(-1.0);
  });
});

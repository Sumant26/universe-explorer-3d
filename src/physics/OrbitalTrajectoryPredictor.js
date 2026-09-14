/**
 * @file OrbitalTrajectoryPredictor.js
 * Calculates real-time forward-projected n-body trajectory predictions
 * for spacecraft maneuvering near massive celestial bodies (slingshot arcs).
 */

const G_SCALED = 4.5; // Tuned gravitational constant for intuitive in-game orbital slingshots

/**
 * Predicts future trajectory points of a ship over a series of time steps.
 *
 * @param {{ x: number, y: number, z: number }} initialPos Current ship position.
 * @param {{ x: number, y: number, z: number }} initialVel Current ship velocity.
 * @param {Array<{ position: { x: number, y: number, z: number }, mass: number, safeRadius: number }>} bodies Massive bodies influencing gravity.
 * @param {number} [steps=45] Number of simulation points to project.
 * @param {number} [stepDt=0.12] Time delta per projected step.
 * @returns {Array<{ x: number, y: number, z: number, speed: number }>} Projected path waypoints.
 */
export function predictOrbitalTrajectory(initialPos, initialVel, bodies, steps = 45, stepDt = 0.12) {
  const points = [];
  let px = initialPos.x;
  let py = initialPos.y;
  let pz = initialPos.z;

  let vx = initialVel.x;
  let vy = initialVel.y;
  let vz = initialVel.z;

  points.push({
    x: px,
    y: py,
    z: pz,
    speed: Math.sqrt(vx * vx + vy * vy + vz * vz),
  });

  const numBodies = bodies ? bodies.length : 0;

  for (let i = 0; i < steps; i++) {
    // Calculate total gravitational acceleration from all nearby bodies
    let ax = 0;
    let ay = 0;
    let az = 0;

    for (let b = 0; b < numBodies; b++) {
      const body = bodies[b];
      const dx = body.position.x - px;
      const dy = body.position.y - py;
      const dz = body.position.z - pz;
      const distSq = dx * dx + dy * dy + dz * dz;
      const dist = Math.sqrt(distSq);

      const minRadius = Math.max(body.safeRadius * 0.8, 0.15);
      if (dist < minRadius) {
        // Collision with body surface — terminate trajectory arc
        return points;
      }

      // Softened Newtonian gravity: a = G * M / (r^2 + softening)
      const softening = 0.08;
      const forceMag = (G_SCALED * (body.mass || 1.0)) / (distSq + softening);
      const invDist = 1 / dist;

      ax += dx * invDist * forceMag;
      ay += dy * invDist * forceMag;
      az += dz * invDist * forceMag;
    }

    // Velocity Verlet / Euler integration
    vx += ax * stepDt;
    vy += ay * stepDt;
    vz += az * stepDt;

    px += vx * stepDt;
    py += vy * stepDt;
    pz += vz * stepDt;

    points.push({
      x: px,
      y: py,
      z: pz,
      speed: Math.sqrt(vx * vx + vy * vy + vz * vz),
    });
  }

  return points;
}

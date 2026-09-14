/**
 * @file DashboardPhysicsProp.js
 * 2DOF Spring-Damper physics simulation for a cozy dashboard bobblehead/prop
 * that responds dynamically to ship linear acceleration, roll/pitch/yaw turning,
 * and warp surges.
 */

export class DashboardPhysicsProp {
  /**
   * @param {{
   *   stiffness?: number,
   *   damping?: number,
   *   mass?: number,
   *   maxTiltAngle?: number
   * }} [options]
   */
  constructor(options = {}) {
    this.stiffness = options.stiffness ?? 85.0; // Spring force constant (k)
    this.damping = options.damping ?? 6.5; // Damping constant (c)
    this.mass = options.mass ?? 0.85; // Head mass (m)
    this.maxTilt = options.maxTiltAngle ?? 0.55; // Radians clamp

    // Current displacement angles (pitch = x, roll = z)
    this.rotationX = 0;
    this.rotationZ = 0;

    // Angular velocities
    this.velX = 0;
    this.velZ = 0;
  }

  /**
   * Steps the spring simulation given external g-forces / acceleration.
   *
   * @param {number} dt Delta time in seconds.
   * @param {{ accX?: number, accY?: number, accZ?: number, yawRate?: number, pitchRate?: number }} forces
   * @returns {{ rotationX: number, rotationZ: number }}
   */
  update(dt, forces = {}) {
    const clampedDt = Math.min(Math.max(dt, 0.001), 0.1);

    // External inertial forces:
    // Forward acceleration tilts prop backward (positive pitch / rotationX)
    // Turning yaw/strafe tilts prop outward (roll / rotationZ)
    const externalForceX = (forces.accZ ?? 0) * 0.45 + (forces.pitchRate ?? 0) * 0.35;
    const externalForceZ = -(forces.accX ?? 0) * 0.45 - (forces.yawRate ?? 0) * 0.4;

    // F_spring = -k * x
    // F_damp   = -c * v
    // a = (F_spring + F_damp + F_ext) / m
    const springForceX = -this.stiffness * this.rotationX;
    const dampForceX = -this.damping * this.velX;
    const accelX = (springForceX + dampForceX + externalForceX) / this.mass;

    const springForceZ = -this.stiffness * this.rotationZ;
    const dampForceZ = -this.damping * this.velZ;
    const accelZ = (springForceZ + dampForceZ + externalForceZ) / this.mass;

    // Numerical integration (semi-implicit Euler)
    this.velX += accelX * clampedDt;
    this.velZ += accelZ * clampedDt;

    this.rotationX += this.velX * clampedDt;
    this.rotationZ += this.velZ * clampedDt;

    // Clamp within physical limits
    if (Math.abs(this.rotationX) > this.maxTilt) {
      this.rotationX = Math.sign(this.rotationX) * this.maxTilt;
      this.velX *= -0.25; // Elastic bounce against limit
    }
    if (Math.abs(this.rotationZ) > this.maxTilt) {
      this.rotationZ = Math.sign(this.rotationZ) * this.maxTilt;
      this.velZ *= -0.25;
    }

    return {
      rotationX: this.rotationX,
      rotationZ: this.rotationZ,
    };
  }

  /**
   * Applies an impulse nudge (e.g. on clicking the bobblehead or exiting warp).
   * @param {number} impulseX
   * @param {number} impulseZ
   */
  nudge(impulseX = 2.5, impulseZ = 2.0) {
    this.velX += impulseX;
    this.velZ += impulseZ;
  }

  reset() {
    this.rotationX = 0;
    this.rotationZ = 0;
    this.velX = 0;
    this.velZ = 0;
  }
}

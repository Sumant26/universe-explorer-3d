import * as THREE from "three";

export class WormholeFactory {
  constructor(scene, store) {
    this.scene = scene;
    this.store = store;
    this.wormholes = [];
    this.warpParticles = null;
    this.isWarping = false;
  }

  createWormhole({
    name = "Einstein-Rosen Bridge Alpha",
    position = new THREE.Vector3(50000, 0, -50000),
    destinationName = "Andromeda Galaxy M31",
    destinationCoords = new THREE.Vector3(-80000, 15000, 90000),
    eventRadius = 450,
  } = {}) {
    const group = new THREE.Group();
    group.position.copy(position);

    // 1. Central Singularity / Event Horizon Void
    const horizonGeo = new THREE.SphereGeometry(eventRadius, 48, 48);
    const horizonMat = new THREE.MeshBasicMaterial({
      color: 0x000000,
    });
    const horizon = new THREE.Mesh(horizonGeo, horizonMat);
    group.add(horizon);

    // 2. Gravitational Lensing Glow Ring
    const haloGeo = new THREE.RingGeometry(eventRadius * 0.95, eventRadius * 1.5, 64);
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0x00f3ff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });
    const halo = new THREE.Mesh(haloGeo, haloMat);
    group.add(halo);

    // 3. Swirling Accretion Disk
    const diskGeo = new THREE.RingGeometry(eventRadius * 1.2, eventRadius * 3.2, 64);
    const diskMat = new THREE.MeshBasicMaterial({
      color: 0xbd00ff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const disk = new THREE.Mesh(diskGeo, diskMat);
    disk.rotation.x = Math.PI / 3;
    group.add(disk);

    // 4. Accretion Particle Jets
    const particleCount = 400;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const radius = eventRadius + Math.random() * eventRadius * 2.5;
      const theta = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * (eventRadius * 0.5);

      positions[i * 3] = Math.cos(theta) * radius;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = Math.sin(theta) * radius;

      colors[i * 3] = 0.2 + Math.random() * 0.8;
      colors[i * 3 + 1] = 0.8 + Math.random() * 0.2;
      colors[i * 3 + 2] = 1.0;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 18,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    group.add(particles);

    this.scene.add(group);

    const wormholeEntry = {
      name,
      group,
      halo,
      disk,
      particles,
      position,
      destinationName,
      destinationCoords,
      eventRadius,
    };

    this.wormholes.push(wormholeEntry);
    return wormholeEntry;
  }

  checkProximity(shipPosition, threshold = 900) {
    for (const wh of this.wormholes) {
      const dist = shipPosition.distanceTo(wh.position);
      if (dist <= threshold) {
        return {
          inRange: true,
          distance: dist,
          wormhole: wh,
        };
      }
    }
    return { inRange: false, distance: Infinity, wormhole: null };
  }

  tick(delta) {
    this.wormholes.forEach((wh) => {
      wh.disk.rotation.z += delta * 0.6;
      wh.halo.rotation.z -= delta * 0.4;
      wh.particles.rotation.y += delta * 0.8;

      const scale = 1.0 + Math.sin(Date.now() * 0.004) * 0.04;
      wh.halo.scale.set(scale, scale, scale);
    });
  }

  destroy() {
    this.wormholes.forEach((wh) => {
      this.scene.remove(wh.group);
    });
    this.wormholes = [];
  }
}

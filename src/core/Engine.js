/**
 * @file Engine.js
 * Owns the Three.js renderer, scene, and camera lifecycle: creation, resize,
 * the render loop, and WebGL context loss/restore handling. Nothing here
 * knows about game state — it's a thin, reusable rendering shell.
 */

import * as THREE from 'three';

export class Engine {
  /**
   * @param {object} options
   * @param {HTMLCanvasElement} options.canvas
   * @param {(reason: string) => void} [options.onContextLost]
   * @param {() => void} [options.onContextRestored]
   */
  constructor({ canvas, onContextLost, onContextRestored }) {
    if (!canvas) throw new Error('Engine requires a canvas element');
    this.canvas = canvas;
    this._onContextLost = onContextLost ?? (() => {});
    this._onContextRestored = onContextRestored ?? (() => {});
    this._disposed = false;
    /** @type {Array<{dispose?: Function}>} */
    this._trackedResources = [];
    /** @type {Array<() => void>} */
    this._frameCallbacks = [];

    this.renderer = this._createRenderer(canvas);
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(60, this._aspect(), 0.01, 5_000_000);
    this.camera.position.set(0, 1.4, 6);

    this._resizeHandler = () => this.resize();
    window.addEventListener('resize', this._resizeHandler);

    this._clock = new THREE.Clock();
    this._rafId = null;
  }

  /** @private @returns {THREE.WebGLRenderer} */
  _createRenderer(canvas) {
    if (!hasWebGLSupport()) {
      throw new Error('WebGL is not available in this browser');
    }
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      powerPreference: 'high-performance',
      alpha: false
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(window.innerWidth, window.innerHeight, false);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;

    canvas.addEventListener('webglcontextlost', (event) => {
      event.preventDefault();
      this.stop();
      this._onContextLost('WebGL context was lost.');
    });
    canvas.addEventListener('webglcontextrestored', () => {
      this._onContextRestored();
    });

    return renderer;
  }

  /** @private @returns {number} */
  _aspect() {
    return Math.max(window.innerWidth, 1) / Math.max(window.innerHeight, 1);
  }

  resize() {
    if (this._disposed) return;
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.camera.aspect = width / Math.max(height, 1);
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height, false);
    for (const cb of this._resizeCallbacks ?? []) cb(width, height);
  }

  /** @param {(width: number, height: number) => void} cb */
  onResize(cb) {
    this._resizeCallbacks = this._resizeCallbacks ?? [];
    this._resizeCallbacks.push(cb);
  }

  /**
   * Registers a per-frame callback invoked with delta seconds and elapsed seconds.
   * @param {(deltaSeconds: number, elapsedSeconds: number) => void} cb
   * @returns {() => void} unsubscribe
   */
  onTick(cb) {
    this._frameCallbacks.push(cb);
    return () => {
      const idx = this._frameCallbacks.indexOf(cb);
      if (idx >= 0) this._frameCallbacks.splice(idx, 1);
    };
  }

  /** Registers a Three.js object (geometry/material/texture) for disposal on teardown. */
  track(resource) {
    this._trackedResources.push(resource);
    return resource;
  }

  start() {
    if (this._rafId !== null) return;
    const loop = () => {
      this._rafId = requestAnimationFrame(loop);
      const delta = Math.min(this._clock.getDelta(), 0.1);
      const elapsed = this._clock.getElapsedTime();
      for (const cb of this._frameCallbacks) {
        try {
          cb(delta, elapsed);
        } catch (err) {
          // A single failing subsystem shouldn't blank the whole render loop.
          console.error('[Engine] frame callback failed:', err);
        }
      }
      this.renderer.render(this.scene, this.camera);
    };
    this._rafId = requestAnimationFrame(loop);
  }

  stop() {
    if (this._rafId !== null) {
      cancelAnimationFrame(this._rafId);
      this._rafId = null;
    }
  }

  /** Fully tears down the renderer, scene graph, and tracked GPU resources. */
  dispose() {
    if (this._disposed) return;
    this._disposed = true;
    this.stop();
    window.removeEventListener('resize', this._resizeHandler);

    this.scene.traverse((obj) => {
      if (obj.geometry) obj.geometry.dispose?.();
      if (obj.material) {
        const materials = Array.isArray(obj.material) ? obj.material : [obj.material];
        for (const mat of materials) disposeMaterial(mat);
      }
    });
    for (const resource of this._trackedResources) resource?.dispose?.();
    this.renderer.dispose();
  }
}

function disposeMaterial(material) {
  if (!material) return;
  for (const key of Object.keys(material)) {
    const value = material[key];
    if (value && value.isTexture) value.dispose();
  }
  material.dispose?.();
}

/** @returns {boolean} whether a WebGL context can be created at all. */
export function hasWebGLSupport() {
  try {
    const canvas = document.createElement('canvas');
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext('webgl2') || canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

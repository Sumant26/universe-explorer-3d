/**
 * @file PostProcessing.js
 * A soft, warm bloom pass so stars and engine glows feel gentle rather than
 * harsh/neon — part of the "cozy" visual language. Falls back to plain
 * rendering (no composer) if the post-processing modules fail to load.
 */

import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";

/**
 * @param {THREE.WebGLRenderer} renderer
 * @param {THREE.Scene} scene
 * @param {THREE.Camera} camera
 * @returns {{ composer: ?EffectComposer, render: (delta:number) => void, resize: (w:number,h:number)=>void, dispose: () => void }}
 */
export function createPostProcessing(renderer, scene, camera) {
  try {
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));

    const bloom = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      0.55, // strength — soft, not blinding
      0.65, // radius
      0.72 // threshold
    );
    composer.addPass(bloom);

    return {
      composer,
      render: () => composer.render(),
      resize: (w, h) => {
        composer.setSize(w, h);
        bloom.setSize(w, h);
      },
      dispose: () => {
        composer.passes.forEach((pass) => pass.dispose?.());
      },
    };
  } catch (err) {
    console.warn("[PostProcessing] Falling back to plain rendering:", err);
    return {
      composer: null,
      render: () => renderer.render(scene, camera),
      resize: () => {},
      dispose: () => {},
    };
  }
}

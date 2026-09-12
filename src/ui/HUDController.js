/**
 * @file HUDController.js
 * Wires up global keyboard shortcuts and toggles overall HUD visibility.
 * Individual panels (DetailPanel, HabitabilityMatrix, etc.) still own their
 * own rendering; this just coordinates cross-cutting shortcuts.
 */

import { Actions } from "../state/StateActions.js";

/**
 * @param {object} deps
 * @param {import('../state/Store.js').Store} deps.store
 * @param {import('./ViewSwitcher.js').ViewSwitcher} deps.viewSwitcher
 * @param {import('../audio/SoundSynthesizer.js').SoundSynthesizer} deps.audio
 * @param {() => void} deps.onEngageWarp - triggered by <kbd>Space</kbd>.
 * @returns {() => void} teardown function
 */
export function initHUDController({ store, viewSwitcher, audio, onEngageWarp }) {
  const hudLayers = document.querySelectorAll(".hud-layer");

  const applyHudVisibility = (visible) => {
    hudLayers.forEach((el) => el.classList.toggle("hud-hidden", !visible));
  };

  const unsubscribeHud = store.subscribe(
    (visible) => applyHudVisibility(visible),
    (s) => s.ui.hudVisible
  );
  applyHudVisibility(store.getState().ui.hudVisible);

  const unsubscribeMute = store.subscribe(
    (muted) => audio.setMuted(muted),
    (s) => s.ui.audioMuted
  );

  const handleKeydown = (event) => {
    // Don't hijack shortcuts while the user is typing in the search box.
    const isTyping = event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement;

    if (event.code === "KeyC" && !isTyping) {
      viewSwitcher.cycle();
    } else if (event.code === "KeyM" && !isTyping) {
      store.dispatch(Actions.toggleAudioMuted());
    } else if (event.code === "KeyH" && !isTyping) {
      store.dispatch(Actions.toggleHud());
    } else if (event.code === "Escape") {
      store.dispatch(Actions.toggleDetailPanel(false));
      store.dispatch(Actions.toggleHabitability(false));
      store.dispatch(Actions.toggleSatelliteList(false));
    } else if (event.code === "Space" && !isTyping) {
      event.preventDefault();
      onEngageWarp?.();
    }
  };

  window.addEventListener("keydown", handleKeydown);

  return () => {
    window.removeEventListener("keydown", handleKeydown);
    unsubscribeHud();
    unsubscribeMute();
  };
}

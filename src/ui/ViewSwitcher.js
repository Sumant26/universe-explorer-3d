/**
 * @file ViewSwitcher.js
 * Buttons (and the <kbd>C</kbd> shortcut) for switching between the three
 * camera views: Cockpit, 3rd-Person, and Cinematic.
 */

import { Actions, CameraMode } from '../state/StateActions.js';

const VIEW_ORDER = [CameraMode.COCKPIT, CameraMode.THIRD_PERSON, CameraMode.CINEMATIC];
const VIEW_LABELS = {
  [CameraMode.COCKPIT]: 'Cockpit',
  [CameraMode.THIRD_PERSON]: '3rd Person',
  [CameraMode.CINEMATIC]: 'Cinematic'
};

export class ViewSwitcher {
  /**
   * @param {HTMLElement} root
   * @param {import('../state/Store.js').Store} store
   */
  constructor(root, store) {
    if (!root) throw new Error('ViewSwitcher requires a root element');
    this.root = root;
    this.store = store;
    this._render();
    this._unsubscribe = store.subscribe(
      (mode) => this._highlight(mode),
      (s) => s.cameraMode
    );
    this._highlight(store.getState().cameraMode);
  }

  /** @private */
  _render() {
    this.root.innerHTML = `
      <div class="view-switcher" role="group" aria-label="Camera view">
        ${VIEW_ORDER.map(
          (mode) => `<button type="button" class="view-btn" data-mode="${mode}">${VIEW_LABELS[mode]}</button>`
        ).join('')}
      </div>
    `;
    this.root.querySelectorAll('.view-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.store.dispatch(Actions.setCameraMode(btn.getAttribute('data-mode')));
      });
    });
  }

  /** Cycles to the next camera mode, used by the <kbd>C</kbd> shortcut. */
  cycle() {
    const current = this.store.getState().cameraMode;
    const idx = VIEW_ORDER.indexOf(current);
    const next = VIEW_ORDER[(idx + 1) % VIEW_ORDER.length];
    this.store.dispatch(Actions.setCameraMode(next));
  }

  /** @private @param {string} mode */
  _highlight(mode) {
    this.root.querySelectorAll('.view-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-mode') === mode);
    });
  }

  dispose() {
    this._unsubscribe?.();
  }
}

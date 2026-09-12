/**
 * @file Store.js
 * A tiny, dependency-free, reactive unidirectional state store.
 *
 * Design goals:
 *  - No direct mutation: the only way to change state is `dispatch(action)`.
 *  - Subscribers receive `(nextState, prevState, action)` and may subscribe
 *    to the whole tree or a "selector" slice, so a UI widget only re-renders
 *    when the piece of state it cares about actually changes.
 *  - Reducers are pure functions `(state, action) => nextState`, which makes
 *    every transition unit-testable without touching Three.js or the DOM.
 */

import { ActionTypes, FlightStatus, FlightMode, CameraMode } from './StateActions.js';

/** @returns {object} A fresh copy of the initial application state. */
export function createInitialState() {
  return {
    currentScale: 0,
    selectedObject: 'earth',
    targetObject: null,
    flightStatus: FlightStatus.IDLE,
    flightMode: FlightMode.MANUAL,
    cameraMode: CameraMode.THIRD_PERSON,
    flightTelemetry: {
      currentSpeedC: 0,
      lorentzFactor: 1,
      distanceRemainingKm: 0,
      totalDistanceKm: 0,
      timeDilationShipSec: 0,
      timeDilationEarthSec: 0,
      etaSeconds: 0,
      headingDeg: 0
    },
    history: [],
    ui: {
      isDetailPanelOpen: false,
      isHabitabilityOpen: false,
      isSatelliteListOpen: false,
      searchQuery: '',
      audioMuted: false,
      hudVisible: true
    },
    lastError: null
  };
}

/**
 * Pure reducer: computes the next state from the current state and an action.
 * Never mutates `state` or any of its nested objects.
 * @param {object} state
 * @param {{type: string, payload?: *}} action
 * @returns {object} next state
 */
export function reducer(state, action) {
  switch (action.type) {
    case ActionTypes.SET_SCALE:
      return { ...state, currentScale: action.payload };

    case ActionTypes.SELECT_OBJECT:
      return { ...state, selectedObject: action.payload };

    case ActionTypes.SET_TARGET:
      return {
        ...state,
        targetObject: action.payload,
        flightStatus: FlightStatus.SPOOLING
      };

    case ActionTypes.CLEAR_TARGET:
      return {
        ...state,
        targetObject: null,
        flightStatus: FlightStatus.IDLE,
        flightTelemetry: { ...state.flightTelemetry, currentSpeedC: 0, etaSeconds: 0 }
      };

    case ActionTypes.SET_FLIGHT_STATUS:
      return { ...state, flightStatus: action.payload };

    case ActionTypes.SET_FLIGHT_MODE:
      return { ...state, flightMode: action.payload };

    case ActionTypes.UPDATE_TELEMETRY:
      return { ...state, flightTelemetry: { ...state.flightTelemetry, ...action.payload } };

    case ActionTypes.SET_CAMERA_MODE:
      return { ...state, cameraMode: action.payload };

    case ActionTypes.SET_SEARCH_QUERY:
      return { ...state, ui: { ...state.ui, searchQuery: action.payload } };

    case ActionTypes.TOGGLE_DETAIL_PANEL:
      return {
        ...state,
        ui: {
          ...state.ui,
          isDetailPanelOpen: action.payload ?? !state.ui.isDetailPanelOpen
        }
      };

    case ActionTypes.TOGGLE_HABITABILITY:
      return {
        ...state,
        ui: {
          ...state.ui,
          isHabitabilityOpen: action.payload ?? !state.ui.isHabitabilityOpen
        }
      };

    case ActionTypes.TOGGLE_SATELLITE_LIST:
      return {
        ...state,
        ui: {
          ...state.ui,
          isSatelliteListOpen: action.payload ?? !state.ui.isSatelliteListOpen
        }
      };

    case ActionTypes.TOGGLE_AUDIO_MUTED:
      return { ...state, ui: { ...state.ui, audioMuted: action.payload ?? !state.ui.audioMuted } };

    case ActionTypes.TOGGLE_HUD:
      return { ...state, ui: { ...state.ui, hudVisible: action.payload ?? !state.ui.hudVisible } };

    case ActionTypes.PUSH_HISTORY:
      return { ...state, history: [...state.history, action.payload].slice(-50) };

    case ActionTypes.REPORT_ERROR:
      return { ...state, lastError: action.payload };

    case ActionTypes.CLEAR_ERROR:
      return { ...state, lastError: null };

    default:
      return state;
  }
}

export class Store {
  /** @param {object} [initialState] */
  constructor(initialState = createInitialState()) {
    /** @private */
    this._state = initialState;
    /** @private @type {Set<{selector: Function, cb: Function, lastValue: *}>} */
    this._subscribers = new Set();
  }

  /** @returns {object} current state (read-only by convention) */
  getState() {
    return this._state;
  }

  /**
   * @param {{type: string, payload?: *}} action
   * @returns {object} the resulting next state
   */
  dispatch(action) {
    if (!action || typeof action.type !== 'string') {
      throw new TypeError('dispatch() requires an action object with a string `type`');
    }
    const prevState = this._state;
    let nextState;
    try {
      nextState = reducer(prevState, action);
    } catch (err) {
      // A misbehaving reducer must not crash the whole app; surface it as
      // application state instead so the UI can show a friendly message.
      nextState = reducer(prevState, {
        type: ActionTypes.REPORT_ERROR,
        payload: err
      });
    }
    this._state = nextState;
    this._notify(nextState, prevState, action);
    return nextState;
  }

  /**
   * Subscribe to the whole store, or to a derived slice via `selector`.
   * The callback only fires when the selected value changes (by reference
   * or shallow value for primitives), so subscribers don't do wasted work.
   * @param {Function} cb - `(value, prevValue, action) => void`
   * @param {Function} [selector] - `(state) => value`, defaults to identity
   * @returns {Function} unsubscribe function
   */
  subscribe(cb, selector = (s) => s) {
    if (typeof cb !== 'function') throw new TypeError('subscribe() requires a callback function');
    const entry = { selector, cb, lastValue: selector(this._state) };
    this._subscribers.add(entry);
    return () => this._subscribers.delete(entry);
  }

  /** @private */
  _notify(nextState, prevState, action) {
    for (const entry of this._subscribers) {
      let nextValue;
      try {
        nextValue = entry.selector(nextState);
      } catch {
        continue;
      }
      if (!Object.is(nextValue, entry.lastValue)) {
        const prevValue = entry.lastValue;
        entry.lastValue = nextValue;
        try {
          entry.cb(nextValue, prevValue, action);
        } catch (err) {
          // One misbehaving subscriber must not prevent others from being notified.
          console.error('[Store] subscriber callback threw:', err);
        }
      }
    }
  }
}

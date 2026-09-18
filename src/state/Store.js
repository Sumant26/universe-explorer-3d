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

import { ActionTypes, FlightStatus, FlightMode, CameraMode, CabinTheme, HullLivery } from "./StateActions.js";

/** @returns {object} A fresh copy of the initial application state. */
export function createInitialState() {
  return {
    currentScale: 0,
    selectedObject: "earth",
    targetObject: null,
    flightStatus: FlightStatus.IDLE,
    flightMode: FlightMode.MANUAL,
    cameraMode: CameraMode.THIRD_PERSON,
    cabinTheme: CabinTheme.MAHOGANY,
    cabinLightLevel: 1.0,
    hullLivery: HullLivery.APOLLO_WHITE,
    timeWarp: 1,
    radioStationIndex: 0,
    activeExpedition: null,
    completedExpeditions: [],
    expeditionProgress: {},
    landerState: {
      active: false,
      targetId: null,
      soilAnalysis: null,
    },
    cassetteState: {
      currentTape: "pale-blue-dot",
      isPlaying: false,
    },
    customSatellites: [],
    activeCosmicEvent: null,
    discoveryPoints: 200,
    installedUpgrades: [],
    aiCompanion: {
      enabled: true,
      isSpeaking: false,
      lastMessage: "Holo-systems online. Ready to explore the stars, Captain!",
      mood: "calm",
    },
    setiScanner: {
      active: false,
      frequencyMhz: 1420.405,
      activeSignal: null,
    },
    wormholeState: {
      inTransit: false,
      destinationId: null,
    },
    sandboxState: {
      active: false,
      star: null,
      bodies: [],
    },
    flightTelemetry: {
      currentSpeedC: 0,
      lorentzFactor: 1,
      distanceRemainingKm: 0,
      totalDistanceKm: 0,
      timeDilationShipSec: 0,
      timeDilationEarthSec: 0,
      etaSeconds: 0,
      headingDeg: 0,
    },
    history: [],
    discoveries: [{ id: "earth", name: "Earth", kind: "planet", discoveredAt: Date.now(), category: "Home Planet" }],
    ui: {
      isDetailPanelOpen: false,
      isHabitabilityOpen: false,
      isSatelliteListOpen: false,
      isPhotoModeOpen: false,
      isLogbookOpen: false,
      isProbeBuilderOpen: false,
      isSetiOpen: false,
      isEngineeringOpen: false,
      isSandboxOpen: false,
      constellationsVisible: false,
      searchQuery: "",
      audioMuted: false,
      hudVisible: true,
    },
    lastError: null,
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
        flightStatus: FlightStatus.SPOOLING,
      };

    case ActionTypes.CLEAR_TARGET:
      return {
        ...state,
        targetObject: null,
        flightStatus: FlightStatus.IDLE,
        flightTelemetry: { ...state.flightTelemetry, currentSpeedC: 0, etaSeconds: 0 },
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
          isDetailPanelOpen: action.payload ?? !state.ui.isDetailPanelOpen,
        },
      };

    case ActionTypes.TOGGLE_HABITABILITY:
      return {
        ...state,
        ui: {
          ...state.ui,
          isHabitabilityOpen: action.payload ?? !state.ui.isHabitabilityOpen,
        },
      };

    case ActionTypes.TOGGLE_SATELLITE_LIST:
      return {
        ...state,
        ui: {
          ...state.ui,
          isSatelliteListOpen: action.payload ?? !state.ui.isSatelliteListOpen,
        },
      };

    case ActionTypes.TOGGLE_PHOTO_MODE:
      return {
        ...state,
        ui: {
          ...state.ui,
          isPhotoModeOpen: action.payload ?? !state.ui.isPhotoModeOpen,
        },
      };

    case ActionTypes.TOGGLE_LOGBOOK:
      return {
        ...state,
        ui: {
          ...state.ui,
          isLogbookOpen: action.payload ?? !state.ui.isLogbookOpen,
        },
      };

    case ActionTypes.TOGGLE_CONSTELLATIONS:
      return {
        ...state,
        ui: {
          ...state.ui,
          constellationsVisible: action.payload ?? !state.ui.constellationsVisible,
        },
      };

    case ActionTypes.RECORD_DISCOVERY: {
      const exists = state.discoveries.some((d) => d.id === action.payload.id);
      if (exists) return state;
      return {
        ...state,
        discoveryPoints: state.discoveryPoints + 50,
        discoveries: [...state.discoveries, { ...action.payload, discoveredAt: Date.now() }],
      };
    }

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

    case ActionTypes.SET_CABIN_THEME:
      return { ...state, cabinTheme: action.payload };

    case ActionTypes.SET_CABIN_LIGHT_LEVEL:
      return { ...state, cabinLightLevel: action.payload };

    case ActionTypes.SET_TIME_WARP:
      return { ...state, timeWarp: action.payload };

    case ActionTypes.SET_RADIO_STATION:
      return { ...state, radioStationIndex: action.payload };

    case ActionTypes.START_EXPEDITION:
      return {
        ...state,
        activeExpedition: { id: action.payload, currentStepIndex: 0, startedAt: Date.now() },
      };

    case ActionTypes.ADVANCE_EXPEDITION:
      if (!state.activeExpedition) return state;
      return {
        ...state,
        activeExpedition: {
          ...state.activeExpedition,
          currentStepIndex: state.activeExpedition.currentStepIndex + 1,
        },
      };

    case ActionTypes.CANCEL_EXPEDITION:
      return { ...state, activeExpedition: null };

    case ActionTypes.COMPLETE_EXPEDITION: {
      const { expeditionId, badge, completedAt } = action.payload;
      const alreadyCompleted = state.completedExpeditions.some((c) => c.expeditionId === expeditionId);
      return {
        ...state,
        activeExpedition: null,
        discoveryPoints: alreadyCompleted ? state.discoveryPoints : state.discoveryPoints + 150,
        completedExpeditions: alreadyCompleted
          ? state.completedExpeditions
          : [...state.completedExpeditions, { expeditionId, badge, completedAt }],
      };
    }

    case ActionTypes.VISIT_EXPEDITION_WAYPOINT: {
      const { expeditionId, targetId } = action.payload;
      const current = state.expeditionProgress[expeditionId] || { visited: [], completed: false };
      if (current.visited.includes(targetId)) return state;
      const visited = [...current.visited, targetId];
      return {
        ...state,
        expeditionProgress: {
          ...state.expeditionProgress,
          [expeditionId]: { visited, completed: visited.length >= 3 },
        },
      };
    }

    case ActionTypes.DEPLOY_LANDER:
      return {
        ...state,
        cameraMode: CameraMode.SURFACE,
        landerState: { active: true, targetId: action.payload, soilAnalysis: null },
      };

    case ActionTypes.CLOSE_LANDER:
      return {
        ...state,
        cameraMode: CameraMode.COCKPIT,
        landerState: { active: false, targetId: null, soilAnalysis: null },
      };

    case ActionTypes.SET_LANDER_SOIL_ANALYSIS:
      return {
        ...state,
        landerState: { ...state.landerState, soilAnalysis: action.payload },
      };

    case ActionTypes.SET_CASSETTE_TAPE:
      return {
        ...state,
        cassetteState: { ...state.cassetteState, currentTape: action.payload },
      };

    case ActionTypes.SET_CASSETTE_PLAYING:
      return {
        ...state,
        cassetteState: { ...state.cassetteState, isPlaying: action.payload },
      };

    case ActionTypes.ADD_CUSTOM_SATELLITE:
      return {
        ...state,
        customSatellites: [...state.customSatellites, action.payload],
      };

    case ActionTypes.REMOVE_CUSTOM_SATELLITE:
      return {
        ...state,
        customSatellites: state.customSatellites.filter((s) => s.id !== action.payload),
      };

    case ActionTypes.SET_HULL_LIVERY:
      return { ...state, hullLivery: action.payload };

    case ActionTypes.TRIGGER_COSMIC_EVENT:
      return { ...state, activeCosmicEvent: action.payload };

    case ActionTypes.DISMISS_COSMIC_EVENT:
      return { ...state, activeCosmicEvent: null };

    case ActionTypes.TOGGLE_PROBE_BUILDER:
      return {
        ...state,
        ui: {
          ...state.ui,
          isProbeBuilderOpen: action.payload ?? !state.ui.isProbeBuilderOpen,
        },
      };

    case ActionTypes.TOGGLE_SETI_SCANNER:
      return {
        ...state,
        ui: {
          ...state.ui,
          isSetiOpen: action.payload ?? !state.ui.isSetiOpen,
        },
      };

    case ActionTypes.SET_SETI_FREQUENCY:
      return {
        ...state,
        setiScanner: { ...state.setiScanner, frequencyMhz: action.payload },
      };

    case ActionTypes.INTERCEPT_SETI_SIGNAL:
      return {
        ...state,
        setiScanner: { ...state.setiScanner, activeSignal: action.payload },
      };

    case ActionTypes.TOGGLE_AI_COMPANION:
      return {
        ...state,
        aiCompanion: {
          ...state.aiCompanion,
          enabled: action.payload ?? !state.aiCompanion.enabled,
        },
      };

    case ActionTypes.TRIGGER_AI_SPEECH:
      return {
        ...state,
        aiCompanion: {
          ...state.aiCompanion,
          lastMessage: action.payload.message,
          mood: action.payload.mood || "neutral",
        },
      };

    case ActionTypes.SET_AI_SPEAKING:
      return {
        ...state,
        aiCompanion: {
          ...state.aiCompanion,
          isSpeaking: action.payload,
        },
      };

    case ActionTypes.TOGGLE_ENGINEERING_BAY:
      return {
        ...state,
        ui: {
          ...state.ui,
          isEngineeringOpen: action.payload ?? !state.ui.isEngineeringOpen,
        },
      };

    case ActionTypes.UNLOCK_SHIP_UPGRADE: {
      const { upgradeId, cost } = action.payload;
      if (state.installedUpgrades.includes(upgradeId) || state.discoveryPoints < cost) {
        return state;
      }
      return {
        ...state,
        discoveryPoints: state.discoveryPoints - cost,
        installedUpgrades: [...state.installedUpgrades, upgradeId],
      };
    }

    case ActionTypes.ADD_DISCOVERY_POINTS:
      return {
        ...state,
        discoveryPoints: state.discoveryPoints + action.payload,
      };

    case ActionTypes.ENTER_WORMHOLE:
      return {
        ...state,
        wormholeState: { inTransit: true, destinationId: action.payload },
      };

    case ActionTypes.EXIT_WORMHOLE:
      return {
        ...state,
        wormholeState: { inTransit: false, destinationId: null },
      };

    case ActionTypes.TOGGLE_SANDBOX_MODE:
      return {
        ...state,
        ui: {
          ...state.ui,
          isSandboxOpen: action.payload ?? !state.ui.isSandboxOpen,
        },
        sandboxState: {
          ...state.sandboxState,
          active: action.payload ?? !state.sandboxState.active,
        },
      };

    case ActionTypes.ADD_SANDBOX_BODY:
      return {
        ...state,
        sandboxState: {
          ...state.sandboxState,
          bodies: [...state.sandboxState.bodies, action.payload],
        },
      };

    case ActionTypes.CLEAR_SANDBOX:
      return {
        ...state,
        sandboxState: { active: false, star: null, bodies: [] },
      };

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
    if (!action || typeof action.type !== "string") {
      throw new TypeError("dispatch() requires an action object with a string `type`");
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
        payload: err,
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
   * @param {Function|string} arg1 - `(value, prevValue, action) => void` or property key
   * @param {Function} [arg2] - `(state) => value`, defaults to identity
   * @returns {Function} unsubscribe function
   */
  subscribe(arg1, arg2 = (s) => s) {
    if (!arg1 || (typeof arg1 !== "function" && typeof arg1 !== "string")) {
      throw new TypeError("subscribe() requires a callback function");
    }

    let cb;
    let selector;

    if (typeof arg1 === "string") {
      if (typeof arg2 !== "function") {
        throw new TypeError("subscribe() requires a callback function");
      }
      selector = (s) => s[arg1];
      cb = arg2;
    } else {
      cb = arg1;
      selector = typeof arg2 === "function" ? arg2 : (s) => s;
    }

    let initialValue;
    try {
      initialValue = selector(this._state);
    } catch {
      initialValue = undefined;
    }

    const entry = { selector, cb, lastValue: initialValue };
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
          console.error("[Store] subscriber callback threw:", err);
        }
      }
    }
  }
}

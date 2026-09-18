/**
 * @file StateActions.js
 * Typed action constants and pure action-creator helpers for the Store.
 * Keeping actions as plain `{ type, payload }` objects (rather than
 * dispatching raw field updates) makes every state transition traceable
 * and testable in isolation from the rendering/UI layers.
 */

/** @enum {string} */
export const ActionTypes = Object.freeze({
  SET_SCALE: "SET_SCALE",
  SELECT_OBJECT: "SELECT_OBJECT",
  SET_TARGET: "SET_TARGET",
  CLEAR_TARGET: "CLEAR_TARGET",
  SET_FLIGHT_STATUS: "SET_FLIGHT_STATUS",
  SET_FLIGHT_MODE: "SET_FLIGHT_MODE",
  UPDATE_TELEMETRY: "UPDATE_TELEMETRY",
  SET_CAMERA_MODE: "SET_CAMERA_MODE",
  SET_SEARCH_QUERY: "SET_SEARCH_QUERY",
  TOGGLE_DETAIL_PANEL: "TOGGLE_DETAIL_PANEL",
  TOGGLE_HABITABILITY: "TOGGLE_HABITABILITY",
  TOGGLE_SATELLITE_LIST: "TOGGLE_SATELLITE_LIST",
  TOGGLE_AUDIO_MUTED: "TOGGLE_AUDIO_MUTED",
  TOGGLE_HUD: "TOGGLE_HUD",
  TOGGLE_PHOTO_MODE: "TOGGLE_PHOTO_MODE",
  TOGGLE_LOGBOOK: "TOGGLE_LOGBOOK",
  TOGGLE_CONSTELLATIONS: "TOGGLE_CONSTELLATIONS",
  RECORD_DISCOVERY: "RECORD_DISCOVERY",
  PUSH_HISTORY: "PUSH_HISTORY",
  REPORT_ERROR: "REPORT_ERROR",
  CLEAR_ERROR: "CLEAR_ERROR",
  SET_CABIN_THEME: "SET_CABIN_THEME",
  SET_CABIN_LIGHT_LEVEL: "SET_CABIN_LIGHT_LEVEL",
  SET_TIME_WARP: "SET_TIME_WARP",
  SET_RADIO_STATION: "SET_RADIO_STATION",
  START_EXPEDITION: "START_EXPEDITION",
  ADVANCE_EXPEDITION: "ADVANCE_EXPEDITION",
  CANCEL_EXPEDITION: "CANCEL_EXPEDITION",
  COMPLETE_EXPEDITION: "COMPLETE_EXPEDITION",
});

/** Flight status values. @enum {string} */
export const FlightStatus = Object.freeze({
  IDLE: "IDLE",
  SPOOLING: "SPOOLING",
  WARP: "WARP",
  MANUAL_CRUISE: "MANUAL_CRUISE",
  DECELERATING: "DECELERATING",
  ARRIVED: "ARRIVED",
});

/** Flight mode values: autopilot warp vs. hand-flown with a guidance arrow. @enum {string} */
export const FlightMode = Object.freeze({
  AUTOPILOT: "AUTOPILOT",
  MANUAL: "MANUAL",
});

/** Camera / view mode values. @enum {string} */
export const CameraMode = Object.freeze({
  COCKPIT: "COCKPIT",
  THIRD_PERSON: "THIRD_PERSON",
  CINEMATIC: "CINEMATIC",
  PHOTO: "PHOTO",
});

/** Cabin interior styling themes. @enum {string} */
export const CabinTheme = Object.freeze({
  MAHOGANY: "MAHOGANY",
  APOLLO: "APOLLO",
  CYBERPUNK: "CYBERPUNK",
});

function assertString(value, name) {
  if (typeof value !== "string" || value.length === 0) {
    throw new TypeError(`${name} must be a non-empty string`);
  }
}

export const Actions = {
  setScale: (scale) => ({ type: ActionTypes.SET_SCALE, payload: scale }),
  selectObject: (id) => ({ type: ActionTypes.SELECT_OBJECT, payload: id }),
  setTarget: (id) => {
    assertString(id, "target id");
    return { type: ActionTypes.SET_TARGET, payload: id };
  },
  clearTarget: () => ({ type: ActionTypes.CLEAR_TARGET }),
  setFlightStatus: (status) => {
    if (!Object.values(FlightStatus).includes(status)) {
      throw new RangeError(`Unknown flight status: ${status}`);
    }
    return { type: ActionTypes.SET_FLIGHT_STATUS, payload: status };
  },
  setFlightMode: (mode) => {
    if (!Object.values(FlightMode).includes(mode)) {
      throw new RangeError(`Unknown flight mode: ${mode}`);
    }
    return { type: ActionTypes.SET_FLIGHT_MODE, payload: mode };
  },
  updateTelemetry: (partialTelemetry) => ({
    type: ActionTypes.UPDATE_TELEMETRY,
    payload: partialTelemetry,
  }),
  setCameraMode: (mode) => {
    if (!Object.values(CameraMode).includes(mode)) {
      throw new RangeError(`Unknown camera mode: ${mode}`);
    }
    return { type: ActionTypes.SET_CAMERA_MODE, payload: mode };
  },
  setSearchQuery: (query) => ({ type: ActionTypes.SET_SEARCH_QUERY, payload: query ?? "" }),
  toggleDetailPanel: (force) => ({ type: ActionTypes.TOGGLE_DETAIL_PANEL, payload: force }),
  toggleHabitability: (force) => ({ type: ActionTypes.TOGGLE_HABITABILITY, payload: force }),
  toggleSatelliteList: (force) => ({ type: ActionTypes.TOGGLE_SATELLITE_LIST, payload: force }),
  toggleAudioMuted: (force) => ({ type: ActionTypes.TOGGLE_AUDIO_MUTED, payload: force }),
  toggleHud: (force) => ({ type: ActionTypes.TOGGLE_HUD, payload: force }),
  togglePhotoMode: (force) => ({ type: ActionTypes.TOGGLE_PHOTO_MODE, payload: force }),
  toggleLogbook: (force) => ({ type: ActionTypes.TOGGLE_LOGBOOK, payload: force }),
  toggleConstellations: (force) => ({ type: ActionTypes.TOGGLE_CONSTELLATIONS, payload: force }),
  recordDiscovery: (discovery) => ({ type: ActionTypes.RECORD_DISCOVERY, payload: discovery }),
  pushHistory: (entry) => ({ type: ActionTypes.PUSH_HISTORY, payload: entry }),
  reportError: (error) => ({
    type: ActionTypes.REPORT_ERROR,
    payload: { message: error?.message ?? String(error), at: Date.now() },
  }),
  clearError: () => ({ type: ActionTypes.CLEAR_ERROR }),
  setCabinTheme: (theme) => {
    if (!Object.values(CabinTheme).includes(theme)) {
      throw new RangeError(`Unknown cabin theme: ${theme}`);
    }
    return { type: ActionTypes.SET_CABIN_THEME, payload: theme };
  },
  setCabinLightLevel: (level) => ({
    type: ActionTypes.SET_CABIN_LIGHT_LEVEL,
    payload: Math.min(Math.max(Number(level) || 0, 0), 1),
  }),
  setTimeWarp: (factor) => ({
    type: ActionTypes.SET_TIME_WARP,
    payload: Math.max(1, Number(factor) || 1),
  }),
  setRadioStation: (stationIndex) => ({
    type: ActionTypes.SET_RADIO_STATION,
    payload: Number(stationIndex) || 0,
  }),
  startExpedition: (expeditionId) => {
    assertString(expeditionId, "expedition id");
    return { type: ActionTypes.START_EXPEDITION, payload: expeditionId };
  },
  advanceExpedition: () => ({ type: ActionTypes.ADVANCE_EXPEDITION }),
  cancelExpedition: () => ({ type: ActionTypes.CANCEL_EXPEDITION }),
  completeExpedition: (expeditionId, badge) => ({
    type: ActionTypes.COMPLETE_EXPEDITION,
    payload: { expeditionId, badge, completedAt: Date.now() },
  }),
};

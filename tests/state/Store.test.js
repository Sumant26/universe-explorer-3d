import { describe, it, expect, vi } from "vitest";
import { Store, createInitialState, reducer } from "../../src/state/Store.js";
import { Actions, FlightStatus, FlightMode, CameraMode } from "../../src/state/StateActions.js";

describe("Store / reducer", () => {
  it("createInitialState returns the documented default shape", () => {
    const state = createInitialState();
    expect(state.selectedObject).toBe("earth");
    expect(state.flightStatus).toBe(FlightStatus.IDLE);
    expect(state.flightMode).toBe(FlightMode.MANUAL);
    expect(state.cameraMode).toBe(CameraMode.THIRD_PERSON);
  });

  it("reducer never mutates the previous state object", () => {
    const state = createInitialState();
    const frozen = Object.freeze(state);
    expect(() => reducer(frozen, Actions.setScale(2))).not.toThrow();
  });

  it("SET_TARGET sets targetObject and flightStatus to SPOOLING", () => {
    const state = reducer(createInitialState(), Actions.setTarget("mars"));
    expect(state.targetObject).toBe("mars");
    expect(state.flightStatus).toBe(FlightStatus.SPOOLING);
  });

  it("setTarget rejects a non-string id", () => {
    expect(() => Actions.setTarget("")).toThrow();
    expect(() => Actions.setTarget(null)).toThrow();
  });

  it("CLEAR_TARGET resets target and flight status", () => {
    let state = reducer(createInitialState(), Actions.setTarget("mars"));
    state = reducer(state, Actions.clearTarget());
    expect(state.targetObject).toBeNull();
    expect(state.flightStatus).toBe(FlightStatus.IDLE);
  });

  it("UPDATE_TELEMETRY merges partial telemetry without clobbering other fields", () => {
    const state = reducer(createInitialState(), Actions.updateTelemetry({ currentSpeedC: 0.5 }));
    expect(state.flightTelemetry.currentSpeedC).toBe(0.5);
    expect(state.flightTelemetry.lorentzFactor).toBe(1); // unchanged default
  });

  it("setFlightMode/setCameraMode/setFlightStatus reject unknown enum values", () => {
    expect(() => Actions.setFlightMode("SIDEWAYS")).toThrow();
    expect(() => Actions.setCameraMode("UPSIDE_DOWN")).toThrow();
    expect(() => Actions.setFlightStatus("LOST")).toThrow();
  });

  it("toggle actions flip current value when no explicit force is passed", () => {
    let state = createInitialState();
    state = reducer(state, Actions.toggleDetailPanel());
    expect(state.ui.isDetailPanelOpen).toBe(true);
    state = reducer(state, Actions.toggleDetailPanel());
    expect(state.ui.isDetailPanelOpen).toBe(false);
  });

  it("toggle actions respect an explicit force value", () => {
    let state = createInitialState();
    state = reducer(state, Actions.toggleHud(false));
    expect(state.ui.hudVisible).toBe(false);
    state = reducer(state, Actions.toggleHud(false));
    expect(state.ui.hudVisible).toBe(false);
  });

  it("PUSH_HISTORY caps history at 50 entries", () => {
    let state = createInitialState();
    for (let i = 0; i < 60; i++) {
      state = reducer(state, Actions.pushHistory({ id: `body-${i}` }));
    }
    expect(state.history).toHaveLength(50);
    expect(state.history[state.history.length - 1].id).toBe("body-59");
  });

  it("unknown action types return the same state reference (no-op)", () => {
    const state = createInitialState();
    const next = reducer(state, { type: "NOT_A_REAL_ACTION" });
    expect(next).toBe(state);
  });

  it("dispatch() throws for a malformed action", () => {
    const store = new Store();
    expect(() => store.dispatch(null)).toThrow();
    expect(() => store.dispatch({})).toThrow();
  });

  it("all Actions helper functions produce action objects with a valid string type", () => {
    const store = new Store();
    const actionList = [
      Actions.setScale(1),
      Actions.selectObject("mars"),
      Actions.setTarget("mars"),
      Actions.clearTarget(),
      Actions.setFlightStatus(FlightStatus.WARP),
      Actions.setFlightMode(FlightMode.AUTOPILOT),
      Actions.updateTelemetry({ currentSpeedC: 0.1 }),
      Actions.setCameraMode(CameraMode.COCKPIT),
      Actions.setSearchQuery("jupiter"),
      Actions.toggleDetailPanel(true),
      Actions.toggleHabitability(true),
      Actions.toggleSatelliteList(true),
      Actions.toggleAudioMuted(true),
      Actions.toggleHud(false),
      Actions.togglePhotoMode(true),
      Actions.toggleLogbook(true),
      Actions.toggleConstellations(true),
      Actions.recordDiscovery({ id: "mars", name: "Mars" }),
      Actions.pushHistory({ id: "mars" }),
      Actions.reportError(new Error("test")),
      Actions.clearError(),
    ];

    for (const action of actionList) {
      expect(action).toHaveProperty("type");
      expect(typeof action.type).toBe("string");
      expect(action.type.length).toBeGreaterThan(0);
      expect(() => store.dispatch(action)).not.toThrow();
    }
  });

  it("dispatch() survives a throwing reducer path by recording an error instead of crashing", () => {
    const store = new Store();
    expect(() => store.dispatch({ type: "SET_SCALE", payload: {} })).not.toThrow();
  });
});

describe("Store subscriptions", () => {
  it("subscribe() fires only when the selected slice changes", () => {
    const store = new Store();
    const cb = vi.fn();
    store.subscribe(cb, (s) => s.selectedObject);

    store.dispatch(Actions.setScale(3)); // unrelated field, should NOT fire
    expect(cb).not.toHaveBeenCalled();

    store.dispatch(Actions.selectObject("mars"));
    expect(cb).toHaveBeenCalledTimes(1);
    expect(cb).toHaveBeenCalledWith("mars", "earth", expect.any(Object));
  });

  it("unsubscribe stops further notifications", () => {
    const store = new Store();
    const cb = vi.fn();
    const unsubscribe = store.subscribe(cb, (s) => s.selectedObject);
    unsubscribe();
    store.dispatch(Actions.selectObject("venus"));
    expect(cb).not.toHaveBeenCalled();
  });

  it("a throwing selector does not break other subscribers", () => {
    const store = new Store();
    const good = vi.fn();
    store.subscribe(
      () => {
        throw new Error("boom");
      },
      (s) => s.selectedObject
    );
    store.subscribe(good, (s) => s.selectedObject);

    expect(() => store.dispatch(Actions.selectObject("jupiter"))).not.toThrow();
    expect(good).toHaveBeenCalled();
  });

  it("subscribe() requires a function callback", () => {
    const store = new Store();
    expect(() => store.subscribe(null)).toThrow();
  });
});

import { describe, it, expect, vi, beforeEach } from "vitest";
import { HoloCompanion, CELESTIAL_LORE_CUES } from "../../src/spaceship/HoloCompanion.js";
import { Store } from "../../src/state/Store.js";

describe("HoloCompanion", () => {
  let store;
  let companion;

  beforeEach(() => {
    store = new Store();
    companion = new HoloCompanion(store);
  });

  it("initializes with default speech state and lore database", () => {
    expect(companion.group).toBeDefined();
    expect(companion.isSpeaking).toBe(false);
    expect(CELESTIAL_LORE_CUES["mars"]).toBeDefined();
    expect(CELESTIAL_LORE_CUES["jupiter"]).toBeDefined();
  });

  it("triggers speech and dispatches actions to store", () => {
    const dispatchSpy = vi.spyOn(store, "dispatch");
    companion.speak("Approaching the Red Planet.", "curious");

    expect(dispatchSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        type: "TRIGGER_AI_SPEECH",
        payload: expect.objectContaining({
          message: "Approaching the Red Planet.",
          mood: "curious",
        }),
      })
    );
  });

  it("provides contextual lore for celestial targets", () => {
    const dispatchSpy = vi.spyOn(store, "dispatch");
    companion.announceBody("europa");

    expect(dispatchSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        type: "TRIGGER_AI_SPEECH",
        payload: expect.objectContaining({
          message: expect.stringContaining("saltwater ocean"),
        }),
      })
    );
  });

  it("warns about high G forces and reentry heat", () => {
    const dispatchSpy = vi.spyOn(store, "dispatch");
    companion.warnReentry();
    expect(dispatchSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        type: "TRIGGER_AI_SPEECH",
        payload: expect.objectContaining({ mood: "alert" }),
      })
    );

    companion.warnHighG();
    expect(dispatchSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        type: "TRIGGER_AI_SPEECH",
        payload: expect.objectContaining({ mood: "warning" }),
      })
    );
  });

  it("updates animation rings on tick without error", () => {
    expect(() => companion.tick(0.016, 1.0)).not.toThrow();
  });
});

import { describe, it, expect } from "vitest";
import { SpaceRadio, RADIO_STATIONS } from "../../src/audio/SpaceRadio.js";

describe("SpaceRadio", () => {
  it("initializes with first station and powered off", () => {
    const radio = new SpaceRadio();
    expect(radio.isPlaying).toBe(false);
    expect(radio.currentStationIndex).toBe(0);
    expect(radio.getCurrentStation().id).toBe("lofi-cabin");
  });

  it("tunes between available stations", () => {
    const radio = new SpaceRadio();
    radio.tuneNext();
    expect(radio.getCurrentStation().id).toBe(RADIO_STATIONS[1].id);

    radio.tuneNext();
    expect(radio.getCurrentStation().id).toBe(RADIO_STATIONS[2].id);

    // Wraps around
    radio.tuneNext();
    expect(radio.getCurrentStation().id).toBe(RADIO_STATIONS[0].id);

    radio.tunePrev();
    expect(radio.getCurrentStation().id).toBe(RADIO_STATIONS[RADIO_STATIONS.length - 1].id);
  });

  it("updates volume within safe range", () => {
    const radio = new SpaceRadio();
    radio.setVolume(1.5);
    expect(radio.volume).toBe(1.0);

    radio.setVolume(-0.5);
    expect(radio.volume).toBe(0.0);
  });
});

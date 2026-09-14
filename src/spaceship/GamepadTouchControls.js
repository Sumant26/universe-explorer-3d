/**
 * @file GamepadTouchControls.js
 * Comprehensive gamepad controller (HTML5 Gamepad API) and mobile touch virtual joysticks
 * for 6DOF manual spaceship flight.
 */

export class GamepadTouchControls {
  /**
   * @param {{
   *   onToggleCamera?: () => void,
   *   onToggleHyperdrive?: () => void
   * }} options
   */
  constructor(options = {}) {
    this.onToggleCamera = options.onToggleCamera;
    this.onToggleHyperdrive = options.onToggleHyperdrive;

    this.touchInput = {
      thrust: 0,
      strafe: 0,
      pitch: 0,
      yaw: 0,
      boost: false,
    };

    this._gamepadConnected = false;
    this._prevButtons = {};

    this._initGamepadListeners();
    this._initTouchUI();
  }

  _initGamepadListeners() {
    window.addEventListener("gamepadconnected", () => {
      this._gamepadConnected = true;
    });
    window.addEventListener("gamepaddisconnected", () => {
      this._gamepadConnected = false;
    });
  }

  _initTouchUI() {
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (!isTouchDevice) return;

    const touchRoot = document.createElement("div");
    touchRoot.id = "mobile-flight-controls";
    touchRoot.className = "mobile-controls-layer";
    touchRoot.innerHTML = `
      <div class="touch-stick-zone left" id="touch-stick-left">
        <div class="touch-stick-base">
          <div class="touch-stick-knob" id="knob-left"></div>
        </div>
        <span class="stick-label">Steer (Pitch / Yaw)</span>
      </div>

      <div class="touch-actions-center">
        <button type="button" class="touch-action-btn" id="btn-touch-boost">⚡ Boost</button>
        <button type="button" class="touch-action-btn" id="btn-touch-cam">🎥 Cam</button>
      </div>

      <div class="touch-stick-zone right" id="touch-stick-right">
        <div class="touch-stick-base">
          <div class="touch-stick-knob" id="knob-right"></div>
        </div>
        <span class="stick-label">Thrust (Fwd / Back)</span>
      </div>
    `;
    document.body.appendChild(touchRoot);

    this._bindTouchStick(
      touchRoot.querySelector("#touch-stick-left"),
      touchRoot.querySelector("#knob-left"),
      (nx, ny) => {
        this.touchInput.yaw = nx;
        this.touchInput.pitch = -ny;
      }
    );

    this._bindTouchStick(
      touchRoot.querySelector("#touch-stick-right"),
      touchRoot.querySelector("#knob-right"),
      (nx, ny) => {
        this.touchInput.strafe = nx;
        this.touchInput.thrust = -ny;
      }
    );

    const boostBtn = touchRoot.querySelector("#btn-touch-boost");
    boostBtn?.addEventListener("touchstart", (e) => {
      e.preventDefault();
      this.touchInput.boost = true;
      boostBtn.classList.add("active");
    });
    boostBtn?.addEventListener("touchend", (e) => {
      e.preventDefault();
      this.touchInput.boost = false;
      boostBtn.classList.remove("active");
    });

    const camBtn = touchRoot.querySelector("#btn-touch-cam");
    camBtn?.addEventListener("touchstart", (e) => {
      e.preventDefault();
      this.onToggleCamera?.();
    });
  }

  _bindTouchStick(zone, knob, onMove) {
    if (!zone || !knob) return;

    let touchId = null;
    let startX = 0;
    let startY = 0;
    const maxRadius = 45;

    zone.addEventListener("touchstart", (e) => {
      if (touchId !== null) return;
      const touch = e.changedTouches[0];
      touchId = touch.identifier;
      const rect = zone.getBoundingClientRect();
      startX = rect.left + rect.width / 2;
      startY = rect.top + rect.height / 2;
    });

    const handleMove = (e) => {
      for (let i = 0; i < e.changedTouches.length; i++) {
        const touch = e.changedTouches[i];
        if (touch.identifier === touchId) {
          const dx = touch.clientX - startX;
          const dy = touch.clientY - startY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const clampedDist = Math.min(dist, maxRadius);
          const angle = Math.atan2(dy, dx);

          const knobX = Math.cos(angle) * clampedDist;
          const knobY = Math.sin(angle) * clampedDist;

          knob.style.transform = `translate(${knobX}px, ${knobY}px)`;
          onMove(knobX / maxRadius, knobY / maxRadius);
        }
      }
    };

    const handleEnd = (e) => {
      for (let i = 0; i < e.changedTouches.length; i++) {
        if (e.changedTouches[i].identifier === touchId) {
          touchId = null;
          knob.style.transform = "translate(0px, 0px)";
          onMove(0, 0);
        }
      }
    };

    window.addEventListener("touchmove", handleMove, { passive: true });
    window.addEventListener("touchend", handleEnd, { passive: true });
    window.addEventListener("touchcancel", handleEnd, { passive: true });
  }

  /**
   * Polls input from connected Gamepad API devices or touch sticks.
   * @returns {{ thrust: number, strafe: number, pitch: number, yaw: number, boost: boolean }}
   */
  poll() {
    const input = {
      thrust: this.touchInput.thrust,
      strafe: this.touchInput.strafe,
      pitch: this.touchInput.pitch,
      yaw: this.touchInput.yaw,
      boost: this.touchInput.boost,
    };

    const gamepads = navigator.getGamepads ? navigator.getGamepads() : [];
    const pad = gamepads[0]; // Primary controller

    if (pad && pad.connected) {
      const deadzone = 0.12;
      const applyDeadzone = (v) => (Math.abs(v) < deadzone ? 0 : v);

      // Left analog stick: Pitch & Yaw
      const stickYaw = applyDeadzone(pad.axes[0] ?? 0);
      const stickPitch = applyDeadzone(pad.axes[1] ?? 0);

      // Right analog stick: Strafe & Thrust
      const stickStrafe = applyDeadzone(pad.axes[2] ?? 0);
      const stickThrust = applyDeadzone(pad.axes[3] ?? 0);

      if (stickYaw !== 0) input.yaw = stickYaw;
      if (stickPitch !== 0) input.pitch = -stickPitch;
      if (stickStrafe !== 0) input.strafe = stickStrafe;
      if (stickThrust !== 0) input.thrust = -stickThrust;

      // Triggers & buttons
      const btnA = pad.buttons[0]?.pressed; // Thrust / Boost
      const btnB = pad.buttons[1]?.pressed; // Brake
      const btnY = pad.buttons[3]?.pressed; // Cycle Camera
      const rightTrigger = pad.buttons[7]?.pressed; // Boost

      if (btnA || rightTrigger) input.boost = true;
      if (btnB) input.thrust = -1.0;

      // Single press edge detection for camera cycle
      if (btnY && !this._prevButtons.btnY) {
        this.onToggleCamera?.();
      }
      this._prevButtons.btnY = btnY;
    }

    return input;
  }
}

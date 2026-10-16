# SignalRGB Tuya Canvas Lamps

This is a personal SignalRGB network add-on for two locally controlled Tuya bulbs.

It exposes two one-pixel canvas devices:

- Sebs lamp
- Sebs bedside lamp

The add-on sends colours to a local UDP bridge. The bridge, `tuya_canvas_bridge.py`, stays on the PC and reads private Tuya device keys from the local `config.json`; no credentials are stored in this repository.

## Use

1. Install this repository in SignalRGB through **Settings > Add-ons > Add-on**.
2. Start the local **SignalRGB Tuya Canvas Bridge** launcher.
3. Open SignalRGB's layout / canvas and drag the two lamps independently.

## Notes

This is intentionally a machine-specific experiment, not an official Tuya or SignalRGB integration.

import udp from "@SignalRGB/udp";

export function Name() { return "Tuya Canvas Lamps"; }
export function Version() { return "0.1.0"; }
export function Type() { return "network"; }
export function Publisher() { return "Ethan (local TinyTuya bridge)"; }
export function Size() { return [1, 1]; }
export function DefaultPosition() { return [0, 0]; }
export function DefaultScale() { return 8.0; }
export function LedNames() { return ["Lamp"]; }
export function LedPositions() { return [[0, 0]]; }

let socket;

export function Initialize() {
    device.setName(controller.name);
    socket = udp.createSocket();
    socket.connect("127.0.0.1", 29845);
    device.log(`Tuya canvas device ready: ${controller.name}`);
}

export function Render() {
    const colour = device.color(0, 0);
    socket.send([controller.lampIndex, colour[0], colour[1], colour[2]]);
}

export function Shutdown() {
    if (socket) socket.close();
}

export function DiscoveryService() {
    const lamps = [
        { id: "tuya-canvas-sebs-lamp", name: "Sebs lamp", lampIndex: 0 },
        { id: "tuya-canvas-bedside-lamp", name: "Sebs bedside lamp", lampIndex: 1 },
    ];

    this.Initialize = function() {
        for (const lamp of lamps) {
            let existing = service.getController(lamp.id);
            if (existing === undefined) {
                existing = new TuyaCanvasController(lamp);
                service.addController(existing);
            }
            service.announceController(existing);
        }
        service.log("Two Tuya Canvas lamps announced.");
    };

    this.Update = function() {};
}

class TuyaCanvasController {
    constructor(lamp) {
        this.id = lamp.id;
        this.name = lamp.name;
        this.lampIndex = lamp.lampIndex;
        this.ip = "127.0.0.1";
        this.connected = true;
        this.offline = false;
    }
}

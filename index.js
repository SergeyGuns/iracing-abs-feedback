const { IRacingSDK } = require("irsdk-node");
const { TELEMETRY } = require("./telemetry.constants");
const { SerialPort } = require('serialport');
const TIMEOUT = Math.floor((1 / 60) * 1000); // 60fps

const portName = await findComPortsByName('Arduino')
const port = new SerialPort({ path: portName, baudRate: 9600 });
function sendABSValue(value) {
    const buffer = Buffer.from([value]);
    port.write(buffer);
}

port.on('error', function (err) {
    console.error('Error:', err.message);
});
function loop() {
    if (sdk.waitForData(TIMEOUT)) {
        const session = sdk.getSessionData();
        const telemetry = sdk.getTelemetry();
        console.log(telemetry[TELEMETRY.BrakeABSactive])
        sendABSValue(telemetry[TELEMETRY.BrakeABSactive])
        loop(sdk);
    } else {   
        // Disconnected.
    }
}



if (await IRacingSDK.IsSimRunning()) {
    const sdk = new IRacingSDK();
    if (await sdk.ready()) {
        sdk.autoEnableTelemetry = true;
        loop(sdk);
    }
}

async function findComPortsByName(namePattern) {
    const ports = await SerialPort.list();
    return ports.filter(port => port.manufacturer && port.manufacturer.includes(namePattern));
}

findComPortsByName('Arduino')
    .then((ports) => {
        console.log(`Найдено ${ports.length} портов:`);
        return ports.forEach((port) => {
            console.log(`${port.comName}: ${port.manufacturer}`);
        });
    })
    .catch((err) => {
        console.error('Ошибка при поиске портов:', err);
    });

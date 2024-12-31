const { IRacingSDK } = require("irsdk-node");
const { TELEMETRY } = require("./telemetry.constants");
const { SerialPort } = require('serialport');
const {communicateWithDevices} = require('./find-device')
const TIMEOUT = Math.floor(100); // 60fps
const irsdk = require('iracing-sdk-js')
let sdk;
let lastSendMessage=null
async function init () {
    const portName = await communicateWithDevices()
    const port = new SerialPort({ path: portName, baudRate: 2000000 });
    port.on('message', (data)=>{
        console.log(data)
    })
    function sendABSValue(value) {
        const message = value ? 'A\n' : 'B\n'
        if(lastSendMessage !== message) {
            console.log(message)
            port.write(message);
            lastSendMessage = message;
        }
    }
    
    if (await IRacingSDK.IsSimRunning()) {
        sdk = irsdk.init({telemetryUpdateInterval: 60})
        sdk.on('Telemetry', function (evt) {
            console.log(evt.values[TELEMETRY.BrakeABSactive])
            sendABSValue(Boolean(evt.values[TELEMETRY.BrakeABSactive]))
          })
    }
   
}

init();



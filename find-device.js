const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');

const MESSAGE_TO_SEND = 'C\n';
const MESSAGE_RESPONSE = 'im pedal';

async function findPorts() {
  const ports = await SerialPort.list();
  return ports.map(port => port.path);
}

async function communicateWithDevices() {
  debugger;
  try {
    const comPorts = await findPorts();
    let result = null;
    for (let i = 0; i < comPorts.length; i++) {
      try {
        const portPath = comPorts[i];

        console.log(`Checking ${portPath}`);

        const port = new SerialPort({
          path: portPath,
          baudRate: 2000000, 
        }, e => console.log(e));

        const parser = port.pipe(new ReadlineParser({ delimiter: '\n' }));

        parser.on('data', data => {
          console.log(data)
          if (data.includes(MESSAGE_RESPONSE)) {
            result = portPath
            console.log(`${portPath}: Received expected response`);
          }
        });

        port.write(MESSAGE_TO_SEND);
        
        await new Promise(resolve => setTimeout(resolve, 1000));
        port.write('A\n');
        await new Promise(resolve => setTimeout(resolve, 1000));
        port.write('B\n');
        // Закрываем порт после завершения операции
        await new Promise(resolve => setTimeout(resolve, 1000));
        port.close(console.log);
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch {
        console.log(e)
      }
    }
    return result;
  } catch (error) {
    console.error(error);
  }
}
module.exports = { communicateWithDevices }
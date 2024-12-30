const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');

// Сообщение, которое будем отправлять устройствам
const MESSAGE_TO_SEND = 'are u pedal?';
const MESSAGE_RESPONSE = 'im pedal';

// Функция для поиска всех доступных COM-портов
async function findPorts() {
  const ports = await SerialPort.list();
  return ports.map(port => port.path);
}

// Основная функция для отправки сообщений и ожидания ответов
async function communicateWithDevices() {
  try {
    // Получаем список доступных COM-портов
    const comPorts = await findPorts();
    let result = null;
    for (let i = 0; i < comPorts.length; i++) {
      const portPath = comPorts[i];
      
      console.log(`Checking ${portPath}`);
      
      // Создаем объект порта
      const port = new SerialPort({
        path: portPath,
        baudRate: 9600, // Скорость передачи данных (может отличаться у вашего устройства)
      });
      
      // Добавляем парсер для чтения строк
      const parser = port.pipe(new ReadlineParser({ delimiter: '\n' }));
      
      // Обработчик событий при получении данных
      parser.on('data', data => {
        if (data.includes(MESSAGE_RESPONSE)) {
            result = portPath
          console.log(`${portPath}: Received expected response`);
        }
      });
      
      // Отправка сообщения устройству
      port.write(MESSAGE_TO_SEND + '\n');
      
      // Ожидание ответа в течение 2 секунд
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Закрываем порт после завершения операции
      port.close();
      return result;
    }
  } catch (error) {
    console.error(error);
  }
}

communicateWithDevices().then(console.log).catch(console.error);
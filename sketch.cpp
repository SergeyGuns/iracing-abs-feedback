const int outputPin = 6; // Пин, к которому подключен выход
void setup() {
  Serial.begin(9600); // Устанавливаем скорость передачи данных
  pinMode(outputPin, OUTPUT); // Устанавливаем пин 6 как выход
}

void loop() {
  if (Serial.available()) {
    String message = Serial.readStringUntil('\n'); // Читаем строку до символа новой строки
    
    if (message == "are u pedal?") {
      Serial.println("im pedal"); // Ответ на полученное сообщение
    }
    if (message == "true") {       // Если строка равна "true"
      digitalWrite(outputPin, HIGH);    // Включаем сигнал на пине 6
    } else {
      digitalWrite(outputPin, LOW);     // В противном случае выключаем сигнал
    }
  }
}


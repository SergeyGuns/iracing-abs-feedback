#include <SerialCommands.h>

char serial_command_buffer_[32];
int outputPin = 6; // Пин, к которому подключен выход
SerialCommands serial_commands_(&Serial, serial_command_buffer_, sizeof(serial_command_buffer_), "\n", " ");

void cmd_hello(SerialCommands* sender) {
  digitalWrite(outputPin, HIGH); 
  delay(100);
  digitalWrite(outputPin, LOW); 
  sender->GetSerial()->println("im pedal");
}

void cmd_off_pin(SerialCommands* sender) {
  digitalWrite(outputPin, LOW); 
  sender->GetSerial()->println("off vibration");
}

void cmd_on_pin(SerialCommands* sender) {
  digitalWrite(outputPin, HIGH); 
  sender->GetSerial()->println("on vibration");
}

void cmd_unrecognized(SerialCommands* sender, const char* cmd)
{
	sender->GetSerial()->print("ERROR: Unrecognized command [");
	sender->GetSerial()->print(cmd);
	sender->GetSerial()->println("]");
}

SerialCommand cmd_on_abs("A", cmd_on_pin, true);
SerialCommand cmd_off_abs("B", cmd_off_pin, true);
SerialCommand cmd_echo_hello("C", cmd_hello, true);

void setup() 
{
  pinMode(outputPin, OUTPUT);
  digitalWrite(outputPin, HIGH); 
  delay(500);
  digitalWrite(outputPin, LOW); 
	Serial.begin(2000000);
	serial_commands_.AddCommand(&cmd_echo_hello);
	serial_commands_.AddCommand(&cmd_on_abs);
	serial_commands_.AddCommand(&cmd_off_abs);
}

void loop() 
{
	serial_commands_.ReadSerial();
}
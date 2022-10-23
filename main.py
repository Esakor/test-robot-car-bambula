def on_received_number(receivedNumber):
    if receivedNumber == 1:
        Forward()
    elif receivedNumber == 2:
        Backward()
    elif receivedNumber == 3:
        Turn_Right()
    elif receivedNumber == 4:
        Turn_Left()
radio.on_received_number(on_received_number)

def Forward():
    pins.servo_set_pulse(AnalogPin.P8, 1300)
    pins.servo_set_pulse(AnalogPin.P13, 1700)
    control.wait_micros(20000)
def Turn_Right():
    pins.servo_set_pulse(AnalogPin.P8, 0)
    pins.servo_set_pulse(AnalogPin.P13, 1700)
    control.wait_micros(20000)
def Turn_Left():
    pins.servo_set_pulse(AnalogPin.P8, 1300)
    pins.servo_set_pulse(AnalogPin.P13, 0)
    control.wait_micros(20000)
def sensor():
    global distance
    pins.digital_write_pin(DigitalPin.P1, 0)
    control.wait_micros(2)
    pins.digital_write_pin(DigitalPin.P1, 1)
    control.wait_micros(10)
    pins.digital_write_pin(DigitalPin.P1, 0)
    distance = pins.pulse_in(DigitalPin.P2, PulseValue.HIGH) / 58
def Backward():
    pins.servo_set_pulse(AnalogPin.P8, 1700)
    pins.servo_set_pulse(AnalogPin.P13, 1300)
    control.wait_micros(20000)
X = 0
distance = 0
basic.show_icon(IconNames.FABULOUS)
distance = 0
radio.set_group(7)

def on_forever():
    global X
    X = 0
    for index in range(4):
        sensor()
        if distance <= 15:
            X += 1
    if X == 4:
        Turn_Right()
        basic.pause(100)
        Forward()
basic.forever(on_forever)

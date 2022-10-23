radio.onReceivedNumber(function (receivedNumber) {
    // make  a butone the mode of sensor
    // and made b button mode of remote control  
    if (receivedNumber == 1) {
        X = 0
        for (let index = 0; index < 4; index++) {
            sensor()
            if (distance <= 15) {
                X += 1
            }
        }
        if (X == 4) {
            Turn_Right()
            basic.pause(1000)
            Forward()
        }
    } else if (receivedNumber == 2) {
        Stop_sensor()
    } else if (receivedNumber == 3) {
        Forward()
    } else if (receivedNumber == 4) {
        Backward()
    } else if (receivedNumber == 5) {
        Turn_Right()
    } else if (receivedNumber == 6) {
        Turn_Left()
    } else if (receivedNumber == 7) {
        stop()
    }
})
function Stop_sensor () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P1, 0)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P1, 0)
    distance = pins.pulseIn(DigitalPin.P2, PulseValue.High) / 58
}
function Forward () {
    pins.servoSetPulse(AnalogPin.P8, 1300)
    pins.servoSetPulse(AnalogPin.P13, 1700)
    control.waitMicros(20000)
}
function Turn_Right () {
    pins.servoSetPulse(AnalogPin.P8, 0)
    pins.servoSetPulse(AnalogPin.P13, 1700)
    control.waitMicros(20000)
}
function stop () {
    pins.servoSetPulse(AnalogPin.P8, 0)
    pins.servoSetPulse(AnalogPin.P13, 0)
    control.waitMicros(20000)
}
function Turn_Left () {
    pins.servoSetPulse(AnalogPin.P8, 1300)
    pins.servoSetPulse(AnalogPin.P13, 0)
    control.waitMicros(20000)
}
function sensor () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P1, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P1, 0)
    distance = pins.pulseIn(DigitalPin.P2, PulseValue.High) / 58
}
function Backward () {
    pins.servoSetPulse(AnalogPin.P8, 1700)
    pins.servoSetPulse(AnalogPin.P13, 1300)
    control.waitMicros(20000)
}
let X = 0
let distance = 0
basic.showIcon(IconNames.Fabulous)
distance = 0
radio.setGroup(7)
basic.forever(function () {
	
})

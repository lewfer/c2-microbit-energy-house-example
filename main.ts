function readStatus (device: string) {
    serial.writeLine("get=" + device)
    message = serial.readLine()
    deviceOn = parseFloat(message)
    return deviceOn
}
input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
})
let deviceOn = 0
let message = ""
serial.setBaudRate(BaudRate.BaudRate9600)
basic.pause(1000)
serial.writeLine("clear")
serial.writeLine("light=50")
serial.writeLine("toaster=100")
serial.writeLine("car=5000")
serial.writeLine("tv=300")
serial.writeLine("dishwasher=300")
serial.writeLine("ready")
basic.forever(function () {
    deviceOn = readStatus("light")
    pins.digitalWritePin(DigitalPin.P0, deviceOn)
    deviceOn = readStatus("toaster")
    pins.digitalWritePin(DigitalPin.P1, deviceOn)
    deviceOn = readStatus("car")
    pins.digitalWritePin(DigitalPin.P2, deviceOn)
    deviceOn = readStatus("tv")
    pins.digitalWritePin(DigitalPin.P13, deviceOn)
    deviceOn = readStatus("dishwasher")
    pins.digitalWritePin(DigitalPin.P14, deviceOn)
    basic.pause(5000)
})

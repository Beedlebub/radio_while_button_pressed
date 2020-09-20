enum RadioMessage {
    message1 = 49434,
    message2 = 1435
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x000000)
    } else if (receivedNumber == 1) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff0000)
    } else if (receivedNumber == 2) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x0000ff)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(0)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
radio.setGroup(1)
cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x000000)
while (cuteBot.tracking(cuteBot.TrackingState.L_R_line) || (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line) || cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline))) {
    cuteBot.stopcar()
}

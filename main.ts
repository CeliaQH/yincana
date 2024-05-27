input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(input.compassHeading())
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(input.lightLevel())
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.soundLevel())
})
input.calibrateCompass()

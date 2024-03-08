radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("" + (receivedNumber))
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showLeds(`
        . . . . .
        # # # # #
        # . # . #
        # . # . #
        # . # . #
        `)
    basic.showLeds(`
        . . . . .
        # # # # #
        # . # . #
        # . # . #
        . . # . #
        `)
    basic.showLeds(`
        . . . . .
        # # # # #
        # . # . #
        . . # . #
        . . # . #
        `)
    basic.showLeds(`
        . . . . .
        # # # # #
        . . # . #
        . . # . #
        . . # . #
        `)
    basic.showLeds(`
        . . . . .
        # # # # #
        . . # . #
        . . # . #
        . . . . #
        `)
    basic.showLeds(`
        . . . . .
        # # # # #
        . . # . #
        . . . . #
        . . . . #
        `)
    basic.showLeds(`
        . . . . .
        # # # # #
        . . . . #
        . . . . #
        . . . . #
        `)
    basic.showLeds(`
        . . . . .
        # # # # #
        . . . . #
        . . . . #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # # # # #
        . . . . #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # # # # .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # # # . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # # . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showString("Shake To Begin!")
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(0, 6))
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showLeds(`
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # # . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # # # . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # # # # .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # # # # #
        . . . . #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # # # # #
        . . . . #
        . . . . #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # # # # #
        . . . . #
        . . . . #
        . . . . #
        `)
    basic.showLeds(`
        . . . . .
        # # # # #
        # . . . #
        . . . . #
        . . . . #
        `)
    basic.showLeds(`
        . . . . .
        # # # # #
        # . . . #
        # . . . #
        . . . . #
        `)
    basic.showLeds(`
        . . . . .
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        # # # # #
        # . # . #
        # . . . #
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        # # # # #
        # . # . #
        # . # . #
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        # # # # #
        # . # . #
        # . # . #
        # . # . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # # # # #
        # . # . #
        # . # . #
        # . # . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    radio.setGroup(1)
    basic.showLeds(`
        . . . . .
        # # # # #
        # . # . #
        # . # . #
        # . # . #
        `)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("Hello How Is It Going?")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Press Buttons A+B")
})
basic.showLeds(`
    . . . . .
    # . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    # # . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    # # # . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    # # # # .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    # # # # #
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    # # # # #
    . . . . #
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    # # # # #
    . . . . #
    . . . . #
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    # # # # #
    . . . . #
    . . . . #
    . . . . #
    `)
basic.showLeds(`
    . . . . .
    # # # # #
    # . . . #
    . . . . #
    . . . . #
    `)
basic.showLeds(`
    . . . . .
    # # # # #
    # . . . #
    # . . . #
    . . . . #
    `)
basic.showLeds(`
    . . . . .
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    `)
basic.showLeds(`
    . . . . .
    # # # # #
    # . # . #
    # . . . #
    # . . . #
    `)
basic.showLeds(`
    . . . . .
    # # # # #
    # . # . #
    # . # . #
    # . . . #
    `)
basic.showLeds(`
    . . . . .
    # # # # #
    # . # . #
    # . # . #
    # . # . #
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    # # # # #
    # . # . #
    # . # . #
    # . # . #
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
radio.setGroup(1)
basic.showLeds(`
    . . . . .
    # # # # #
    # . # . #
    # . # . #
    # . # . #
    `)
basic.forever(function () {
	
})

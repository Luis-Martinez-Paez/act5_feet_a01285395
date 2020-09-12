let Feet = 0
let Yards = 0
let Centimeters = 0
let Inches = 0
let Meters = 0
input.onButtonPressed(Button.A, function () {
    Feet = randint(0, 100)
    basic.showNumber(Feet)
    basic.showString("Feet")
    basic.showString("=")
    Yards = Feet / 3
    basic.showNumber(Yards)
    basic.showString("Yards")
})
input.onButtonPressed(Button.AB, function () {
    Feet = randint(0, 100)
    basic.showNumber(Feet)
    basic.showString("Feet")
    basic.showString("=")
    Centimeters = Feet * 30.48
    basic.showNumber(Centimeters)
    basic.showString("Centimeters")
})
input.onButtonPressed(Button.B, function () {
    Feet = randint(0, 100)
    basic.showNumber(Feet)
    basic.showString("Feet")
    basic.showString("=")
    Inches = Feet * 12
    basic.showNumber(Inches)
    basic.showString("Inches")
})
input.onGesture(Gesture.Shake, function () {
    Feet = randint(0, 100)
    basic.showNumber(Feet)
    basic.showString("Feet")
    basic.showString("=")
    Meters = Feet * 0.3048
    basic.showNumber(Meters)
    basic.showString("Meters")
})
basic.forever(function () {
	
})

let a_press = 0
let b_press = 0
let score = 0
let start = 0
let aorb = 0
input.onButtonPressed(Button.A, function () {
    if (a_press == 1) {
        a_press = 0
        score = score + 1
    } else if (b_press == 1) {
        for (let index = 0; index < 99999999; index++) {
            basic.showNumber(score)
        }
    } else {
    	
    }
})
input.onButtonPressed(Button.AB, function () {
    start = 1
})
input.onButtonPressed(Button.B, function () {
    if (b_press == 1) {
        b_press = 0
        score = score + 1
    } else if (a_press == 1) {
        for (let index = 0; index < 99999999; index++) {
            basic.showNumber(score)
        }
    } else {
    	
    }
})
basic.forever(function () {
    if (start == 1) {
        aorb = randint(1, 2)
        if (aorb == 1) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                # . . . #
                # . . . #
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                # . . # .
                # . . # .
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                # . # . .
                # . # . .
                `)
            basic.pause(100)
            a_press = 1
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                # # . . .
                # # . . .
                `)
            basic.pause(200)
            if (a_press == 1) {
                for (let index = 0; index < 99999999; index++) {
                    basic.showNumber(score)
                }
            } else {
                basic.showLeds(`
                    # . . . .
                    # . . . .
                    . . . . .
                    # . . . .
                    # . . . .
                    `)
                basic.pause(1)
                basic.showLeds(`
                    . . . . .
                    # . . . .
                    # . . . .
                    . . . . .
                    . . . . .
                    `)
                basic.pause(1)
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    # . . . .
                    # . . . .
                    . . . . .
                    `)
                basic.pause(10)
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . .
                    # . . . .
                    # . . . .
                    `)
            }
        } else if (aorb == 2) {
            basic.showLeds(`
                . . . . #
                . . . . #
                . . . . #
                # . . . #
                # . . . .
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . # .
                . . . # .
                . . . # .
                # . . # .
                # . . . .
                `)
            basic.pause(100)
            b_press = 1
            basic.showLeds(`
                . . # . .
                . . # . .
                . . # . .
                # . # . .
                # . . . .
                `)
            basic.pause(100)
            if (b_press == 1) {
                for (let index = 0; index < 99999999; index++) {
                    basic.showNumber(score)
                }
            } else {
                basic.showLeds(`
                    . . # . .
                    . . # . .
                    . . # . .
                    . . # . .
                    # # . . .
                    `)
                basic.pause(200)
                basic.showLeds(`
                    . # . . .
                    . # . . .
                    . # . . .
                    . # . . .
                    # # . . .
                    `)
                basic.pause(200)
                basic.showLeds(`
                    # . . . .
                    # . . . .
                    # . . . .
                    # . . . .
                    # # . . .
                    `)
                basic.pause(200)
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    # # . . .
                    `)
                basic.pause(200)
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . .
                    # . . . .
                    # . . . .
                    `)
            }
        } else {
            basic.showString("ERROR")
        }
    }
})

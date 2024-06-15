let hand = 0
let isPlaying = 0
let die = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    for (let index = 0; index <= 2; index++) {
        basic.showNumber(3 - index)
    }
    hand = randint(1, 3)
    if (hand == 1) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 523, 1, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), SoundExpressionPlayMode.UntilDone)
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
    } else if (hand == 2) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 500, 1, 255, 0, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    } else {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    if (isPlaying) {
        music.stopMelody(MelodyStopOptions.All)
        isPlaying = 0
    } else {
        music.play(music.stringPlayable("C5 B A E F A B C5 ", 120), music.PlaybackMode.LoopingInBackground)
        isPlaying = 1
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    music.play(music.stringPlayable("C D E F G A B C5 ", 1000), music.PlaybackMode.UntilDone)
    die = randint(1, 13)
    if (die == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (die == 2) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            `)
    } else if (die == 3) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . #
            `)
    } else if (die == 4) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
    } else if (die == 5) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `)
    } else if (die == 6) {
        basic.showLeds(`
            # . . . #
            . . . . .
            # . . . #
            . . . . .
            # . . . #
            `)
    } else if (die == 7) {
        basic.showLeds(`
            # . . . #
            . . . . .
            # . # . #
            . . . . .
            # . . . #
            `)
    } else if (die == 8) {
        basic.showLeds(`
            # . # . #
            . . . . .
            # . . . #
            . . . . .
            # . # . #
            `)
    } else if (die == 9) {
        basic.showLeds(`
            # . # . #
            . . . . .
            # . # . #
            . . . . .
            # . # . #
            `)
    } else if (die == 10) {
        basic.showLeds(`
            # . # . #
            . # . # .
            . . . . .
            . # . # .
            # . # . #
            `)
    } else if (die == 11) {
        basic.showLeds(`
            # . # . #
            . # . # .
            . . # . .
            . # . # .
            # . # . #
            `)
    } else if (die == 12) {
        basic.showLeds(`
            # . # . #
            . # . # .
            # . . . #
            . # . # .
            # . # . #
            `)
    } else {
        basic.showLeds(`
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            `)
    }
    basic.pause(1000)
    basic.showNumber(die)
})

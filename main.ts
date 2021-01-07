input.onButtonPressed(Button.A, function () {
    if (sprite.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
    } else {
        game.gameOver()
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    game.gameOver()
})
let sprite: game.LedSprite = null
basic.showString("press \"A\" when light is in middle")
basic.showString("lets go")
basic.pause(100)
sprite = game.createSprite(2, 2)
basic.forever(function () {
    sprite.move(1)
    basic.pause(200)
    sprite.ifOnEdgeBounce()
})

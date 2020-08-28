controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    // code used for creating projectiles
    for (let index = 0; index < 1e+21; index++) {
        asteroid = sprites.create(img`
            . . . . e e e e e e e . . . . . 
            . . e e e e e e f e e e e . . . 
            . e e e e e e e e e e e e e . . 
            . e e e e e e e e e e e e e . . 
            e e e e f e e e e e e e e e e . 
            e e e e e e e e e e e e e e e . 
            e e e e e e e e e e e f e e e . 
            f e e e e e e e e e e e e e e . 
            e e e e e e e e e e e e e e e . 
            e e e e e f e e e e e e e e e . 
            e e e e e e e e e e e e e e e . 
            . e e e e e e e e e e f e e . . 
            . e e e e e e f e e e e e e . . 
            . . e e e e e e e e e e e . . . 
            . . . . e e e e e e e . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        destructive_comet = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . 9 9 9 9 9 9 9 . . . . . 
            . . 9 9 9 9 9 9 9 9 9 9 9 . . . 
            . 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
            . 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
            . 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
            . 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
            . . 9 9 9 9 9 9 9 9 9 9 9 . . . 
            . . . . 9 9 9 9 9 9 9 . . . . . 
            `, SpriteKind.Enemy)
        destructive_comet.setVelocity(-52, 0)
        destructive_comet.setPosition(155, randint(0, 100))
        asteroid.setPosition(155, randint(0, 100))
        asteroid.setVelocity(-53, 0)
        pause(1000)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . 
        . d d d . 
        . d d d . 
        . d d d . 
        . . . . . 
        `, Spaceship, 100, 0)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    Spaceship.destroy(effects.spray, 500)
    game.over(false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    asteroid.destroy(effects.spray, 500)
    destructive_comet.destroy(effects.spray, 500)
    info.changeScoreBy(2)
})
let projectile: Sprite = null
let destructive_comet: Sprite = null
let asteroid: Sprite = null
let Spaceship: Sprite = null
Spaceship = sprites.create(img`
    . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . f . . . . . . . . . . 
    . . . . . . . . . f . . . . . . . . . . 
    . . . . . . . . f 1 f . . . . . . . . . 
    . . . . . . . f 1 1 1 f . . . . . . . . 
    . . . . . . . f 1 f 1 f . . . . . . . . 
    . . . . . . . f 1 1 1 f . . . . . . . . 
    . . . . . . . f 1 1 1 f . . . . . . . . 
    . . . . . . . f 1 1 1 f . . . . . . . . 
    . . . . . . . f 1 1 1 f . . . . . . . . 
    . . . . . . f f 1 f 1 f f . . . . . . . 
    . . . . . f 1 f 1 f 1 f 1 f . . . . . . 
    . . . . . f 1 1 1 f 1 1 1 f . . . . . . 
    . . . . . f 1 f f f f f 1 f . . . . . . 
    . . . . . 2 f 5 5 f 5 5 f 2 . . . . . . 
    . . . . . 2 5 5 5 5 5 5 5 2 . . . . . . 
    . . . . . . 2 5 5 5 5 5 2 . . . . . . . 
    . . . . . . . 2 5 5 5 2 . . . . . . . . 
    . . . . . . . . 2 2 2 . . . . . . . . . 
    . . . . . . . . . 2 . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Spaceship, 80, 80)
Spaceship.setPosition(77, 87)
Spaceship.say("Press \"B\" to start! Dodge and shoot those asteroids!")
// code here is used for dialogue and the player model thing and also dont mess with the stuff about loops and etc idk what to do with that and its already broke as is and doesn't need to be MORE broke

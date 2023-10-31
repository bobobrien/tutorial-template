input.onButtonPressed(Button.A, function () {
    led.plotBarGraph(
    5,
    5,
    true
    )
})
input.onButtonPressed(Button.B, function () {
    led.plotBarGraph(
    0,
    0,
    true
    )
})
basic.showIcon(IconNames.StickFigure)
basic.showIcon(IconNames.SmallHeart)
let x = 0
let y = 0
radio.setGroup(1)
basic.forever(function () {
    x = Math.randomRange(0, 4)
    y = Math.randomRange(0, 4)
    radio.sendValue("x", x)
    radio.sendValue("y", y)
    led.toggle(x, y)
    led.plot(0, 0)
    basic.pause(Math.randomRange(0, 500))
    led.unplot(0, 0)
})

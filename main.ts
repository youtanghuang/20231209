for (let X = 0; X <= 4; X++) {
    led.plot(X, 0)
    basic.pause(100)
}
for (let Y = 0; Y <= 4; Y++) {
    led.plot(4, Y)
    basic.pause(100)
}
for (let X = 0; X <= 4; X++) {
    led.plot(3 - X, 4)
    basic.pause(100)
}
for (let Y = 0; Y <= 4; Y++) {
    led.plot(0, 3 - Y)
    basic.pause(100)
}
for (let X = 0; X <= 3; X++) {
    led.plot(X, 1)
    basic.pause(100)
}
for (let Y = 0; Y <= 3; Y++) {
    led.plot(3, Y)
    basic.pause(100)
}

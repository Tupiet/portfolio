new TypeIt("#my-name", {
    speed: 75,
    lifeLike: true,
    waitUntilVisible: true,
})
    .pause(1500)
    .move(-9)
    .pause(300)
    .type('Aleix ')
    .pause(300)
    .move(1)
    .delete(1)
    .pause(300)
    .type('E')
    .move(9)
    .delete(4)
    .pause(500)
    .type('huela')
    .go();
new TypeIt("#my-name", {
    speed: 75,
    lifeLike: true,
    waitUntilVisible: true,
})
    .pause(1500)
    .move(-9)
    .type('Aleix ')
    .move(1)
    .pause(500)
    .delete(1)
    .type('E')
    .move(9)
    .delete(4)
    .type('huela')
    .go();
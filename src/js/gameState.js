function initState() {
    let randomStart = Math.floor(Math.random() * 800);
    const state = {
        player: 'Pesho',
        wizard: {
            width: 82,
            height: 100,
            posX: 2,
            posY: randomStart,
        },
        keys: {}
    }

    return state;
}
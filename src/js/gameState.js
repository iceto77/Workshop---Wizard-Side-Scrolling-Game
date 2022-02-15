function initState() {
    let randomStart = Math.floor(Math.random() * 800);
    const state = {
        player: 'Pesho',
        wizard: {
            width: 82,
            height: 100,
            posX: 2,
            posY: randomStart,
            speed: 10,
        },
        keys: {
            KeyA: false,
            KeyS: false, 
            KeyD: false, 
            KeyW: false,
        },
        bugStats: {
            width: 50,
            height: 50,
            // posX: 2,
            // posY: randomStart,
            // speed: 10,
        },
    }

    return state;
}
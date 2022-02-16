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
            Space: false,
        },
        bugStats: {
            width: 50,
            height: 50,
            nextSpawnTimestamp: 0,
            maxSpawnInterval: 1800,
            speed: 8,
        },
        fireball: {
            width: 20,
            height: 20,
            speed: 20,
        },
    }

    return state;
}
function initState() {
    const state = {
        player: 'Pesho',
        wizard: {
            width: 82,
            height: 100,
            startX: 2,
            startY: Math.floor(Math.random() * 800),
        }
    }

    return state;
}
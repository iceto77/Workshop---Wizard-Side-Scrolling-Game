let state = initState();
let game = initGameObjects();
const availableKeys = ['KeyA', 'KeyS', 'KeyD', 'KeyW', 'Space']; // ['KeyA','KeyS','KeyD','KeyW', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ArrowUp', 'Space' ];



document.addEventListener('keydown', (e) => {
    if (availableKeys.includes(e.code)) {
        state.keys[e.code] = true;
    };
});
document.addEventListener('keyup', (e) => {
    if (availableKeys.includes(e.code)) {
        state.keys[e.code] = false;
    };
});

game.startScreen.addEventListener('click', (e) => {

    game.startScreen.classList.add('hidden');
    game.gameScreen.classList.remove('hidden');
    //Start game:
    start(state, game);
});
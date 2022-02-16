function initGameObjects() {
    const startScreen = document.querySelector('.start-screen');
    const gameScreen = document.querySelector('.game-screen');

    return {
        startScreen,
        gameScreen,
        createWizard(initialState) {
            let wizardElement = document.createElement('div');
            wizardElement.classList.add('wizard');
            wizardElement.style.height = initialState.height + 'px';
            wizardElement.style.width = initialState.width + 'px';
            wizardElement.style.left = initialState.posX + 'px';
            wizardElement.style.top = initialState.posY + 'px';

            this.wizardElement = wizardElement;
            gameScreen.appendChild(wizardElement);

            return wizardElement;
        },
        createFireball(wizard, fireball){
            let fireballElement = document.createElement('div');
            fireballElement.classList.add('fireball');
            fireballElement.style.left = wizard.posX + wizard.width - 3 +'px';
            fireballElement.style.top = wizard.posY + wizard.height / 3 + 5 + 'px';
            fireballElement.style.width = fireball.width + 'px';
            fireballElement.style.height = fireball.height + 'px';
            gameScreen.appendChild(fireballElement);
        },
        createBug(stats) {
            const bugElement = document.createElement('div');
            bugElement.classList.add('bug');
            bugElement.style.height = stats.height + 'px';
            bugElement.style.width = stats.width + 'px';
            bugElement.style.left = gameScreen.offsetWidth - stats.width + 'px';
            bugElement.style.top = Math.floor(Math.random() * gameScreen.offsetHeight) + 'px'; //- stats.height) + 'px';

            gameScreen.appendChild(bugElement);
        },
    };
}
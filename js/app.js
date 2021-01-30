/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const buttonStart = document.querySelector("#btn__reset");
let game;
const buttons = document.querySelectorAll('.key');
const div = document.querySelector('#qwerty');
buttonStart.addEventListener('click', () => {
    document.querySelector('html').style.backgroundColor = 'white';
    overlay.style.display = 'none';
    // delete reference to game object when player decided to play the game again
    game = new Game();
    game.startGame();
});

// handle on-screen keyboard clicks
for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (e) => {
        game.handleInteraction(e.target.textContent);
    });
};

// handle user's keyboard presses
document.addEventListener('keyup', (e) => {
    game.handleInteraction(e.key.toLowerCase());
}); 




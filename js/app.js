/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const buttonStart = document.querySelector("#btn__reset");

buttonStart.addEventListener('click', () => {
    display.innerHTML = "";
    delete game;
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].className = "key";
        buttons[i].disabled = false;
    }
    for(let i = 0; i < hearts.length; i++) {
        hearts[i].src = "images/liveHeart.png";
    }
    overlay.style.display = 'none';
    // delete reference to game object when player decided to play the game again
    const game = new Game();
    game.startGame();
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', (e) => {
            game.handleInteraction(e.target.innerHTML);
        })
    };
});



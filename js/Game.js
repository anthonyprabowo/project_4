/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game{
    constructor(){
        this.missed = 0;
        this.phrases = [new Phrase('Anthony Prabowo'), 
                        new Phrase("Thumbscrew"), 
                        new Phrase("Harry Potter"), 
                        new Phrase("Mysql Database"), 
                        new Phrase("JavaScript")];
        this.activePhrase = null;
    }

    /*
    * hides the start screen overlay
    */
    startGame(){
        document.querySelector('#overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    /*
    * randomly retrieves one of the phrases stored in the phrases array and returns it.
    * @return phrase object
    */
    getRandomPhrase() {
        const randomNumber = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomNumber];
    }

    /*
    * this method controls most of the game logic. It checks to see if the button clicked by the player matches a letter in the phrase, and then directs the game based on a correct or incorrect guess.
    */
    handleInteraction(letter) {
        const buttons = document.querySelectorAll('.keyrow > button');
        if(this.activePhrase.checkLetter(letter.toLowerCase())){
            this.activePhrase.showMatchedLetter(letter.toLowerCase());
            for(let i = 0; i < buttons.length; i++) {
                if(buttons[i].innerHTML === letter.toLowerCase()){
                    buttons[i].classList.add('chosen')
                }
            }
            if(this.checkWin()) {
                this.gameOver();
            }
        } else {
            for(let i = 0; i < buttons.length; i++) {
                if(letter.toLowerCase() === buttons[i].innerHTML) {
                    buttons[i].disabled = true;
                    buttons[i].classList.add('wrong');
                }
            }
            this.removeLife();
        }
    }

    /*
    * this method removes a life from the scoreboard
    */
    removeLife() {
        const hearts = document.querySelectorAll('.tries > img');
        console.log(this.missed);
        if(this.missed < 4) {
            hearts[this.missed].src = "images/lostHeart.png";
            this.missed += 1;
            random_bg_color();
        } else {
            this.missed += 1;
            this.gameOver();
        }   
    }

    /*
    * this method checks to see if the player has revealed all of the letters in the active phrase.
    */
    checkWin() {
        const letter = document.querySelectorAll('.letter')
        for(let i = 0; i < letter.length; i++) {
            if(letter[i].className.includes('hide')){
                return false;
            }
        }
        return true;
    }

    /*
    * this method displays the original start screen overlay depending on the outcome of the game
    */
    gameOver() {
        const h1 = document.querySelector('h1');
        const overlay = document.querySelector('#overlay');
        if(this.missed < 5) {
            h1.innerHTML = "You Win!";
        } else {
            h1.innerHTML = "You Lose!";
        }
        overlay.style.display = '';
        reset();
        this.missed = 0;
    }
}

/*
* This function reset the whole visual state of the game, from the keyboard to the player's heart
*/
function reset(){
    const hearts = document.querySelectorAll('.tries > img');
    document.querySelector('#phrase').innerHTML = "";
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].className = "key";
        buttons[i].disabled = false;
    }
    for(let i = 0; i < hearts.length; i++) {
        hearts[i].src = "images/liveHeart.png";
    }
}

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgba(" + x + "," + y + "," + z + ", .5)";

    document.querySelector('html').style.backgroundColor = bgColor;
}
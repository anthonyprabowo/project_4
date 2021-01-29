/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game{
    constructor(){
        this.missed = 0;
        this.phrases = ['Anthony Prabowo', "Thumbscrew", "Harry Potter", "Mysql Database", "JavaScript"];
        this.activePhrase = null;
    }

    startGame(){
        document.querySelector('#overlay').style.display = 'none';
        this.activePhrase = new Phrase(this.getRandomPhrase());
        this.activePhrase.addPhraseToDisplay();
    }

    getRandomPhrase() {
        const randomNumber = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomNumber];
    }

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

    removeLife() {
        const hearts = document.querySelectorAll('.tries > img');
        console.log(this.missed);
        if(this.missed < 5) {
            hearts[this.missed].src = "images/lostHeart.png";
            this.missed += 1;
        } else {
            this.gameOver();
        }   
    }

    checkWin() {
        const letter = document.querySelectorAll('.letter')
        for(let i = 0; i < letter.length; i++) {
            if(letter[i].className.includes('hide')){
                return false;
            }
        }
        return true;
    }

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

function reset(){
    const hearts = document.querySelectorAll('.tries > img');
    display.innerHTML = "";
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].className = "key";
        buttons[i].disabled = false;
    }
    for(let i = 0; i < hearts.length; i++) {
        hearts[i].src = "images/liveHeart.png";
    }
}
/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
const hearts = document.querySelectorAll('.tries > img');
const h1 = document.querySelector('h1');
const overlay = document.querySelector('#overlay');
let win = false;
const buttons = document.querySelectorAll('.keyrow > button');

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
        if(this.activePhrase.checkLetter(letter.toLowerCase())){
            this.activePhrase.showMatchedLetter(letter.toLowerCase());
            for(let i = 0; i < buttons.length; i++) {
                if(buttons[i].innerHTML === letter.toLowerCase()){
                    buttons[i].classList.add('chosen')
                }
            }
            if(this.checkWin()) {
                win = true;
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
        if(this.missed < 4) {
            hearts[this.missed].src = "images/lostHeart.png";
            this.missed += 1;
        } else {
            this.gameOver();
        }   
    }

    checkWin() {
        const phrase = this.activePhrase.phrase.replace(/\s+/g, '');
        for(let i = 0; i < phrase.length; i++) {
            if(document.querySelector('.' + phrase[i].toLowerCase()).classList.contains('hide')) {
                return false;
            }
        }
        return true;
    }

    gameOver() {
        if(win) {
            h1.innerHTML = "You Win!";
        } else {
            h1.innerHTML = "You Lose!";
        }
        overlay.style.display = '';
        reset();
    }
}

function reset(){
    this.missed = 0;
    this.activePhrase = null;
}
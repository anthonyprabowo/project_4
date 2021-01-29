/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 
const display = document.querySelector('#phrase');


class Phrase{
    constructor(phrase) {
        this.phrase = phrase;
    }

    addPhraseToDisplay() {
        for(let i = 0; i < this.phrase.length; i++) {
            let character = this.phrase[i];
            if(character != " ") {
                const li = document.createElement('li');
                li.append(character);
                li.className = "hide letter " + character.toLowerCase();
                display.append(li);
            }
            else {
                const li = document.createElement('li');
                li.append(character);
                li.className = "space";
                display.append(li);
            }
        }
    }

    checkLetter(letter) {
        return this.phrase.toLowerCase().includes(letter);
    }

    showMatchedLetter(char) {
        const letter = document.querySelectorAll('.' + char.toLowerCase());
        for(let i = 0; i < letter.length; i++) {
            letter[i].classList.remove('hide');
            letter[i].classList.add('show');
        }
    }
}
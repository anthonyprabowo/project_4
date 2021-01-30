/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase{
    constructor(phrase) {
        this.phrase = phrase;
    }

    /*
    * this adds letter placeholders to the display when the game starts.
    */
    addPhraseToDisplay() {
        const display = document.querySelector('#phrase');
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

    /*
    * checks to see if the letter selected by the player matches a letter in the phrase.
    */
    checkLetter(letter) {
        return this.phrase.toLowerCase().includes(letter);
    }

    /*
    * reveals the letter(s) on the board that matches the player's selection.
    */
    showMatchedLetter(char) {
        const letter = document.querySelectorAll('.' + char.toLowerCase());
        for(let i = 0; i < letter.length; i++) {
            letter[i].classList.remove('hide');
            letter[i].classList.add('show');
        }
    }
}
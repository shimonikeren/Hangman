var Letter = function(letterPassed) {
    this.letter = letterPassed;
    this.guessed = false;
    this.checkedLetter = function (letterToCheck){
        if (this.letter.toLowerCase() === letterToCheck.toLowerCase()){
            this.guessed = true;
        }
    }
    this.showLetter = function (){
        if (this.guessed == true){
            return this.letter;
        }
        else {
            return "_ ";
        }
    } 
}

// Export Letter constructor
module.exports = Letter;

var letterGuessed = "";
var letterGenerated = "";

var Letter = function(letter) {
    this.letter = letter;
    this.letterGuessed = false;
    this.showLetters = function (){
        if (letterGuessed === letterGenerated){
            //if guessed: show letter
        }
        else {
            //show underscore 
        }
    };
    this.updateBoolean = function (/*pass stuff here */ ) {
        this.letterGuessed = true;
    };
}
  

// Exporting Letter constructor
module.exports = Letter;

var Letter = function(letterPassed) {
    this.letter = letterPassed;
    console.log(this.letter);
    this.guessed = false;
    this.checkedLetter = function (){
        if (this.letter === "k"){
            this.guessed = true;
        }
        else {
            this.guessed = false;
        }
    }
    this.showLetter = function (){
        if (this.guessed == true){
            console.log(this.letter);
        }
        else {
            console.log("_");
        }
    }
   
}


var testLetter = new Letter("k");
testLetter.showLetter();

var testLetter2 = new Letter ("p");
testLetter2.showLetter();
  
// Exporting Letter constructor
module.exports = Letter;

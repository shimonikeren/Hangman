var Letter = function(letterPassed) {
    this.letter = letterPassed;
    // console.log(this.letter);
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

// Exporting Letter constructor
module.exports = Letter;




//------------test functions------------//
// var testLetter = new Letter("k");
// testLetter.checkedLetter("K");
// console.log(testLetter.showLetter());

// var testLetter2 = new Letter ("p");
// testLetter2.checkedLetter("x");
// console.log(testLetter2.showLetter());
  


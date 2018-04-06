//require Letter file, containing letter constrector 
var word = require("./Letter.js");




var Word = function(number) {
    var wordBank = ["cookies", "puppies", "elephant", "deskchair", "flowers"];
    var wordGenerator = wordBank[Math.floor(Math.random() * wordBank.length)];
    this.chosenWord = wordGenerator;
        console.log(this.chosenWord);
    var splitWord = chosenWord.split("");
    this.letterArray = splitWord;
    console.log(letterArray);
    console.log("FIRST LETTER IN WORD: " + letterArray[0]);
}



Word();

//export word constructor 
module.exports = Word;
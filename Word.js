//require Letter file, containing letter constrector 
var word = require("./Letter.js");

var wordBank = ["cookies", "puppies", "elephant", "deskchair", "flowers"];
var wordGenerator = wordBank[Math.floor(Math.random() * wordBank.length)];

var Word = function(word) {
    this.wordGuessed = false;
    this.generatedWord = wordGenerator;
        console.log("Generated Word: " + this.generatedWord);
    var splitWord = generatedWord.split("");
    this.letterArray = splitWord;
        console.log(letterArray);
        console.log("FIRST LETTER IN WORD: " + letterArray[0]);
    this.getEachLetter = function (){
        for (var i; i<letterArray; i ++){
            console.log("Letter array: " + letterArray[i]);
            var test = new Letter (letterArray[i]);
        }
    }
}


Word();



//export word constructor 
module.exports = Word;
//require Letter file, containing letter constrector 
var Letter = require("./Letter.js");


// turns a simple word into a complex word using the Letter constructor
function makeComplexWord(simpleWord){
    var complexWord = [];

    // for every simple letter in simple word make a complex letter and store it into an array
    for (var i=0; i<simpleWord.length; i++){
        var simpleLetter = simpleWord[i];
        var complexLetter = new Letter (simpleLetter);
        complexWord.push(complexLetter);
    }

    return complexWord;
}

var Word = function(word) {
    this.complexWord = makeComplexWord(word);
    this.checkLetters = function(letterToCheck){
        for (var i=0; i <this.complexWord.length; i++){
            var eachLetter = this.complexWord[i];
            eachLetter.checkedLetter(letterToCheck);
        }
    }
    this.showWord = function (){
        var wordString = "";
        for (var i=0; i<this.complexWord.length; i++){
            var eachLetter = this.complexWord[i];
           wordString += eachLetter.showLetter();
        }

        console.log(wordString);
    }
    // this.generateWord = function();
    // console.log("Local Generated Word: " + this.generatedWord);
    // console.log("first letter in word: " + word[0]);
    //function to get each letter on it's own  
    //this isn't working yet 
    // this.getEachLetter = function (vcgfddssa) {
    //     for (var i; i<splitWord.length; i++){
    //     var [i] = new Letter (splitWord[i])
    // } 
}

//export word constructor 
module.exports = Word;
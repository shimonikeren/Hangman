//require Word.js
var Word = require("./Word.js");

//require inquirer to grab user input 
var inquirer = require('inquirer');

var wordBank = ["cool", "dog", "cat"];

var wordGenerator;
var complexWord;
var maxGuesses;

promptUserToPlay();


function takeUserGuesses(){
  
  inquirer
    .prompt([
      {
            type: "input",
            message: "Guess a letter",
            name: "guess"
      }
    ]).then(function(inquirerResponse){
      var userGuessedLetter = inquirerResponse.guess;
      myComplexWord.checkLetters(userGuessedLetter);
      myComplexWord.showWord();

      if (maxGuesses > 1 && checkWin() === false){
        maxGuesses--;
        takeUserGuesses();
      }
      else {
        console.log("Game over");
        if (checkWin() === true){
          console.log("YOU WON!!!");
        }
        else{
          console.log("YOU LOST!!!");
        }

        promptUserToPlay();
      }
    })
}

function checkWin() {
  var trueGuesses = 0;
  for (var i=0; i < myComplexWord.complexWord.length; i++) {
    // EVALUATE the amount of correct guesses by comparing guessCounter to myComplexWord.length
    // 3 = 3 => win
    // for eachLetter.guessed === true
    // update trueGueses
    var eachLetter = myComplexWord.complexWord[i];
    
    if (eachLetter.guessed === true) {
      trueGuesses++;
    }
  }

  if (trueGuesses === myComplexWord.complexWord.length) {
    return true;
  } else {
    return false;
  }

  // get the length of the array of word string myComplexWord.length


}

function promptUserToPlay(){

  wordGenerator = wordBank[Math.floor(Math.random() * wordBank.length)];

console.log("global generated word: " + wordGenerator);

myComplexWord = new Word(wordGenerator);

maxGuesses = 6;

  inquirer
    .prompt([
      {
          type: "confirm",
          message: "Are you ready to play?:",
          name: "confirm"
        } 
      ]).then(function(inquirerResponse) {
        if (inquirerResponse.confirm===true){
          myComplexWord.showWord();
          takeUserGuesses();
        }
      });
}
    
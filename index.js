var Word = require("./Word.js");
var inquirer = require('inquirer');

var wordBank = ["flowers", "trees", "mountains", "oceans", "rivers"];

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
}

function promptUserToPlay(){
wordGenerator = wordBank[Math.floor(Math.random() * wordBank.length)];
myComplexWord = new Word(wordGenerator);
maxGuesses = 10;
  inquirer
    .prompt([
      {
          type: "confirm",
          message: "Are you ready to play Nature-Themed-Hangman?:",
          name: "confirm"
        } 
      ]).then(function(inquirerResponse) {
        if (inquirerResponse.confirm===true){
          myComplexWord.showWord();
          takeUserGuesses();
        }
    });
}
    
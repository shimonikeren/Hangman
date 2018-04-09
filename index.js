//require Word.js
var wordRequire = require("./Word.js");

//require inquirer to grab user input 
var inquirer = require('inquirer');



inquirer
  .prompt([
    {
        type: "confirm",
        message: "Are you ready to play?:",
        name: "confirm",
        default: true
      },
    {
        type: "input",
        message: "Guess a letter",
        name: "guess"
    }
  ])
  .then(function(inquirerResponse) {
   console.log(inquirerResponse);
});
    
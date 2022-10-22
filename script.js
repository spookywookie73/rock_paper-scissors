//create function to randomly pick a word from an array
function getComputerChoice() {
  var choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}
//store chosen word in a variable
var choice = getComputerChoice();
console.log(choice);
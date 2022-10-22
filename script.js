//create function to randomly pick a word from an array
function getComputerChoice() {
  var choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}
//create function to play one round of the game
function playRound(playerSelection, computerSelection) {
  if(playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    return "It's a tie! Pick again";
  } else {
    if(playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
      return "You Win! Rock beats Scissors";
    } else {
      return "You Lose! Paper beats Rock";
    }
  }
}

var playerSelection = "rock";
var computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
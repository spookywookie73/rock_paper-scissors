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
      if(playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
        return "You Lose! Paper beats Rock";
      } else {
        if(playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
          return "You Win! Paper beats Rock";
        } else {
          if(playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
            return "You Lose! Scissors beat Paper";
          } else {
            if(playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
              return "You Win! Scissors beat Paper";
            } else {
              return "You Lose! Rock beats Scissors";
            }
          }
        }
      }
    }
  } 
  
}

var playerSelection = prompt("Choose Rock, Paper or Scissors.");
var computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
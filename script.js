// create function to randomly pick a word from an array
function getComputerChoice() {
  var choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}
// create function to play one round of the game
function playRound(playerSelection, computerSelection) {
  if(playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    alert("It's a tie! Pick again");
  } else {
    if(playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
      user++
      alert("You Win! Rock beats Scissors");
    } else {
      if(playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
        computer++
        alert("You Lose! Paper beats Rock");
      } else {
        if(playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
          user++
          alert("You Win! Paper beats Rock");
        } else {
          if(playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
            computer++
            alert("You Lose! Scissors beat Paper");
          } else {
            if(playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
              user++
              alert("You Win! Scissors beat Paper");
            } else {
              computer++
              alert("You Lose! Rock beats Scissors");
            }
          }
        }
      }
    }
  } 
}

var user = 0;
var computer = 0;
var gameNum = 0;

// create function to run the game 5 times and to keep score of the results
function game() {
  var playerSelection = prompt("Choose Rock, Paper or Scissors.");
  var computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  gameNum++;
  if(gameNum !== 5) {
    game();
  }  else if (user > computer) {
    alert("Game Over. You Won! You scored " + user + ", the computer scored " + computer + ".");
  } else  if (computer > user) {
    alert("Game Over. You Lost! You scored " + user + ", the computer scored " + computer + ".");
  } else {
    alert("Game Over. It's a Tie!");
  }
}

game();
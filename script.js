const selectionButtons = document.querySelectorAll('[data-selection]');
const computerScore = document.querySelector('[data-computer-score]');
const yourScore = document.querySelector('[data-your-score]');
const choiceResult = document.querySelector('[data-results]');
const resetBtn = document.querySelector('#reset');

// create a button to reset the game
resetBtn.addEventListener('click', () => location.reload());

var user = 0;
var computer = 0;

// use addEventListener to check which button the user has selected
selectionButtons.forEach(selectionButton => {
  selectionButton.addEventListener('click', (e) => {
    const selectionName = selectionButton.dataset.selection;
    playerSelection = selectionName;
    var computerSelection = getComputerChoice();
    
    playRound(playerSelection, computerSelection);
  })
});

// create function to randomly pick a word from an array
function getComputerChoice() {
  var choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

// create function to play one round of the game
function playRound(playerSelection, computerSelection) {
  if(playerSelection === computerSelection) {
    choiceResult.textContent = "It's a tie! Pick again";
  } else {
    if(playerSelection === "rock" && computerSelection === "scissors") {
      yourScore.textContent = ++user
      choiceResult.textContent = "You Win! Rock beats Scissors";
    } else {
      if(playerSelection === "rock" && computerSelection === "paper") {
        computerScore.textContent = ++computer
        choiceResult.textContent = "You Lose! Paper beats Rock";
      } else {
        if(playerSelection === "paper" && computerSelection === "rock") {
          yourScore.textContent = ++user
          choiceResult.textContent = "You Win! Paper beats Rock";
        } else {
          if(playerSelection === "paper" && computerSelection === "scissors") {
            computerScore.textContent = ++computer
            choiceResult.textContent = "You Lose! Scissors beat Paper";
          } else {
            if(playerSelection === "scissors" && computerSelection === "paper") {
              yourScore.textContent = ++user
              choiceResult.textContent = "You Win! Scissors beat Paper";
            } else {
              computerScore.textContent = ++computer
              choiceResult.textContent = "You Lose! Rock beats Scissors";
            }
          }
        }
      }
    }
  }
  game();
}

// create function to disable the buttons once the game is over
function disableBtns() {
  selectionButtons.forEach(elem => {
    elem.disabled = true;
  })
};

// create function to run the game until someone wins
function game() {
  if ((user !== 5) && (computer !== 5)) {
  } else if (user === 5 && computer !== 5) {
    choiceResult.textContent = "Game Over. You Won! You scored " + user + ", the computer scored " + computer + ".";
    disableBtns();
  } else if (computer === 5 && user !== 5) {
    choiceResult.textContent = "Game Over. You Lost! You scored " + user + ", the computer scored " + computer + ".";
    disableBtns();
  } else {
    playRound();
  };
}; 

game();
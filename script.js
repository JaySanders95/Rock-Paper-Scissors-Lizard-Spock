const game = () => {
  //player score and lives remaining
  let playerScore = 0;
  let lives = 5;

  const rulesNav = document.querySelector('.rulesNav');
  const gameNav = document.querySelector('.gameNav');
  const rules = document.querySelector('.rules');
  const match = document.querySelector('.match');
  const gameOver = document.querySelector('.gameOver');


  rulesNav.addEventListener('click', () => {
    match.style.opacity = "0";
    match.style.pointerEvents = "none";
    rules.style.opacity = "1";
    rules.style.transition = "all 1.5s";
    rules.style.pointerEvents = "all";
    gameOver.style.opacity = "0";
    gameOver.pointerEvents = "none";
    rulesNav.style.backgroundColor = "green";
    gameNav.style.backgroundColor = "red";
    if (lives === 0 || -1 ) {
      playerScore = 0;
      lives = 5;
    }
  });
  gameNav.addEventListener('click', () => {
    rules.style.opacity = "0";
    rules.style.pointerEvents = "none";
    match.style.opacity = "1";
    match.style.transition = "all 1.5s";
    match.style.pointerEvents = "all";
    gameOver.style.opacity = "0";
    gameOver.pointerEvents = "none";
    gameNav.style.backgroundColor = "green";
    rulesNav.style.backgroundColor = "red";
    if (lives === 0 || -1) {
      playerScore = 0;
      lives = 5;
    }

  });

 // function for the actual gameplay
  const playMatch = () => {
    const options = document.querySelectorAll('.options button');
    const playerChoice = document.querySelector('.players-selection');
    //allows the computer to choose from an array for their selection
    const computerChoice = document.querySelector('.computers-selection');
    const computerSelections = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

    //Randomly computer generated pick for the computer once a button is clicked
    options.forEach(option => {
      option.addEventListener('click', function () {

        let randomNumber = Math.floor(Math.random() * 5);
        let computerPicks = computerSelections[randomNumber];

        //This compares computer hand and player hand
        decideWinner(this.textContent, computerPicks);

        //this decides what jpg image will be selected based on the button pick
        playerChoice.src = `./assets/images/${this.textContent}.jpg`;
        computerChoice.src = `./assets/images/${computerPicks}.jpg`;


      });
    });
  };
  const reset = () => {
    const match = document.querySelector('.match');
    const gameOver = document.querySelector('.gameOver');
    // removes match from screen and replaces with game over screen.
    match.style.opacity = "0";
    match.style.pointerEvents = "none";
    gameOver.style.opacity = "1";
    gameOver.style.pointerEvents = "all";
    gameOver.style.transition = "all 1.5s";
    //Removes game over screen and starts game again, resetting the players score and the lives.
    const resetButton = document.querySelector('.resetGame');
    resetButton.addEventListener('click', () => {
      match.style.opacity = "1";
      match.style.pointerEvents = "all";
      gameOver.style.opacity = "0";
      gameOver.style.pointerEvents = "none";
      lives = 5;
      playerScore = 0;
    });
  };


  //This function will update the score and the lives for the user
  const scoreboard = () => {
    const updateScore = document.querySelector('.scoreCount');
    const updateLives = document.querySelector('.livesRemaining');
    updateScore.textContent = playerScore;
    updateLives.textContent = lives;

    if (lives === 0) {
      reset();
    }
  };

  // if its a draw     
  const decideWinner = (playerChoice, computerPicks) => {
    const winner = document.querySelector('.win');

    if (playerChoice === computerPicks) {
      winner.textContent = "Tie!";
      return;
    }

    //if player chooses rock
    if (playerChoice === "rock") {
      if (computerPicks === 'scissors') {
        winner.textContent = "You win";
        playerScore++;
        scoreboard();
        return;
      } else if (computerPicks === 'lizard') {
        winner.textContent = "You win";
        playerScore++;
        scoreboard();
        return;
      } else if (computerPicks === 'spock') {
        winner.textContent = "You lose a life";
        lives--;
        scoreboard();
        return;
      } else if (computerPicks === 'paper') {
        winner.textContent = "You lose a life";
        lives--;
        scoreboard();
        return;
      }
    }

    //if player chooses paper
    if (playerChoice === "paper") {
      if (computerPicks === 'rock') {
        winner.textContent = "You win";
        playerScore++;
        scoreboard();
        return;
      } else if (computerPicks === 'spock') {
        winner.textContent = "You win";
        playerScore++;
        scoreboard();
        return;
      } else if (computerPicks === 'lizard') {
        winner.textContent = "You lose a life";
        lives--;
        scoreboard();
        return;
      } else if (computerPicks === 'rock') {
        winner.textContent = "You lose a life";
        lives--;
        scoreboard();
        return;
      }
    }
    //if player chooses scissors
    if (playerChoice === "scissors") {
      if (computerPicks === 'paper') {
        winner.textContent = "You win";
        playerScore++;
        scoreboard();
        return;
      } else if (computerPicks === 'lizard') {
        winner.textContent = "You win";
        playerScore++;
        scoreboard();
        return;
      } else if (computerPicks === 'spock') {
        winner.textContent = "You lose a life";
        lives--;
        scoreboard();
        return;
      } else if (computerPicks === 'rock') {
        winner.textContent = "You lose a life";
        lives--;
        scoreboard();
        return;
      }
    }
    //if player chooses lizard
    if (playerChoice === "lizard") {
      if (computerPicks === 'paper') {
        winner.textContent = "You win";
        playerScore++;
        scoreboard();
        return;
      } else if (computerPicks === 'spock') {
        winner.textContent = "You win";
        playerScore++;
        scoreboard();
        return;
      } else if (computerPicks === 'scissors') {
        winner.textContent = "You lose a life";
        lives--;
        scoreboard();
        return;
      } else if (computerPicks === 'rock') {
        winner.textContent = "You lose a life";
        lives--;
        scoreboard();
        return;
      }
    }

    //if player chooses spock
    if (playerChoice === "spock") {
      if (computerPicks === 'scissors') {
        winner.textContent = "You win";
        playerScore++;
        scoreboard();
        return;
      } else if (computerPicks === 'rock') {
        winner.textContent = "You win";
        playerScore++;
        scoreboard();
        return;
      } else if (computerPicks === 'paper') {
        winner.textContent = "You lose a life";
        lives--;
        scoreboard();
        return;
      } else if (computerPicks === 'lizard') {
        winner.textContent = "You lose a life";
        lives--;
        scoreboard();
        return;
      }
    }
  };
  decideWinner();
  playMatch();
};
game();
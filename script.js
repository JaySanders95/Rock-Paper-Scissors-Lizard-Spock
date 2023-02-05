const game = () => {
  //player score and lives remaining
  let playerScore = 0;
  let lives = 5;

  //this function will remove the rules and start the game once called
  const startGame = () => {
    const letsPlay = document.getElementById('lets-play')
    const rules = document.querySelector('.rules');
    const match = document.querySelector('.match');

    letsPlay.addEventListener('click', () => {
      rules.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  }
// function for the actual gameplay
  const playMatch = () => {
    const options = document.querySelectorAll('.options button');
    const playerChoice = document.querySelector('.players-selection');

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
  
    const rules = document.querySelector('.rules');
    const match = document.querySelector('.match');

    
      rules.classList.add("fadeIn");
      match.classList.add("fadeOut");

    };
  

  //This function will update the score and the lives for the user
  const scoreboard = () => {
    const updateScore = document.querySelector('.scoreCount');
    const updateLives = document.querySelector('.livesRemaining');
    updateScore.textContent = playerScore;
    updateLives.textContent = lives;

    if (lives === 0) {
      reset();
      



    };
  };





  // if its a draw     
  const decideWinner = (playerChoice, computerPicks) => {
    const winner = document.querySelector('.win');


    if (playerChoice === computerPicks) {
      winner.textContent = "Tie!"

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

  startGame();
  playMatch();

}
game();
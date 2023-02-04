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

    startGame();


    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerChoice = document.querySelector('.players-selection');
        const computerChoice = document.querySelector('.computers-selection');
        const computerSelections = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
        //Randomly computer generated pick for the computer
        options.forEach(option => {
            option.addEventListener('click', function () {
                let randomNumber = Math.floor(Math.random() * 5);
                let computerPicks = computerSelections[randomNumber];
                
                console.log(computerPicks);
                
                playerChoice.src = `../assets/images/${this.textContent}.jpg`;
                computerChoice.src = `../assets/images/${computerPicks}.jpg`;
            })
        })
    }










    // if its a draw     
    const decideWinner = (playerChoice, computerChoice) => {
        if (playerChoice === computerChoice) {
            'The game is a tie'
            return;
        }

        //if player chooses rock
        if (playerChoice === 'rock') 
         if (computerChoice = 'scissors' || 'lizard') {
            'You win',
            playerScore++
            return;

        }
        else {
            'You lose a life'
            lives--
            return;
        }
        
        //if player chooses paper
        if (playerChoice === 'paper') 
        if (computerChoice = 'rock' || 'spock') {
            'You win',
            playerScore++
            return;

        }
        else {
            'You lose a life'
            lives--
            return;
        }
        //if player chooses scissors
        if (playerChoice === 'scissors') 
        if (computerChoice = 'paper' || 'lizard') {
            'You win',
            playerScore++
            return;

        }
        else {
            'You lose a life'
            lives--
            return;
        }
        //if player chooses lizard
        if (playerChoice === 'lizard')
        if (computerChoice = 'paper' || 'spock') {
            'You win',
            playerScore++
            return;

        }
        else {
            'You lose a life'
            lives--
            return;
        }
        //if player chooses spock
        if  (playerChoice === 'spock')
        if (computerChoice = 'scissors' || 'rock') {
            'You win',
            playerScore++
            return;

        } else {
        'You lose a life'
        lives--
        return;
    }

    };

    decideWinner();




    playMatch();



}
game();
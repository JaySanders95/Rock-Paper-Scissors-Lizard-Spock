const game = () => {
    //player score and lives remaining
    let playerScore = 0;
    let lives = 5;

    //this function will remove the rules and start the game once called
    const startGame = () => {
        const letsPlay = document.getElementById('lets-play')
        const rules = document.querySelector('.rules');
        const match = document.querySelector('.match');

    console.log(match, "this is match");

        letsPlay.addEventListener('click', () => {
            rules.classList.add("fadeOut");
            match.classList.add("fadeIn");

            console.log(match);
            

        });
    }

    startGame();



    /* WHY WONT YOU WORK?!?!? */





    const playMatch = () => {
        const options = document.getElementsByClassName('buttonStyle');
        const playerChoice = document.getElementsByClassName('players-selection');
        const computerChoice = document.getElementsByClassName('computers-selection');
        const computerSelections = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

        options.forEach(option => {
            option.addEventListener('click', function () {
                let randomNumber = Math.floor(Math.random() * 5);
                let computerPicks = computerSelections[randomNumber];
                console.log(computerPicks);
            })


        })

    }

    playMatch();














}

game();
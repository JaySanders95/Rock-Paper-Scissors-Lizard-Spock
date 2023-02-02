const game = ()=> {
    //player score and lives remaining
    let playerScore = 0;
    let lives = 5;

    //this function will remove the rules and start the game once called
const startGame = ()=> {
    const letsPlay = document.getElementById('lets-play');
    const rules = document.getElementById('rules');
    const match = document.getElementsByClassName('match');

    letsPlay.addEventListener('click', () => { 
        rules.classList.add("fadeOut");
      });
}

startGame();

};
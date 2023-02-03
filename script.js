const game = ()=> {
    //player score and lives remaining
    let playerScore = 0;
    let lives = 5;

    //this function will remove the rules and start the game once called
const startGame = ()=> {
    const letsPlay = document.getElementsByClassName('lets-play')[0]
    const rules = document.getElementsByName('rules')[0]
    const match = document.getElementsByClassName('match')[0]

    letsPlay.addEventListener('click', () => { 
        rules.classList.add("fadeOut")
      });
}

startGame();

/* ill be back */



const playMatch = () => {
    const options = document.querySelectorAll('.selections button')
}














};
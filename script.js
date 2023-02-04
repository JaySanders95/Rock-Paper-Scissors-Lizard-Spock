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

                decideWinner(this.textContent, computerPicks);
        
                playerChoice.src = `./assets/images/${this.textContent}.jpg`;
                console.log(playerChoice)
                computerChoice.src = `./assets/images/${computerPicks}.jpg`;
               
               
            });
        });
     
};
    
   // if its a draw     
   const decideWinner = (playerChoice, computerPicks) => {
       const winner = document.querySelector('.win'); 
    
    
        if (playerChoice === computerPicks) {
            winner.textContent = "Tie!"
            
            return;
        }

        //if player chooses rock
        if (playerChoice === "rock"){
            if (computerPicks == 'scissors'){
                winner.textContent = "You win";
                return;  
              }
              else if (computerPicks === 'lizard') {
                winner.textContent = "You win";
                return;
              }   else {
                winner.textContent = 'You lose a life';
                
                return;
            } 
            
        }

        //if player chooses paper
        if (playerChoice === "paper"){
            if (computerPicks === 'rock'){
                winner.textContent = "You win";
                return;
              }
              else if (computerPicks === 'spock') {
                winner.textContent = "You win";
                return;
              }   else {
                winner.textContent = 'You lose a life';
                
                return;
            } 
            
             } 
        //if player chooses scissors
        if (playerChoice === "scissors"){
            if (computerPicks === 'paper'){
                winner.textContent = "You win";
                return;
              }
              else if (computerPicks === 'lizard') {
                winner.textContent = "You win";
                return;
              }   else {
                winner.textContent = 'You lose a life';
                
                return;
            } 
            
             } 
        //if player chooses lizard
        if (playerChoice === "lizard"){
            if (computerPicks === 'paper'){
                winner.textContent = "You win";
                return;
              }
              else if (computerPicks === 'spock') {
                winner.textContent = "You win";
                return;
              }   else {
                winner.textContent = 'You lose a life';
                
                return;
            } 
            
             } 
        
        //if player chooses spock
        if (playerChoice === "spock"){
            if (computerPicks === 'scissors'){
                winner.textContent = "You win";
                return;
              }
              else if (computerPicks === 'rock') {
                winner.textContent = "You win";
                return;
              }  
              else if (computerPicks === 'paper') {
                winner.textContent = "Loser";
                return;
              }  
              else if (computerPicks === 'lizard') {
                winner.textContent = "Lsoer";
                return;
              }  }
            
           
    
    };
    decideWinner();
    
    startGame();
    playMatch();

    }
    game();





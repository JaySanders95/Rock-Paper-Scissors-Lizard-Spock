const startGame = ()=> {
    let letsPlay = document.getElementsByClassName('rules');
    
    for (let i = 0; i < letsPlay.length; i++){
    letsPlay[0].classList.add("fadeOut");
}

    let clickBtn = document.getElementsByClassName('lets-play');
    clickBtn.addEventListener('click', startGame());
};




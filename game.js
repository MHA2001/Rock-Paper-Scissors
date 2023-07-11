// 
const score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties : 0
};

updateScoreLabel();

function computerMove(){
    let rand = Math.floor(Math.random()*3);
    let move;
    switch (rand){
        case 0:
            move = 'rock';
            break;
        case 1:
            move = 'paper';
            break;
        case 2:
            move = 'scissors'
            break;
    }
    document.querySelector('#js-pcMove').setAttribute("src" ,"images/"+ move +"-emoji.png")
    return move;
}

function playerMove(move){
    let PCMove = computerMove();
    document.querySelector('#js-playerMove').setAttribute("src" ,"images/"+ move +"-emoji.png");
    document.querySelector("#js-playerLabel").textContent = "YOU"
    document.querySelector("#js-vs").textContent = "VS"
    document.querySelector("#js-pcLabel").textContent = "COMPUTER"
    

    
    
    if( move === "rock" && PCMove === "scissors" ){
        score.wins +=1;
        document.querySelector("#js-result").textContent = "You Win"
    }
    else if (move === "paper" && PCMove === "rock"){
        score.wins +=1;
        document.querySelector("#js-result").textContent = "You Win"
    }
    else if (move === "scissors" && PCMove === "paper"){
        score.wins +=1;
        document.querySelector("#js-result").textContent = "You Win"

    }else if (move === PCMove){
        score.ties +=1;
        document.querySelector("#js-result").textContent = "Tie"
    }
    else{
        score.losses +=1;
        document.querySelector("#js-result").textContent = "You Lose"
    }
    localStorage.setItem('score',JSON.stringify(score));
    updateScoreLabel();
}

function updateScoreLabel(){
    document.querySelector("#js-win").textContent = score.wins;
    document.querySelector("#js-tie").textContent = score.ties;
    document.querySelector("#js-loss").textContent = score.losses;
}

function reset(){
    score.wins = 0 ;
    score.losses = 0;
    score.ties = 0;
    localStorage.setItem('score',JSON.stringify(score));
    location.reload();
    updateScoreLabel();
}
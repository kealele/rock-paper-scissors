let playerScore = 0;
let computerScore = 0;
let score = 1;
function playerWin(){
    playerScore += score;
    return playerScore;
}

function computerWin(){
    computerScore += score;
    return computerScore;
}

const rockbutton = document.querySelector('#rock');
const paperbutton = document.querySelector('#paper');
const scissorsbutton = document.querySelector('#scissors');

rockbutton.addEventListener('click', () => {
    playerSelection = 'rock';
    game();
});

paperbutton.addEventListener('click', () => {
    playerSelection = 'paper';
    game();
});

scissorsbutton.addEventListener('click', () => {
    playerSelection = 'scissors';
    game();
});

const result = document.querySelector("#result");
const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'result(hidden lol)'; // hidden result (because didn't know how to do static element with flexbox)
result.appendChild(content);

const runningscore = document.querySelector("#score");
const scoretable = document.createElement("div");
scoretable.classList.add('scoretable');
scoretable.textContent = `Player (0) - Computer (0)`;
runningscore.appendChild(scoretable);

function playRound (playerSelection, computerSelection) {
    content.setAttribute('style', 'visibility: visible')
    if (playerSelection == "rock") {
        if (computerSelection == "paper"){
            computerWin();
            content.textContent = "You Lose this round! Paper beats Rock.";
        }
        else if (computerSelection == "scissors"){
            playerWin();
            content.textContent = "You win this round! Rock beats scissors.";
        }
        else if (computerSelection == "rock") {
            playerWin();
            computerWin();
            content.textContent = "Draw.";
        };

    };
    
    if (playerSelection == "paper") {
        if (computerSelection == "scissors"){
            computerWin();
            content.textContent = "You Lose this round! Scissors beats Paper.";
        }
        else if (computerSelection == "rock"){
            playerWin();  
            content.textContent = "You win this round! Paper beats rock.";
        }
        else if (computerSelection == "paper") {
            playerWin();
            computerWin();
           content.textContent = "Draw.";
        };

    }; 
    if (playerSelection == "scissors") {
        if (computerSelection == "rock"){
            computerWin();
            content.textContent = "You Lose this round! Rock beats Scissors.";
        }
        else if (computerSelection == "paper"){
            playerWin();
            content.textContent = "You win this round! Scissors beats Paper.";
        }
        else if (computerSelection == "scissors") {
            playerWin();
            computerWin();
           content.textContent = "Draw.";
        };

    };
};


function game(){  
    let weapons = ["rock", "paper", "scissors"];
    let computerSelection = getComputerChoise();
        
    function getComputerChoise() {
        let random = Math.floor(Math.random() * weapons.length);
        return weapons[random];
    }
    playRound (playerSelection, computerSelection)
    scoretable.textContent = `Player (${playerScore}) - Computer (${computerScore})`;

    if (playerScore == 5){
        content.textContent = " You won this battle";
        content.setAttribute('style', 'visibility: visible; color: rgb(35, 35, 35); background-color: green');
        rockbutton.setAttribute('disabled', 'true');
        paperbutton.setAttribute('disabled', 'true');
        scissorsbutton.setAttribute('disabled', 'true');
    }
    if (computerScore == 5){
        content.textContent = " You lost this battle";
        content.setAttribute('style', 'visibility: visible; color: rgb(35, 35, 35); background-color: red');
        rockbutton.setAttribute('disabled', 'true');
        paperbutton.setAttribute('disabled', 'true');
        scissorsbutton.setAttribute('disabled', 'true');
    }
};
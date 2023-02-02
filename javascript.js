let playerScore = 0;
let computerScore = 0;
let score = 1;
function playerWin(){
    playerScore += score;
    return playerScore
}

function computerWin(){
    computerScore += score;
    return computerScore;
}

function playRound (playerSelection, computerSelection) {
    
    if (playerSelection == "rock") {
        if (computerSelection == "paper"){
            computerWin()
            return console.log("You Lose this round! Paper beats Rock.");
        }
        else if (computerSelection == "scissors"){
            playerWin()
            return console.log("You win this round! Rock beats scissors.");
        }
        else if (computerSelection == "rock") {
           return console.log("Draw.");
        }

    } 
    
    if (playerSelection == "paper") {
        if (computerSelection == "scissors"){
            computerWin()
            return console.log("You Lose this round! Scissors beats Paper.");
        }
        else if (computerSelection == "rock"){
            playerWin()  
            return console.log("You win this round! Paper beats rock.");
        }
        else if (computerSelection == "paper") {
           return console.log("Draw.");
        }

    } 
    if (playerSelection == "scissors") {
        if (computerSelection == "rock"){
            computerWin()
            return console.log("You Lose this round! Rock beats Scissors.");
        }
        else if (computerSelection == "paper"){
            playerWin()
            return console.log("You win this round! Scissors beats Paper.");
        }
        else if (computerSelection == "scissors") {
           return console.log("Draw.");
        }

    }  else {
        return console.log("Choose the correct weapon!")
    }
}


function game(){
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose your weapon!").toLowerCase();
        let weapons = ["rock", "paper", "scissors"];
        let computerSelection = getComputerChoise();
        
        function getComputerChoise() {
            let random = Math.floor(Math.random() * weapons.length);
            return weapons[random];
        }
        playRound (playerSelection, computerSelection)
     }
     console.log("-------------------------------------------------------------------------------------------------------")
     if (playerWin() > computerWin()){
        return console.log("You won this battle!" )
     } else if (computerWin() > playerWin ()){
        return console.log("You lost this battle!" )
     } else {
        return console.log ("Draw.")
     }
}
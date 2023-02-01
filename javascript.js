
function playRound (playerSelection, computerSelection) {
    
    if (playerSelection == "rock") {
        if (computerSelection == "paper"){
            return console.log("You Lose! Paper beats Rock.");
        }
        else if (computerSelection == "scissors"){
            return console.log("You win! Rock beats scissors.");
        }
        else if (computerSelection == "rock") {
           return console.log("Draw.");
        }

    } 
    
    if (playerSelection == "paper") {
        if (computerSelection == "scissors"){
            return console.log("You Lose! Scissors beats Paper.");
        }
        else if (computerSelection == "rock"){  
            return console.log("You win! Paper beats rock.");
        }
        else if (computerSelection == "paper") {
           return console.log("Draw.");
        }

    } 
    if (playerSelection == "scissors") {
        if (computerSelection == "rock"){
            return console.log("You Lose! Rock beats Scissors.");
        }
        else if (computerSelection == "paper"){
            return console.log("You win! Scissors beats Paper.");
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
}
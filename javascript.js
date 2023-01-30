let input = prompt();
const playerSelection = input.toLowerCase();
let weapons = ["rock", "paper", "scissors"];
const computerSelection = getComputerChoise();

function getComputerChoise() {
    let random = Math.floor(Math.random() * weapons.length);
    return weapons[random];
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection == "rock") {
        if (computerSelection == "paper"){
            return("You Lose! Paper beats Rock.");
        }
        else if (computerSelection == "scissors"){
            return("You win! Rock beats scissors.");
        }
        else {
           return("Draw.");
        }
    }
    if (playerSelection == "paper") {
        if (computerSelection == "scissors"){
            return("You Lose! Scissors beats Paper.");
        }
        else if (computerSelection == "rock"){  
            return("You win! Paper beats rock.");
        }
        else {
           return("Draw.");
        }
    } 
    if (playerSelection == "scissors") {
        if (computerSelection == "rock"){
            return("You Lose! Rock beats Scissors.");
        }
        else if (computerSelection == "paper"){
            return("You win! Scissors beats Paper.");
        }
        else {
           return("Draw.");
        }
    }  
}


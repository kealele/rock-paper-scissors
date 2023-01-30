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
        else if (computerSelection == "rock") {
           return("Draw.");
        }
        else {
            return ("Choose the correct weapon!")
        }
    }
    if (playerSelection == "paper") {
        if (computerSelection == "scissors"){
            return("You Lose! Scissors beats Paper.");
        }
        else if (computerSelection == "rock"){  
            return("You win! Paper beats rock.");
        }
        else if (computerSelection == "paper") {
           return("Draw.");
        }
        else {
            return ("Choose the correct weapon!")
        }
    } 
    if (playerSelection == "scissors") {
        if (computerSelection == "rock"){
            return("You Lose! Rock beats Scissors.");
        }
        else if (computerSelection == "paper"){
            return("You win! Scissors beats Paper.");
        }
        else if (computerSelection == "scissors") {
           return("Draw.");
        }
        else {
            return ("Choose the correct weapon!")
        }
    }  
}


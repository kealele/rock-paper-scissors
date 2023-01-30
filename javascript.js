const playerSelection = "rock";
let weapons = ["rock", "paper", "scissors"];
const computerSelection = getComputerChoise();
function getComputerChoise() {
    let random = Math.floor(Math.random() * weapons.length);
    return weapons[random];
}

console.log(getComputerChoise(weapons))


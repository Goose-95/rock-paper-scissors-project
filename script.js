//write function that randomly returns rock, paper, or scissors values
//write function that takes user choice and returns it
//declare both players score variables
//write logic to play one round
//write logic to play entire game

let randomNumber = Math.random()

function getComputerChoice (randomNumber) {
    if (randomNumber >= .67) {
        return 'rock'
    } else if (randomNumber < .67 && randomNumber >= .33) {
        return 'scissors'
    } else {
        return 'paper'
    }
}

console.log (getComputerChoice(randomNumber))
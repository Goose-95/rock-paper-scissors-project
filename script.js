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

let humanInput = prompt('rock, paper, or scissors?')

function getHumanChoice (humanInput) {
    if (humanInput == 'rock') {
        return 'rock'
    } else if (humanInput == 'paper') {
        return 'paper'
    } else if (humanInput == 'scissors') {
        return 'scissors'
    } else alert('Please chose only rock, paper, or scissors. Reload and try again. Game is case sensitive!')
}

console.log (getHumanChoice(humanInput))

let humanChoice = getHumanChoice (humanInput)

let computerChoice = getComputerChoice (randomNumber)

let humanScore = 0
let computerScore = 0

function playRound (humanChoice, computerChoice) {
    if (humanChoice == 'rock' && computerChoice == 'scissors') {
        return 'win!'
    } else if (humanChoice == 'rock' && computerChoice == 'rock') {
        return 'tie!'
    } else   if (humanChoice == 'rock' && computerChoice == 'paper') {
        return 'lose!'
    } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        return 'win!'
    } else if (humanChoice == 'scissors' && computerChoice == 'scissors') {
        return 'tie!'
    } else   if (humanChoice == 'scissors' && computerChoice == 'rock') {
        return 'lose!'
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        return 'win!'
    } else if (humanChoice == 'paper' && computerChoice == 'paper') {
        return 'tie!'
    } else   if (humanChoice == 'paper' && computerChoice == 'scissors') {
        return 'lose!'
    }
}

console.log (playRound(humanChoice, computerChoice))
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

function playGame() {
    while (humanScore <5 && computerScore <5) {
        let humanChoice = prompt ('rock, paper, or scissors?')
        let computerChoice = getComputerChoice(randomNumber)
        alert(playRound(humanChoice, computerChoice))
    }
}

let humanScore = 0
let computerScore = 0

    function playRound (humanChoice, computerChoice) {
        if (humanChoice == 'rock' && computerChoice == 'scissors') {
            humanScore += 1;
            return 'win!'
        } else if (humanChoice == 'rock' && computerChoice == 'rock') {
            return 'tie!'
        } else   if (humanChoice == 'rock' && computerChoice == 'paper') {
            computerScore += 1;
            return 'lose!'
        } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
            humanScore += 1; 
            return 'win!'
        } else if (humanChoice == 'scissors' && computerChoice == 'scissors') {
            return 'tie!'
        } else   if (humanChoice == 'scissors' && computerChoice == 'rock') {
            computerScore += 1;
            return 'lose!'
        } else if (humanChoice == 'paper' && computerChoice == 'rock') {
            humanScore += 1;
            return 'win!'
        } else if (humanChoice == 'paper' && computerChoice == 'paper') {
            return 'tie!'
        } else   if (humanChoice == 'paper' && computerChoice == 'scissors') {
            computerScore += 1;
            return 'lose!'
        }else {
            return 'please enter a valid choice'
        }
    }

    console.log(playGame())
    console.log (humanScore)
    console.log(computerScore)

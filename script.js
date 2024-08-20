//write function that randomly returns rock, paper, or scissors values
//write function that takes user choice and returns it
//declare both players score variables
//write logic to play one round
//write logic to play entire game




let humanChoice = ''
let computerChoice = ''
 

let humanScore = 0
let computerScore = 0

const container = document.querySelector('#container')
const buttons = document.querySelectorAll("button");

let roundResults = document.createElement ('div')
container.appendChild(roundResults)
let humanScoreResults = document.createElement ('div')
container.appendChild(humanScoreResults)
let computerScoreResults = document.createElement('div')
container.appendChild(computerScoreResults)
let gameResults = document.createElement('h1')
container.appendChild(gameResults)

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        humanChoice = button.id;
    let randomNumber = [Math.random()];

    function getComputerChoice () {
    
        if (randomNumber >= .67) {
        return 'rock'
        } else if (randomNumber < .67 && randomNumber >= .33) {
        return 'scissors'
        } else {
         return 'paper'
        };
    }
        computerChoice = getComputerChoice();

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

        roundResults.textContent = playRound(humanChoice,computerChoice);
        humanScoreResults.textContent = "Your score: " + humanScore;
        computerScoreResults.textContent = "Computer's score: " + computerScore;
        if (humanScore >= 5) {
            return gameResults.textContent = "you win!"
        }else if (computerScore >= 5) {
            return gameResults.textContent = "you lose!"
        }else {return gameResults.textContent = ""}
    })
});
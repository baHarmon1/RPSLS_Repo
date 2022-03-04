const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    generateResult()
    console.log('Computer Choice: ', computerChoice)
    console.log('User Choice: ',userChoice)
}))
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 5) + 1
    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'paper'
    }
    if (randomNumber === 3) {
        computerChoice = 'scissors'
    }
    if (randomNumber === 4) {
        computerChoice = 'lizard'
    }
    if (randomNumber === 5) {
        computerChoice = 'spock'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}
function generateResult() {
    if (computerChoice == userChoice) {
        result = 'Tie!'
    } else if (computerChoice == 'rock' && (userChoice == 'scissors' || userChoice == 'lizard')) {
        result = 'Computer Wins!'
    } else if (computerChoice == 'paper' && (userChoice == 'rock' || userChoice == 'spock')) {
        result = 'Computer Wins!'
    } else if (computerChoice == 'scissors' && (userChoice == 'paper' || userChoice == 'lizard')) {
        result = 'Computer Wins!'
    } else if (computerChoice == 'lizard' && (userChoice == 'spock' || userChoice == 'paper')) {
        result = 'Computer Wins!'
    } else if (computerChoice == 'spock' && (userChoice == 'scissors' || userChoice == 'rock')) {
        result = 'Computer Wins!'
    } else {
        result = 'Player Wins!'
    }
    resultDisplay.innerHTML = result
}
const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const resultantDisplay = dcument.getElementById("#resultant-image")
const possibleChoices = document.querySelectorAll('button')

let userChoice
let computerChoice
let result
const images = [
    {
        name: "rock",
        img: "rock.png"
    },
    {
        name: "paper",
        img: "paper.png"
    },
    {
        name: "scissors",
        img: "scissors.png"
    }
]

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))
function getImage() {
    for(let i = 0; i < 2; i++){
        const tempImg = document.createElement('img')
        tempImg.setAttribute("data-id", i)
        resultantDisplay.append(tempImg)
    }
}
getImage()
function setImage(index){
    const imageId = this.getAttribute("data-id")
    
}
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1
    if(randomNumber === 1){
        computerChoice = 'rock'
    }
    if(randomNumber === 2){
        computerChoice = 'scissors'
    }
    if(randomNumber === 3){
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if(computerChoice === userChoice){
        result = 'Draw'
    }
    if(computerChoice === 'rock' && userChoice == 'paper'){
        result = 'You win'
    }
    if(computerChoice === 'rock' && userChoice == 'scissors'){
        result = 'You lose'
    }
    if(computerChoice === 'paper' && userChoice == 'scissors'){
        result = 'You win'
    }
    if(computerChoice === 'paper' && userChoice == 'rock'){
        result = 'You lose'
    }
    if(computerChoice === 'scissors' && userChoice == 'rock'){
        result = 'You win'
    }
    if(computerChoice === 'scissors' && userChoice == 'paper'){
        result = 'You lose'
    }
    resultDisplay.innerHTML = result
}
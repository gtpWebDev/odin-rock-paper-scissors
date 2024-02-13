


// Rock Paper Scissors game logic

let computerScore = 0
let playerScore = 0

// Prepare DOM updates for score updates, and generate page button functionality
let resultDisplay = document.querySelector("#resultDisplay")
let resultParagraph = document.createElement("p")
let playerScoreDisplay = document.querySelector("#playerScore")
let playerScoreParagraph = document.createElement("p")
let computerScoreDisplay = document.querySelector("#computerScore")
let computerScoreParagraph = document.createElement("p")

setupGameButtons()

function setupGameButtons() {

  const playerSelectButtons = document.querySelectorAll(".playerSelectButton")
  playerSelectButtons.forEach( (element) => {
    element.addEventListener("click", () => {
      playRound(element.textContent)
    })
  })

  const restartGameButton = document.querySelector("#restartButton")
  restartGameButton.addEventListener("click",resetGame)

}


function playRound(playerSelection) {

  playerSelection = playerSelection.toLowerCase()
  let computerSelection = getComputerChoice()

  let resultMessage = ""

  let loseMessage = `You chose ${playerSelection}. Computer chose ${computerSelection}. You lose!`
  let winMessage = `You chose ${playerSelection}. Computer chose ${computerSelection}. You win!`

  if (playerSelection === computerSelection) {
    resultMessage = `No winner! You both chose ${playerSelection}.`

  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      resultMessage = loseMessage
      computerScore++
    } else if (computerSelection === "scissors") {
      resultMessage = winMessage
      playerScore++
    }

  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      resultMessage = winMessage
      playerScore++
    } else if (computerSelection === "scissors") {
      resultMessage = loseMessage
      computerScore++
    }

  } else if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      resultMessage = winMessage
      playerScore++
    } else if (computerSelection === "rock") {
      resultMessage = loseMessage
      computerScore++
    }

  }

  constructResultMessage(resultMessage,playerScore,computerScore)
  updateScoreDisplays(playerScore,computerScore)

}

function updateScoreDisplays(playerScore,computerScore) {

  playerScoreParagraph.textContent = playerScore
  playerScoreDisplay.appendChild(playerScoreParagraph)
  computerScoreParagraph.textContent = computerScore
  computerScoreDisplay.appendChild(computerScoreParagraph)

}

function updateResultDisplay(resultMessage) {
  resultParagraph.textContent = resultMessage
  resultDisplay.appendChild(resultParagraph)

}

function constructResultMessage(resultMessage,playerScore,computerScore) {
   
  let endGameMessage = ""

  if (playerScore === 5 || computerScore === 5) {
    if (playerScore === 5) {
      endGameMessage = " Player wins."
    } else if (computerScore === 5) {
      endGameMessage = " Computer wins."
    }
  }

  updateResultDisplay(resultMessage.concat(endGameMessage))
}


function getComputerChoice() {

  // Returns one of "Rock, "Paper", "Scissors" with equal probability

  switch (Math.floor(3 * Math.random())) {
    case 0:
      return "rock"
    case 1:
      return "paper"
    case 2:
      return "scissors"
    default:
      return "ERROR!"
  }

}


function resetGame() {
  playerScore = 0
  computerScore = 0
  updateScoreDisplays(0,0)
  updateResultDisplay("")
}



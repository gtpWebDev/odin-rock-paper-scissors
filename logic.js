

function getComputerChoice() {

  // Returns one of "Rock, "Paper", "Scissors" with equal probability

  let intRandom = Math.floor(3 * Math.random())

  switch (intRandom) {
    case 0:
      return "rock"
      break;
    case 1:
      return "paper"
      break
    case 2:
      return "scissors"
      break
    default:
      return "ERROR!"
  }

}

function resetGame() {
  playerScore = 0
  computerScore = 0
}

function addResultToDisplay(message,playerScore,computerScore) {
  
  let latestScoreMessage = `Latest score. Player: ${playerScore}, Computer: ${computerScore}`
  
  let endGameMessage = ""

  if (playerScore === 5 || computerScore === 5) {
    if (playerScore === 5) {
      endGameMessage = "Player wins."
    } else if (computerScore === 5) {
      endGameMessage = "Computer wins."
    }
    resetGame()
  }


  newParagraph.textContent = message + ". " + latestScoreMessage + ". " + endGameMessage + "."
  resultDisplay.appendChild(newParagraph)
}


function playRound(playerInput) {

  let playerSelection = playerInput.toLowerCase()
  let computerSelection = getComputerChoice()

  let message = ""

  if (playerSelection === computerSelection) {
    message = `No winner! You both chose ${playerSelection}`

  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      message = "You Lose! Paper beats Rock"
      computerScore++
    } else if (computerSelection === "scissors") {
      message = "You Win! Rock beats Scissors"
      playerScore++
    }

  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      message = "You Win! Paper beats Rock"
      playerScore++
    } else if (computerSelection === "scissors") {
      message = "You Lose! Scissors beat Paper"
      computerScore++
    }

  } else if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      message = "You Win! Scissors beat Paper"
      playerScore++
    } else if (computerSelection === "rock") {
      message = "You Lose! Rock beats Scissors"
      computerScore++
    }

  }

  addResultToDisplay(message,playerScore,computerScore)

}

function reportGameResult(playerWinCount,computerWinCount) {

  if (playerWinCount === computerWinCount) {
    return "Game drawn!"
  } else if (playerWinCount > computerWinCount) {
    return "Player wins!"
  } else {
    return "Computer wins!"
  }

}


function playGame() {

  let playerWinCount = 0
  let computerWinCount = 0


    // Collect player and computer choices
    let playerSelection = prompt("Please enter any of \"Rock\", \"Paper\" or \"Scissors\"")
    console.log(`Player choice is ${playerSelection}.`)
    let computerSelection = getComputerChoice()
    console.log(`Computer choice is ${computerSelection}.`)

    // Decide who wins round
    let = roundResult = playRound(playerSelection,computerSelection)
    if (roundResult === "Player Wins") {
      playerWinCount++
    } else if (roundResult === "Computer Wins") {
      computerWinCount++
    }
    console.log(`Standing after round ${round} is Player: ${playerWinCount}, Computer: ${computerWinCount}`)


  console.log(reportGameResult(playerWinCount,computerWinCount))

}

function setupGameButtons() {

  const playerSelectButtons = document.querySelectorAll(".playerSelectButton")
  playerSelectButtons.forEach( (element) => {
    element.addEventListener("click", () => {
      playRound(element.textContent)
    })
  })

}

// Main process - initialise scores, set up the DOM additions

let computerScore = 0
let playerScore = 0

let resultDisplay = document.querySelector("#resultDisplay")
let newParagraph = document.createElement("p")
setupGameButtons()


function getComputerChoice() {

  // Returns one of "Rock, "Paper", "Scissors" with equal probability

  let random = 3 * Math.random()
  let intRandom = Math.floor(random)

  switch (intRandom) {
    case 0:
      return "Rock"
      break;
    case 1:
      return "Paper"
      break
    case 2:
      return "Scissors"
      break
    default:
      return "ERROR!"
  }

}

function playRound(playerInput, computerInput) {

  let playerSelection = playerInput.toLowerCase()
  let computerSelection = computerInput.toLowerCase()

  if (playerSelection === computerSelection) {
    return `No winner! You both chose ${playerSelection}`

  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      console.log("You Lose! Paper beats Rock")
      return "Computer Wins"
    } else if (computerSelection === "scissors") {
      console.log("You Win! Rock beats Scissors")
      return "Player Wins"
    }

  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      console.log("You Win! Paper beats Rock")
      return "Player Wins"
    } else if (computerSelection === "scissors") {
      console.log("You Lose! Scissors beat Paper")
      return "Computer Wins"
    }

  } else if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      console.log("You Win! Scissors beat Paper")
      return "Player Wins"
    } else if (computerSelection === "rock") {
      console.log("You Lose! Rock beats Scissors")
      return "Computer Wins"
    }

  }

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


  for (let round = 1; round < numberOfRounds+1; round++) {

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

  }

  console.log(reportGameResult(playerWinCount,computerWinCount))

}


let numberOfRounds = 5
playGame()
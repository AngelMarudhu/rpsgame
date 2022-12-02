/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/
// const domButtons = document.querySelectorAll(".rpsButton");
// console.log(
//   domButtons.forEach((e) => {
//     e.onclick = () => {
//       console.log(e.value);
//     };
//   })
// );
const totalScore = { computerScore: 0, playerScore: 0 };
// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice() {
  const rpsComputer = ["rock", "paper", "scissor"];
  const randomNumber = Math.floor(Math.random() * rpsComputer.length);
  return rpsComputer[randomNumber];
}
getComputerChoice();

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  let score;
  if (playerChoice == computerChoice) {
    score = 0;
  } else if (playerChoice === "rock" && computerChoice === "scissor") {
    score = 1;
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    score = 1;
  } else if (playerChoice === "scissor" && computerChoice === "paper") {
    score = 1;
  } else {
    score = -1;
  }
  return score;
  // return the result of score based on if you won, drew, or lost
  // All situations where human draws, set `score` to 0
  // All situations where human wins, set `score` to 1
  // make sure to use else ifs here
  // Otherwise human loses (aka set score to -1)
  // return score
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!
  const playerScore = document.getElementById("player-score");
  const resultDiv = document.getElementById("result");
  const handsDiv = document.getElementById("hands");

  if (score == -1) {
    resultDiv.innerText = "You lose!";
  } else if (score == 0) {
    resultDiv.innerText = "Match Tie";
  } else {
    resultDiv.innerText = "You Won";
  }
  handsDiv.innerText = `${playerChoice} Vs ${computerChoice}`;
  playerScore.innerText = `${totalScore["playerScore"]}`;
}

// ** Calculate who won and show it on the screen ** VERY IMPORTANT
function onClickRPS(playerChoice) {
  // console.log({ playerChoice });
  const computerChoosing = getComputerChoice();
  // console.log({ computerChoosing });
  const scores = getResult(playerChoice, computerChoosing);
  totalScore["playerScore"] += scores;
  // console.log({ scores });
  showResult(scores, playerChoice, computerChoosing);
}

// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  const rpsButton = document.querySelectorAll(".rpsButton");
  rpsButton.forEach((buttons) => {
    buttons.onclick = () => onClickRPS(buttons.value);
  });
  // use querySelector to select all RPS Buttons
  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument
  // Add a click listener to the end game button that runs the endGame() function on click
  const endGames = document.getElementById("endGameButton");
  endGames.onclick = () => endGame(totalScore);
}

// ** endGame function clears all the text on the DOM **
function endGame(totalScore) {
  // totalScore["playerScore"] = "";
  // computeScore["computerScore"] = "";

  const playerScore = document.getElementById("player-score");
  const resultDiv = document.getElementById("result");
  const handsDiv = document.getElementById("hands");

  playerScore.innerText = "";
  resultDiv.innerText = "";
  handsDiv.innerText = "";
}

playGame();

// Selecting the spans
const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoices) =>
  possibleChoices.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    console.log(userChoice, computerChoice);
    resultDisplay.classList.add("result");
    getResult();
    setTimeout(() => {
      resultDisplay.classList.remove("result");
    }, 1301);
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length + 1);
  if (randomNumber === 1) {
    computerChoice = "Rock";
  } else if (randomNumber === 2) {
    computerChoice = "Paper";
  } else if (randomNumber === 3) {
    computerChoice = "Scissors";
  } else {
    alert("There is some problem, please refresh the game.");
  }

  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (userChoice === "rock" && computerChoice === "Rock") {
    result = "It's draw!";
  } else if (userChoice === "paper" && computerChoice === "Paper") {
    result = "It's draw!";
  } else if (userChoice === "scissors" && computerChoice === "Scissors") {
    result = "It's draw!";
  } else if (userChoice === "rock" && computerChoice === "Scissors") {
    result = "You win!";
  } else if (userChoice === "rock" && computerChoice === "Paper") {
    result = "You lost!";
  } else if (userChoice === "paper" && computerChoice === "Scissors") {
    result = "You lost!";
  } else if (userChoice === "paper" && computerChoice === "Rock") {
    result = "You win!";
  } else if (userChoice === "scissors" && computerChoice === "Rock") {
    result = "You lost!";
  } else if (userChoice === "scissors" && computerChoice === "Paper") {
    result = "You win!";
  } else {
    alert("There is some problem, please refresh the game.");
  }

  resultDisplay.innerHTML = result;
}

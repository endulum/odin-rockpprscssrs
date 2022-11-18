let playerScore = 0;
let computerScore = 0;

// game logic

function getRandomChoice() {
    let x = Math.floor(Math.random()*3 + 1);
    switch (x) {
        case (1): return "rock";
        case (2): return "paper";
        case (3): return "scissors";
    }
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {return "It's a tie!"};
    switch (playerChoice) {
        case ("rock"): switch (computerChoice) {
            case ("paper"): 
                computerScore++;
                document.getElementById('computerScore').innerHTML = computerScore;
                return "You lose! Paper beats rock!";
            case ("scissors"): 
                playerScore++;
                document.getElementById('playerScore').innerHTML = playerScore;
                return "You win! Rock beats scissors!";
        }; case ("paper"): switch (computerChoice) {
            case ("scissors"): 
                computerScore++;
                document.getElementById('computerScore').innerHTML = computerScore;
                return "You lose! Scissors beats paper!";
            case ("rock"): 
                playerScore++;
                document.getElementById('playerScore').innerHTML = playerScore;
                return "You win! Paper beats rock!";
        }; case ("scissors"): switch (computerChoice) {
            case ("rock"): 
                computerScore++;
                document.getElementById('computerScore').innerHTML = computerScore;
                return "You lose! Rock beats scissors!";
            case ("paper"): 
                playerScore++;
                document.getElementById('playerScore').innerHTML = playerScore;
                return "You win! Scissors beats paper!";
        };
    }
}

// ui interaction

const roundResult = document.getElementById('roundResult');
const roundStatus = document.getElementById('roundStatus');

document.getElementById('rock').addEventListener("click", () => choose("rock"));
document.getElementById('paper').addEventListener("click", () => choose("paper"));
document.getElementById('scissors').addEventListener("click", () => choose("scissors"));

function choose(choice) {
    let computerChoice = getRandomChoice();
    roundResult.textContent = playRound(choice, computerChoice);
    roundStatus.style.display = "none";
}
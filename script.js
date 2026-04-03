// Initialises the score for both players at 0.
let computerScore = 0;
let humanScore = 0;

// Calls playRound function 5 times.
function playGame() {
    for (i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    };
}

// Compares humanSelection to computerSelection and announces the winner 
// in-line with the usual game rules. The winner's score is incremented by 1.
function playRound(humanSelection, computerSelection) {
    if (humanSelection === computerSelection) {
        console.log(`This round is a draw!`);
    } else if (
        ((humanSelection === "rock") && (computerSelection === "scissors")) || 
        ((humanSelection === "scissors") && (computerSelection === "paper")) ||
        ((humanSelection === "paper") && (computerSelection === "rock"))
    ) {
        console.log(`You win this round!`);
        humanScore += 1; 
        
    } else { 
        console.log(`You lose this round!`);
        computerScore += 1;
    }

    console.log(`The score is you: ${humanScore}, vs computer: ${computerScore}`);
}

// Randomly selects the computers choice.
function getComputerChoice() {
    const result = Math.floor(Math.random() * 3) + 1;
    let computerSelection;

    switch (result) {
        case 1:
            computerSelection = "rock";
            break;
        case 2:
            computerSelection = "paper";
            break;
        case 3:
            computerSelection = "scissors";
            break;
    }

    console.log(`The computer's selection is ${computerSelection}`);
    return computerSelection; // Return the value
}

// Requests the human player to input a choice.
function getHumanChoice() {
    let humanSelection = prompt("Make your choice!").toLowerCase();
    console.log(`Your selection is ${humanSelection}`);
    return humanSelection; // Return the value
}

// Calls the function to play a game comprising 5 rounds.
playGame();
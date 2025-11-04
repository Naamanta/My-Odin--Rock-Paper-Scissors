// Step 1
function getComputerChoice() {
    let randomNum = Math.random();
    if(randomNum < 1 / 3) {
        return 'rock'
    }else if(randomNum < 2 / 3) {
        return 'paper'
    }else {
        return 'scissors'
    }
}

// Step 2
function getHumanChoice() {
    let humanPrompt = prompt('Enter Your Choice: rock, paper, scissors');
    return humanPrompt.toLowerCase();
}

// Step 3
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    // Play 5 Round
    for(let i = 1; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    // Step 4
    function playRound(human, computer) {
       let human1 = human.toLowerCase();
        if(human1 === computer) {
            console.log(`It's a tie you both chose ${human1}`);
        }else if(human1 === 'rock' && computer === 'scissors' ||
                human1 === 'paper' && computer === 'rock' ||
                human1 === 'scissors' && computer === 'paper'
        ){
            console.log(`You Win ${human1} beat ${computer}`);
            humanScore++;
        }else {
            console.log(`You Lose ${computer} beat ${human1}`);
            computerScore++;
        }
    }
    // Final Result
    if(humanScore > computerScore) {
        console.log(`You Won the game: Final Score ${humanScore} - ${computerScore}`)
    }else if(computerScore > humanScore) {
        console.log(`You Won the game: Final Score ${computerScore} - ${humanScore}`)
    }else {
        console.log(`It's Tie! Final Score: ${humanScore} - ${computerScore}`)
    }
}
playGame()
let i = 0;
const items = ["rock", "paper", "scissors"];
let playerWin = 0;
let computerWin = 0;
let ties = 0;



function getComputerOutput(){
    let randomItem = Math.floor(Math.random() * items.length);
    
    let computerChoice = items[randomItem];
    return computerChoice;
}


    function playRound(computerChoice, playerInput) {

        let resultdiv = document.querySelector('div');

        if (playerInput == computerChoice) {
          resultdiv.textContent = 'Tie!';
          ties++;
        } else if (computerChoice == "rock") {
            if (playerInput == "scissors") {
              resultdiv.textContent = `Lose! ${computerChoice} beats ${playerInput}`;
              computerWin++;
            } else if (playerInput == "paper") {
              resultdiv.textContent = `Win! ${playerInput} beats ${computerChoice}`;
              playerWin++;
            }

        } else if (computerChoice == "paper") {
            if (playerInput == "rock") {
              resultdiv.textContent =`Lose! ${computerChoice} beats ${playerInput}`;
              computerWin++;
            } else if (playerInput == "scissors") {
              resultdiv.textContent = `Win! ${playerInput} beats ${computerChoice}`;
              playerWin++;
            }

        } else if (computerChoice == "scissors") {
            if (playerInput == "paper") {
              resultdiv.textContent = `Lose! ${computerChoice} beats ${playerInput}`;
              computerWin++;
            } else if (playerInput == "rock") {
                resultdiv.textContent = `Win! ${playerInput} beats ${computerChoice}`;
                playerWin++;
            }
        }

        let winCount = document.querySelector('.win-count');
        let loseCount = document.querySelector('.lose-count');
        let tieCount = document.querySelector('.tie-count');

        winCount.textContent = `Player wins:${playerWin}`;
        loseCount.textContent = `Computer wins:${computerWin}`;
        tieCount.textContent = `Ties:${ties}`;

        return playerWin, computerWin;  
    }

    



function game() { 
        let rock = document.querySelector('.rock-selection');
        let paper = document.querySelector('.paper-selection');
        let scissors = document.querySelector('.scissors-selection');
  
        rock.addEventListener('click', () => playRound(getComputerOutput(), 'rock'));
        paper.addEventListener('click', () => playRound(getComputerOutput(), 'paper'));
        scissors.addEventListener('click', () => playRound(getComputerOutput(), 'scissors'));

  
    let finalResult =  document.querySelector('.final-result');

    
    if (playerWin = 5) {
        finalResult.textContent = 
          `Congrats! You beat the computer ${playerWin} out of 5 rounds!`
        ;
      } else if (computerWin = 5){
        finalResult.textContent =
          `Oh no, the computer beat you ${computerWin} out of 5 rounds...`
        ;
      }
}



  game();

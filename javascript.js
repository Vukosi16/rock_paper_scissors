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

    // function getPlayerInput() {
    //     let browserInput = prompt("Enter your item: ");       
    //     let playerInput = browserInput[0].toUpperCase() + browserInput.toLowerCase().slice(1);
    //     return playerInput;
    // }

    function playRound(computerChoice, playerInput) {

        if (playerInput == computerChoice) {
            console.log("Tie!");
            ties++;
        } else if (computerChoice == "rock") {
            if (playerInput == "scissors") {
                console.log(`Lose! ${computerChoice} beats ${playerInput}`);
                computerWin++;
            } else if (playerInput == "paper") {
                console.log(`Win! ${playerInput} beats ${computerChoice}`);
                playerWin++;
            }

        } else if (computerChoice == "paper") {
            if (playerInput == "rock") {
                console.log(`Lose! ${computerChoice} beats ${playerInput}`)
                computerWin++;
            } else if (playerInput == "scissors") {
                console.log(`Win! ${playerInput} beats ${computerChoice}`)
                playerWin++;
            }

        } else if (computerChoice == "scissors") {
            if (playerInput == "paper") {
                console.log(`Lose! ${computerChoice} beats ${playerInput}`)
                computerWin++;
            } else if (playerInput == "rock") {
                console.log(`Win! ${playerInput} beats ${computerChoice}`)
                playerWin++;
            }
        }

        console.log(`Player wins:${playerWin}`);
        console.log(`Computer wins:${computerWin}`);
        console.log(`Ties:${ties}`);
        return playerWin, computerWin;  
    }



function game() { 
    for (let i = 0; i < 5; i++) {
  
      let playerInput = prompt(
        "Choose rock, paper, or scissors"
      ).toLowerCase();

      let computerInput = getComputerOutput();
  
      while (
        playerInput !== "rock" &&
        playerInput !== "paper" &&
        playerInput !== "scissors"
      ) {
        playerInput = prompt(
          "Choose a valid input: rock, paper, or scissors"
        ).toLowerCase();
      }
  
      playRound(computerInput, playerInput);
      
    }

    if (playerWin > computerWin) {
        console.log(
          `Congrats! You beat the computer ${playerWin} out of 5 rounds!`
        );
      } else if (computerWin > playerWin){
        console.log(
          `Oh no, the computer beat you ${computerWin} out of 5 rounds...`
        );
      } else {
        console.log("You\'ve tied")
      }
}



  game();

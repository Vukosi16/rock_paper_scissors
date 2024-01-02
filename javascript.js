let i = 0;
const items = ["Rock", "Paper", "Scissors"];

do {

    function getComputerOutput(){
        let randomItem = Math.floor(Math.random() * items.length);
    
        let computerChoice = items[randomItem];
        return computerChoice;
    }

    function getPlayerInput() {
        let browserInput = prompt("Enter your item: ");
    
        let playerInput = browserInput[0].toUpperCase() + browserInput.toLowerCase().slice(1);
        return playerInput;
    }

    function playRound(computerChoice, playerInput) {

        if (playerInput == computerChoice) {
            i = 2;
            return "Tie! Play again!";
        } else if (computerChoice == "Rock") {
            if (playerInput == "Scissors") {
                i = 0;
                return `Lose! ${computerChoice} beats ${playerInput}`;
            } else if (playerInput == "Paper") {
                i = 0;
                return `Win! ${playerInput} beats ${computerChoice}`;
            }

        } else if (computerChoice == "Paper") {
            if (playerInput == "Rock") {
                i = 0;
                return `Lose! ${computerChoice} beats ${playerInput}`;
            } else if (playerInput == "Scissors") {
                i = 0;
                return `Win! ${playerInput} beats ${computerChoice}`;
            }

        } else if (computerChoice == "Scissors") {
            if (playerInput == "Paper") {
                i = 0;
                return `Lose! ${computerChoice} beats ${playerInput}`;
            } else if (playerInput == "Rock") {
                i = 0;
                return `Win! ${playerInput} beats ${computerChoice}`;
            }
        }
          
    }

    let computerChoice = "Rock";
    let playerInput = getPlayerInput();

    console.log(playRound(computerChoice, playerInput));

} while(i > 1);

//score variables:
let humanScore = 0;
let computerScore = 0;

//user player function
let userChoice = () => prompt("ingresa tu opcion: ");

//random computer choice function:



function getComputerChoice(){
  let randomNum = Math.floor(Math.random()*3);

  switch (randomNum){
    case 0:
      return "rock";
      break;

    case 1:
      return "paper";
      break;

    case 2:
      return "scissors";
      break;
  }

}

function play(computerChoice,humanChoice){
  humanChoice = userChoice().toLowerCase();
  computerChoice = getComputerChoice().toLowerCase();
  console.log("human says: " + humanChoice);
  console.log("computer says: " + computerChoice);
  console.log("computer: " + computerScore);
  console.log("human: " + humanScore);
}

play()


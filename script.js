//score variables:
let humanScore = 0;
let computerScore = 0;

//function to generate a random computer choice
function getComputerChoice(){
  let randomNum = Math.floor(Math.random()*3);

  switch (randomNum){
    case 0:
      return "rock"
      break;

    case 1:
      return "paper"
      break;

    case 2:
      return "scissors"
      break;
  }
}


//function to take user input
function getUserChoice(){
  let playerChoice = prompt("enter your play: ");
  return playerChoice.trim();
}

//store the function in variables for use them in the play() function
let humanPlayer = getUserChoice().toLowerCase();
let computerPlayer = getComputerChoice();
console.log("humanPlayer: " + humanPlayer);
console.log("computerPlayer: " + computerPlayer);

//playfunction whit all the game logic
function play(human,computer){
  if(humanPlayer === "rock" && computerPlayer === "scissors"){
    humanScore++;
    return "human player wins.. rocks destroy scissors!!"
  }
  else if(humanPlayer === "paper" && computerPlayer === "rock"){
    humanScore++;
    console.log("human score: " + humanScore);
    console.log("computer score: " + computerScore);
    return "human player wins.. paper grabs rock!!"
  }
  else if(humanPlayer === "scissors" && computerPlayer === "paper"){
    humanScore++;
    console.log("human score: " + humanScore);
    console.log("computer score: " + computerScore);
    return "human player wins.. scissors cut the paper"
  }
  else if(humanPlayer === "rock" && computerPlayer === "paper"){
    computerScore++;
    console.log("human score: " + humanScore);
    console.log("computer score: " + computerScore);
    return "computer  wins.. paper grabs the rock!!"
  }
  else if(humanPlayer === "scissors" && computerPlayer === "rock"){
    computerScore++;
    console.log("human score: " + humanScore);
    console.log("computer score: " + computerScore);
    return "computer  wins.. rocks destroy scissors!!"
  }
  else if(humanPlayer === "paper" && computerPlayer === "scissors"){
    computerScore++;
    console.log("human score: " + humanScore);
    console.log("computer score: " + computerScore);
    return "computer wins.. scissors cut the paper"
  }
  else if(humanPlayer === computerPlayer){
    console.log("human score: " + humanScore);
    console.log("computer score: " + computerScore);
    return "its a tie!!!"
  }
}

let result = play(humanPlayer, computerPlayer);
console.log(result);




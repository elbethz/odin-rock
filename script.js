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

console.log("humano: " + userChoice());
console.log("ordenador: " + getComputerChoice());


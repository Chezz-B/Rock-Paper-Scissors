"use strict";

document.body.style.textAlign = "center";
document.body.style.fontSize = "30px";
document.body.style.margin = "50px"



let playerScore = 0;
let computerScore = 0;


let playerSelection = "";


function computerPlay(){
let randomComputerNum = Math.floor(Math.random() * 3) + 1;
if(randomComputerNum === 1){
  console.log("COMPUTER : ROCK");
  return "ROCK";
} else if(randomComputerNum === 2){
  console.log("COMPUTER : PAPER")
  return "PAPER";
} else {
  console.log("COMPUTER : SCISSORS")
  return "SCISSORS";
}
};
  

function playRound(){
  if(playerScore == 5 || computerScore == 5)return;
  let player = playerSelection;
  let computer = computerPlay();
  
  if(player === computer){
    messageBoard.innerHTML = "It's a TIE";
  } else if(player === "ROCK" && computer === "SCISSORS"){
    playerScore++;
    messageBoard.innerHTML = `YOU WON! <br> ROCK beats the SCISSORS`;
  } else if(player === "ROCK" && computer === "PAPER"){
    computerScore++;
    messageBoard.innerHTML = "YOU LOST! <br> PAPER beats the ROCK";
  } else if(player === "PAPER" && computer === "ROCK"){
    playerScore++;
    messageBoard.innerHTML = "YOU WON! <br> PAPER beats the ROCK";
  } else if(player === "PAPER" && computer === "SCISSORS"){
    computerScore++;
    messageBoard.innerHTML = "YOU LOST! <br> SCISSORS beats PAPER";
  } else if(player === "SCISSORS" && computer === "PAPER"){
    playerScore++;
    messageBoard.innerHTML = "YOU WON! <br> SCISSORS beats the PAPER";
  } else if(player === "SCISSORS" && computer === "ROCK"){
    computerScore++;
    messageBoard.innerHTML = "YOU LOST! <br> ROCK beats the SCISSORS";
  };
  if(playerScore == 5){
    messageBoard.textContent = "YOU WON THE GAME!";
    const restartBtn = document.createElement("button");
    restartBtn.textContent = "PLAY AGAIN";
    restartBtn.style.padding = "10px";
    document.body.appendChild(restartBtn);
    restartBtn.addEventListener("click", function(){
    playerScore = 0;
    computerScore = 0;
    result.textContent = `Player : ${playerScore} | Computer : ${computerScore}`;
    document.body.removeChild(restartBtn);
    messageBoard.textContent = "CHOOSE YOUR WEAPON";
  });
  } else if(computerScore == 5){
    messageBoard.textContent = "YOU LOST THE GAME!";
    const restartBtn = document.createElement("button");
    restartBtn.textContent = "PLAY AGAIN";
    restartBtn.style.padding = "10px";
    document.body.appendChild(restartBtn);
    restartBtn.addEventListener("click", function(){
    playerScore = 0;
    computerScore = 0;
    result.textContent = `Player : ${playerScore} | Computer : ${computerScore}`;
    document.body.removeChild(restartBtn);
    messageBoard.textContent = "CHOOSE YOUR WEAPON";
  });
  };
};


  const container = document.createElement("div");
  document.body.appendChild(container);

  const btn1 = document.createElement("button");
  btn1.textContent = "ROCK";
  btn1.classList.add("btn");
  container.appendChild(btn1);

  const btn2 = document.createElement("button");
  btn2.textContent = "PAPER";
  btn2.classList.add("btn");
  container.appendChild(btn2);

  const btn3 = document.createElement("button");
  btn3.textContent = "SCISSORS";
  btn3.classList.add("btn");
  container.appendChild(btn3);

  const result = document.createElement("div");
  result.textContent = `Player : ${playerScore} | Computer : ${computerScore}`;
  result.style.margin = "40px"
  document.body.appendChild(result);
  
  const messageBoard = document.createElement("div");
  messageBoard.textContent = "CHOOSE YOUR WEAPON";
  document.body.append(messageBoard);
  

  const buttons = document.querySelectorAll(".btn");
  
    buttons.forEach((button) => {
      button.style.fontSize = "24px";
      button.style.width = "200px";
      button.style.padding = "10px";
      button.style.margin = "10px 10px 30px";
      button.addEventListener("click", function(){
        playerSelection = button.textContent;
        console.log(`PLAYER : ${button.textContent}`);
        playRound();
        result.textContent = `Player : ${playerScore} | Computer : ${computerScore}`;
    });
  });



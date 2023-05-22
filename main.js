function computerPlay() {
  let auswahl = ["rock", "paper", "scissor"];
  let rand = Math.floor(Math.random() * 3);
  return auswahl[rand];
}

function playRound() {
  const playerSelection = prompt(
    "Bitte rock, paper oder scissor eintippen:"
  ).toLowerCase();
  const computerSelect = computerPlay();

  if (playerSelection === computerSelect) {
    console.log(playerSelection + " vs " + computerSelect);
    console.log("Unentschieden!");
    return 0;
  } else if (playerSelection === "rock" && computerSelect === "paper") {
    console.log(playerSelection + " vs " + computerSelect);
    console.log("Computer gewinnt");
    return 1;
  } else if (playerSelection === "paper" && computerSelect === "scissor") {
    console.log(playerSelection + " vs " + computerSelect);
    console.log("Computer gewinnt");
    return 1;
  } else if (playerSelection === "scissor" && computerSelect === "rock") {
    console.log(playerSelection + " vs " + computerSelect);
    console.log("Computer gewinnt");
    return 1;
  } else {
    console.log(playerSelection + " vs " + computerSelect);
    console.log("Du gewinnst!!");
    return 2;
  }
}

function game() {
  let countComputer = 0;
  let countPlayer = 0;
  for (let i = 0; i < 5; i++) {
    let whoWon = playRound();
    console.log(whoWon);
    if (whoWon === 1) {
      countComputer++;
    } else if (whoWon === 2) {
      countPlayer++;
    } else {
      console.log("Unentschieden!!");
    }
  }
  console.log(countComputer, countPlayer);
}

game();

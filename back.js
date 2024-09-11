let P;
let Pscore = 0;
let Cscore = 0;
const btn = document.querySelectorAll("button");
const Pweapon = document.querySelector(".Weapon1");
btn.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.id === "rock") {
      Pweapon.innerHTML = `<img class="pics" src="Resources/hand.png" alt="Rock" />`;
      P = "rock";
    } else if (button.id === "paper") {
      Pweapon.innerHTML = `<img class="pics" src="Resources/hand-paper.png" alt="Paper" />`;
      P = "paper";
    } else {
      Pweapon.innerHTML = `<img class="pics" src="Resources/scissors.png" alt="Scissors" />`;
      P = "scissors";
    }
    Play();
    check();
  });
});

const Cweapon = document.querySelector(".Weapon2");
function GetCompChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    Cweapon.innerHTML = `<img class="pics" src="Resources/hand.png" alt="Rock" />`;
    return "rock";
  } else if (choice === 1) {
    Cweapon.innerHTML = `<img class="pics" src="Resources/hand-paper.png" alt="Paper" />`;
    return "paper";
  } else {
    Cweapon.innerHTML = `<img class="pics" src="Resources/scissors.png" alt="Scissors" />`;
    return "scissors";
  }
}

const alertMsg = document.querySelector(".msg");
const theRule = document.querySelector(".rule");
const pscore = document.querySelector(".pscore");
const cscore = document.querySelector(".cscore");
function Play(PlayerChoice, CompChoice) {
  CompChoice = GetCompChoice();
  PlayerChoice = P;
  if (
    (PlayerChoice === "rock" && CompChoice === "scissors") ||
    (PlayerChoice === "paper" && CompChoice === "rock") ||
    (PlayerChoice === "scissors" && CompChoice === "paper")
  ) {
    Pscore++;
    alertMsg.innerHTML = `Nice One`;
    pscore.innerHTML = `${Pscore}`;
  } else if (
    (CompChoice === "rock" && PlayerChoice === "scissors") ||
    (CompChoice === "paper" && PlayerChoice === "rock") ||
    (CompChoice === "scissors" && PlayerChoice === "paper")
  ) {
    Cscore++;
    alertMsg.innerHTML = `You Idiot`;
    cscore.innerHTML = `${Cscore}`;
  } else {
    alertMsg.innerHTML = `It's a tie`;
  }
}

function check() {
  if (Pscore === 5) {
    alert("The Crazy Son of a bitch did it");
    location.reload();
  } else if (Cscore == 5) {
    alert("a Robot has beaten you ? shame ...");
    location.reload();
  }
}
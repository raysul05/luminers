let btnRef = document.querySelectorAll(".button-option");
let popupRef = document.querySelector(".popup");
let newgameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msgRef = document.getElementById("message");
let turnIndicator = document.getElementById("turn-indicator");

// Winning Pattern Array
let winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [2, 5, 8],
  [6, 7, 8],
  [3, 4, 5],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6],
];

// Player 'X' plays first
let xTurn = true;
let count = 0;

// Disable All Buttons
const disableButtons = () => {
  btnRef.forEach((element) => (element.disabled = true));
  // enable popup
  popupRef.classList.remove("hide");
};

// Enable all buttons (For New Game and Restart)
const enableButtons = () => {
  btnRef.forEach((element) => {
    element.innerText = "";
    element.disabled = false;
  });
  // disable popup
  popupRef.classList.add("hide");
  xTurn = true;
  turnIndicator.textContent = "Now Turn: H(Human)";
};

// This function is executed when a player wins
const winFunction = (letter) => {
  disableButtons();
  if (letter == "X") {
    msgRef.innerHTML = "&#x1F389; <br> 'A' Ai Wins";
  } else {
    msgRef.innerHTML = "&#x1F389; <br> 'H' Human Wins";
  }
};

// Function for draw
const drawFunction = () => {
  disableButtons();
  msgRef.innerHTML = "&#x1F60E; <br> It's a Draw";
};

// New Game
newgameBtn.addEventListener("click", () => {
  count = 0;
  enableButtons();
});

restartBtn.addEventListener("click", () => {
  count = 0;
  enableButtons();
});

// Win Logic
const winChecker = () => {
  // Loop through all win patterns
  for (let i of winningPattern) {
    let [element1, element2, element3] = [
      btnRef[i[0]].innerText,
      btnRef[i[1]].innerText,
      btnRef[i[2]].innerText,
    ];
    // Check if elements are filled
    // If 3 empty elements are same and would give win as would
    if (element1 != "" && element2 != "" && element3 != "") {
      if (element1 == element2 && element2 == element3) {
        // If all 3 buttons have same values then pass the value to winFunction
        winFunction(element1);
      }
    }
  }
};

// AI Logic for opponent ('O')
const makeAiMove = () => {
  // Find empty spots
  let emptySpots = [];
  for (let i = 0; i < btnRef.length; i++) {
    if (btnRef[i].innerText === "") {
      emptySpots.push(i);
    }
  }
  // Choose a random empty spot
  let randomIndex = Math.floor(Math.random() * emptySpots.length);
  let aiMoveIndex = emptySpots[randomIndex];
  
  // Make AI move
  btnRef[aiMoveIndex].innerText = 'A';
  btnRef[aiMoveIndex].disabled = true;
  count++;
  xTurn = true;
  turnIndicator.textContent = "Now Turn: H(Human)";

  // Check for win after AI move
  winChecker();
  if (count === 9) {
    drawFunction();
  }
};

// Display X/O on click (Human Player)
btnRef.forEach((element) => {
  element.addEventListener("click", () => {
    if (xTurn && element.innerText === "") {
      xTurn = false;
      // Display X
      element.innerText = "H";
      element.disabled = true;
      turnIndicator.textContent = "Now Turn: Ai(A)";

      // Check for win after human move
      count++;
      winChecker();
      if (count === 9) {
        drawFunction();
      }

      // AI makes move after human player
      setTimeout(makeAiMove, 500); // Delay for visual clarity (optional)
    }
  });
});

// Enable Buttons and disable popup on page load
window.onload = enableButtons;

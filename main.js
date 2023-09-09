let btn = document.querySelectorAll(".button-option");
let popup = document.querySelector(".popup");
let newGameBtn = document.querySelector(".new-game");
let restBtn = document.querySelector(".res");
let msgBtn = document.querySelector(".msg");
let title = document.querySelector(".title");

// who the player winning

let winningPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// x paly
let xTurn = true;
let count = 0;

const disabledButton = () => {
  btn.forEach((element) => (element.disabled = true));
  popup.classList.remove("hide");
};

// who is win
const theWinner = (letter) => {
  disabledButton();
  if (letter === "x") {
    // Insert the icon for "x" wins
    msgBtn.innerHTML =
      '<i class="fa-solid fa-face-smile-wink" style="color: #d8d113;"></i> X wins';
  } else if (letter === "o") {
    // Insert the icon for "o" wins
    msgBtn.innerHTML =
      '<i class="fa-solid fa-face-smile-wink" style="color: #d8d113;"></i> O wins';
  }
};

const winCheck = () => {
  for (let i of winningPattern) {
    let [e1, e2, e3] = [
      btn[i[0]].innerText,
      btn[i[1]].innerText,
      btn[i[2]].innerText,
    ];
    if (e1 != "" && e2 != "" && e3 != "") {
      if (e1 == e2 && e2 == e3) {
        theWinner(e1);
      }
    }
  }
};

btn.forEach((element) => {
  element.addEventListener("click", () => {
    if (!element.innerText) {
      // Check if the button is empty
      if (xTurn) {
        xTurn = false;
        // player x
        element.innerText = "x";
        element.disabled = true; // Disable the button after clicking
        title.innerText = "Player O";
      } else {
        xTurn = true;
        // player o
        element.innerText = "o";
        element.disabled = true; // Disable the button after clicking
        title.innerText = "Player X";
      }
      count += 1;
      if (count === 9) {
        // Handle a draw here
        draw();
      }
      winCheck();
    }
  });
});

//Enable all buttons (For New Game and Restart)
const enableButtons = () => {
  btn.forEach((element) => {
    element.innerText = "";
    element.disabled = false;
  });
  //disable popup
  popup.classList.add("hide");
};

newGameBtn.addEventListener("click", () => {
  count = 0;
  enableButtons();
});

restBtn.addEventListener("click", () => {
  count = 0;
  enableButtons();
});

const draw = () => {
  disabledButton();
  msgBtn.innerHTML =
    '<i class="fa-solid fa-face-grin-beam-sweat" style="color: #d8d113;"></i> Its a Draw';
};

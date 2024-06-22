let boxes = document.querySelectorAll(".box");
let para = document.getElementById("msg");
let new_btn = document.querySelector(".new_game");
let reset_btn = document.querySelector(".reset-btn");
let displayWinner = document.querySelector(".msg-box");

let winnerPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

let checkWinner = () => {
  for (patterns of winnerPatterns) {
    let pos1 = boxes[patterns[0]].innerText;
    let pos2 = boxes[patterns[1]].innerText;
    let pos3 = boxes[patterns[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        disabledbtn();
        showWinner(pos1);
      }
    }
  }
};

let showWinner = (pos1) => {
  let winner = `Congratulations Winner is: ${pos1}`;
  para.innerText = winner;
  new_btn.classList.remove("hide");
  displayWinner.classList.add("msg-box-2");
  displayWinner.classList.remove("msg-box");
};

let disabledbtn = () => {
  for (box of boxes) {
    box.disabled = true;
  }
};
let enabledbtn = () => {
  for (box of boxes) {
    box.disabled = false;
    box.innerText = " ";
  }
  displayWinner.classList.add("msg-box");
  displayWinner.classList.remove("msg-box-2");
  new_btn.classList.add("hide");
  para.innerText = "";
};

let turn0 = true;
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerHTML = "O";
      turn0 = false;
    } else {
      box.innerHTML = "X";
      turn0 = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

new_btn.addEventListener("click", enabledbtn);
reset_btn.addEventListener("click", enabledbtn);

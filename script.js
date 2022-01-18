"use strict";

const container = document.createElement("div");
container.setAttribute("id", "container");
const header = document.createElement("div");
header.setAttribute("id", "header");
container.appendChild(header);
const contentWrap = document.createElement("div");
const drawBoard = document.createElement("div");
drawBoard.setAttribute("id", "drawBoard");
contentWrap.appendChild(drawBoard);
const controls = document.createElement("div");
controls.setAttribute("id", "controls");
contentWrap.appendChild(controls);
container.appendChild(contentWrap);
document.body.appendChild(container);

function createBoard() {
  for (let x = 0; x < 64; x++) {
    let board = document.createElement("div");
    board.className = "pixel";
    board.textContent = "abc";
    document.getElementById("drawBoard").appendChild(board);
  }
}

createBoard();

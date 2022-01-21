"use strict";

const container = document.createElement("div");
container.setAttribute("id", "container");
const header = document.createElement("div");
header.setAttribute("id", "header");
header.textContent = "CSS drawboard";
container.appendChild(header);
const contentWrap = document.createElement("div");
contentWrap.setAttribute("id", "contentWrap");
const drawBoard = document.createElement("div");
drawBoard.setAttribute("id", "drawBoard");
contentWrap.appendChild(drawBoard);
const controls = document.createElement("div");
controls.setAttribute("id", "controls");
controls.setAttribute("class", "controls");
const askSize = document.createElement("input");
askSize.setAttribute("type", "number");
askSize.setAttribute("id", "askSize");
askSize.setAttribute("value", "5");
controls.appendChild(askSize);
const sizeBtn = document.createElement("button");
sizeBtn.setAttribute("onclick", "createBoard()");
sizeBtn.textContent = "Board size";
controls.appendChild(sizeBtn);
contentWrap.appendChild(controls);
container.appendChild(contentWrap);
document.body.appendChild(container);

window.onresize = sizeBoardWrap();

function sizeBoardWrap() {
  const vwprtHght = window.innerHeight;
  const vwprtWdth = window.innerWidth;
  let vwprtSize = Math.min(vwprtHght, vwprtWdth);
  document.getElementById("drawBoard").style.width = vwprtSize * 0.85 + "px";
  document.getElementById("drawBoard").style.height = vwprtSize * 0.85 + "px";
  if (vwprtHght > vwprtWdth) {
    document.getElementById("contentWrap").style.flexDirection = "column";
    document.getElementById("controls").style.width = vwprtSize * 0.85 + "px";
  } else {
    document.getElementById("controls").style.height = vwprtSize * 0.85 + "px";
  }
}

sizeBoardWrap();

function createBoard() {
  const myNode = document.getElementById("drawBoard");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }
  const size = Math.abs(document.getElementById("askSize").value);
  if (size == isNaN || size > 256 || size < 1) {
    alert("Enter numbers between 1 and 256!");
  } else {
    for (let x = 0; x < size; x++) {
      let row = document.createElement("div");
      row.id = "row";
      for (let y = 0; y < size; y++) {
        let pixel = document.createElement("div");
        pixel.className = "pixel";
        row.appendChild(pixel);
      }
      document.getElementById("drawBoard").appendChild(row);
    }
  }
}

createBoard();

let brd = document.getElementById("drawBoard");
brd.addEventListener("pointerdown", function () {
  brd.addEventListener(
    "pointerover",
    function (event) {
      event.target.style.background = "orange";
      /**setTimeout(function () {
        event.target.style.background = "";
      }, 15000);**/
    },
    false
  );
});

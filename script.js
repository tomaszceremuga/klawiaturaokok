const keys = document.querySelectorAll("button");
const spaceBtn = document.querySelector(".space-btn");
const leftShiftBtn = document.querySelector(".left-shift-btn");
const rightShiftBtn = document.querySelector(".right-shift-btn");
const altBtn = document.querySelector(".alt-btn");
const eBtn = document.querySelector(".e-button");
const oBtn = document.querySelector(".o-button");
const aBtn = document.querySelector(".a-button");
const sBtn = document.querySelector(".s-button");
const zBtn = document.querySelector(".z-button");
const cBtn = document.querySelector(".c-button");
const xBtn = document.querySelector(".x-button");
const lBtn = document.querySelector(".l-button");
const input = document.querySelector(".users-text");

let text = "";

const symbols = [""];
keys.forEach((key) => {
  let symbol = "";
  symbol = key.textContent;
  symbols.push(symbol);
});

document.addEventListener("keydown", (e) => {
  console.log(e);
  if (e.key === " ") {
    text += " ";
    input.textContent = text;
    spaceBtn.style.transform = "scale(0.9) translate(0, 6px )";
  } else if (e.key == "Backspace") {
    text = text.slice(0, -1);
    input.textContent = text;
  } else if (e.code == "ShiftLeft") {
    leftShiftBtn.style.transform = "scale(0.9) translate(0, 6px )";
  } else if (e.code == "ShiftRight") {
    rightShiftBtn.style.transform = "scale(0.9) translate(0, 6px )";
  } else if (e.code == "AltRight") {
    altBtn.style.transform = "scale(0.9) translate(0, 6px )";
  } else if (e.key == "ę") {
    text += "ę";
    input.textContent = text;
    eBtn.style.transform = "scale(0.9) translate(0,6px)";
  } else if (e.key == "Ę") {
    text += "Ę";
    input.textContent = text;
    eBtn.style.transform = "scale(0.9) translate(0,6px)";
  } else if (e.key == "ó") {
    text += "ó";
    input.textContent = text;
    oBtn.style.transform = "scale(0.9) translate(0,6px)";
  } else if (e.key == "Ó") {
    text += "Ó";
    input.textContent = text;
    oBtn.style.transform = "scale(0.9) translate(0,6px)";
  } else if (e.key == "ą") {
    text += "ą";
    input.textContent = text;
    aBtn.style.transform = "scale(0.9) translate(0,6px)";
  } else if (e.key == "Ą") {
    text += "Ą";
    input.textContent = text;
    aBtn.style.transform = "scale(0.9) translate(0,6px)";
  } else if (e.key == "ś") {
    text += "ś";
    input.textContent = text;
    sBtn.style.transform = "scale(0.9) translate(0,6px)";
  } else if (e.key == "Ś") {
    text += "Ś";
    input.textContent = text;
    sBtn.style.transform = "scale(0.9) translate(0,6px)";
  } else if (e.key == "ż") {
    text += "ż";
    input.textContent = text;
    zBtn.style.transform = "scale(0.9) translate(0,6px)";
  } else if (e.key == "Ż") {
    text += "Ż";
    input.textContent = text;
    zBtn.style.transform = "scale(0.9) translate(0,6px)";
  } else if (e.key == "ć") {
    text += "ć";
    input.textContent = text;
    cBtn.style.transform = "scale(0.9) translate(0,6px)";
  } else if (e.key == "Ć") {
    text += "Ć";
    input.textContent = text;
    cBtn.style.transform = "scale(0.9) translate(0,6px)";
  } else if (e.key == "ł") {
    text += "ł";
    input.textContent = text;
    lBtn.style.transform = "scale(0.9) translate(0,6px)";
  } else if (e.key == "Ł") {
    text += "Ł";
    input.textContent = text;
    lBtn.style.transform = "scale(0.9) translate(0,6px)";
  } else if (e.key == "ź") {
    text += "ź";
    input.textContent = text;
    xBtn.style.transform = "scale(0.9) translate(0,6px)";
  } else if (e.key == "Ź") {
    text += "Ź";
    input.textContent = text;
    xBtn.style.transform = "scale(0.9) translate(0,6px)";
  } else {
    for (let i = 0; i < symbols.length; i++) {
      if (e.key.toUpperCase() == symbols[i]) {
        text += e.key;
        input.textContent = text;
        keys[i - 1].style.transform = "scale(0.9) translate(0px, 6px)";
      }
    }
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key === " ") {
    spaceBtn.style.transform = "scale(1) translate(0, 0)";
  } else if (e.code == "ShiftLeft") {
    leftShiftBtn.style.transform = "scale(1) translate(0, 0 )";
  } else if (e.code == "ShiftRight") {
    rightShiftBtn.style.transform = "scale(1) translate(0, 0 )";
  } else if (e.code == "AltRight") {
    altBtn.style.transform = "scale(1) translate(0, 0 )";
  } else {
    for (let i = 0; i < symbols.length; i++) {
      if (e.key.toUpperCase() == symbols[i]) {
        keys[i - 1].style.transform = "scale(1) translate(0px, 0px)";
      }
    }
  }
});

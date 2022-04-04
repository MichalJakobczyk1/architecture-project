import "../scss/main.scss";
import "../js/functions";

let AX = document.querySelector(".section__paragraph--registers-AX");
let BX = document.querySelector(".section__paragraph--registers-BX");
let CX = document.querySelector(".section__paragraph--registers-CX");
let DX = document.querySelector(".section__paragraph--registers-DX");

const registersRandom = document.querySelector(
  ".section__button--random-register"
);
const registersReset = document.querySelector(
  ".section__button--reset-register"
);
registersRandom.addEventListener("click", () => {
  const randomValueAX = Math.floor(Math.random() * 16777215)
    .toString(16)
    .substring(0, 4);
  const randomValueBX = Math.floor(Math.random() * 16777215)
    .toString(16)
    .substring(0, 4);
  const randomValueCX = Math.floor(Math.random() * 16777215)
    .toString(16)
    .substring(0, 4);
  const randomValueDX = Math.floor(Math.random() * 16777215)
    .toString(16)
    .substring(0, 4);
  AX.innerHTML = randomValueAX.toUpperCase();
  BX.innerHTML = randomValueBX.toUpperCase();
  CX.innerHTML = randomValueCX.toUpperCase();
  DX.innerHTML = randomValueDX.toUpperCase();
});
registersReset.addEventListener("click", () => {
  AX.innerHTML = 0;
  BX.innerHTML = 0;
  CX.innerHTML = 0;
  DX.innerHTML = 0;
});

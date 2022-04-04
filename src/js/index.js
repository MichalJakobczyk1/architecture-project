import "../scss/main.scss";
import { mov, xchg } from "./another";

//rejestry
let AX = document.querySelector(".section__paragraph--registers-AX");
let BX = document.querySelector(".section__paragraph--registers-BX");
let CX = document.querySelector(".section__paragraph--registers-CX");
let DX = document.querySelector(".section__paragraph--registers-DX");

//mov/xchg
const movAXBX = document.querySelector(".section__button--movAXBX");
const movAXCX = document.querySelector(".section__button--movAXCX");
const movAXDX = document.querySelector(".section__button--movAXDX");
const xchgAXBX = document.querySelector(".section__button--xchgAXBX");
const xchgAXCX = document.querySelector(".section__button--xchgAXCX");
const xchgAXDX = document.querySelector(".section__button--xchgAXDX");

//rejestry random/reset
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

//mov/xchg buttony
movAXBX.addEventListener("click", () => {
  mov(AX, BX);
});
movAXCX.addEventListener("click", () => {
  mov(AX, CX);
});
movAXDX.addEventListener("click", () => {
  mov(AX, DX);
});
xchgAXBX.addEventListener("click", () => {
  xchg(AX, BX);
});
xchgAXCX.addEventListener("click", () => {
  xchg(AX, CX);
});
xchgAXDX.addEventListener("click", () => {
  xchg(AX, DX);
});

import "../scss/main.scss";
import { mov, xchg } from "./another";

//rejestry
let AX = document.querySelector(".section__paragraph--registers-AX");
let BX = document.querySelector(".section__paragraph--registers-BX");
let CX = document.querySelector(".section__paragraph--registers-CX");
let DX = document.querySelector(".section__paragraph--registers-DX");

//mov/xchg
//AX
const movAXBX = document.querySelector(".section__button--movAXBX");
const movAXCX = document.querySelector(".section__button--movAXCX");
const movAXDX = document.querySelector(".section__button--movAXDX");
const xchgAXBX = document.querySelector(".section__button--xchgAXBX");
const xchgAXCX = document.querySelector(".section__button--xchgAXCX");
const xchgAXDX = document.querySelector(".section__button--xchgAXDX");

//BX
const movBXAX = document.querySelector(".section__button--movBXAX");
const movBXCX = document.querySelector(".section__button--movBXCX");
const movBXDX = document.querySelector(".section__button--movBXDX");
const xchgBXAX = document.querySelector(".section__button--xchgBXAX");
const xchgBXCX = document.querySelector(".section__button--xchgBXCX");
const xchgBXDX = document.querySelector(".section__button--xchgBXDX");

//CX
const movCXAX = document.querySelector(".section__button--movCXAX");
const movCXBX = document.querySelector(".section__button--movCXBX");
const movCXDX = document.querySelector(".section__button--movCXDX");
const xchgCXAX = document.querySelector(".section__button--xchgCXAX");
const xchgCXBX = document.querySelector(".section__button--xchgCXBX");
const xchgCXDX = document.querySelector(".section__button--xchgCXDX");

//DX
const movDXAX = document.querySelector(".section__button--movDXAX");
const movDXBX = document.querySelector(".section__button--movDXBX");
const movDXCX = document.querySelector(".section__button--movDXCX");
const xchgDXAX = document.querySelector(".section__button--xchgDXAX");
const xchgDXBX = document.querySelector(".section__button--xchgDXBX");
const xchgDXCX = document.querySelector(".section__button--xchgDXCX");

//rejestry random/reset
let randomValueAX = 0;
const registersRandom = document.querySelector(
  ".section__button--random-register"
);
const registersReset = document.querySelector(
  ".section__button--reset-register"
);
registersRandom.addEventListener("click", () => {
  randomValueAX = Math.floor(Math.random() * 16777215)
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
//AX
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
//BX
movBXAX.addEventListener("click", () => {
  mov(BX, AX);
});
movBXCX.addEventListener("click", () => {
  mov(BX, CX);
});
movBXDX.addEventListener("click", () => {
  mov(BX, DX);
});
xchgBXAX.addEventListener("click", () => {
  xchg(BX, AX);
});
xchgBXCX.addEventListener("click", () => {
  xchg(BX, CX);
});
xchgBXDX.addEventListener("click", () => {
  xchg(BX, DX);
});
//CX
movCXAX.addEventListener("click", () => {
  mov(CX, AX);
});
movCXBX.addEventListener("click", () => {
  mov(CX, BX);
});
movCXDX.addEventListener("click", () => {
  mov(CX, DX);
});
xchgCXAX.addEventListener("click", () => {
  xchg(CX, AX);
});
xchgCXBX.addEventListener("click", () => {
  xchg(CX, BX);
});
xchgCXDX.addEventListener("click", () => {
  xchg(CX, DX);
});
//DX
movDXAX.addEventListener("click", () => {
  mov(DX, AX);
});
movDXBX.addEventListener("click", () => {
  mov(DX, BX);
});
movDXCX.addEventListener("click", () => {
  mov(DX, CX);
});
xchgDXAX.addEventListener("click", () => {
  xchg(DX, AX);
});
xchgDXBX.addEventListener("click", () => {
  xchg(DX, BX);
});
xchgDXCX.addEventListener("click", () => {
  xchg(DX, CX);
});

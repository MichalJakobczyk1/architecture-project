export function mov(firstRegister, secondRegister) {
  if (firstRegister.innerHTML != 0) {
    secondRegister.innerHTML = firstRegister.innerHTML;
  }
}
export function xchg(firstRegister, secondRegister) {
  const temp = firstRegister.innerHTML;
  firstRegister.innerHTML = secondRegister.innerHTML;
  secondRegister.innerHTML = temp;
}

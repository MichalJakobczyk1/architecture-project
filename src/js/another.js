export function mov(firstRegister, secondRegister) {
  if (firstRegister.innerHTML != 0) {
    firstRegister.innerHTML = secondRegister.innerHTML;
  }
}
export function xchg(firstRegister, secondRegister) {
  const temp = firstRegister.innerHTML;
  firstRegister.innerHTML = secondRegister.innerHTML;
  secondRegister.innerHTML = temp;
}

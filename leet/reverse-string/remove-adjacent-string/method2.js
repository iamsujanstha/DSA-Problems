function removeTwoAdjacentStr(str) {
  if (!str) return '';

  let stack = [];
  for (let char of [...str]) {
    if (char !== stack[stack.length - 1]) {
      stack.push(char)
    }
    else {
      stack.pop();
    }
  }
  return stack.join();
}

console.log(removeTwoAdjacentStr("Mississippi"))

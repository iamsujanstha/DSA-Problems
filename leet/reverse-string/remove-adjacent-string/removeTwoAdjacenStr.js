function removeTwoAdjacentStr(str) {
  if (!str) return '';
  let strLen = str.length;
  let stack = [];
  let i = 0;
  while (i < strLen) {
    if (str[i] !== str[i + 1]) {
      stack.push(str[i]);
      i++;
    }
    else {
      i += 2;
    }
  }

  let newStr = stack.join('');

  // Base case: if the new string is the same as the original, stop recursion
  if (newStr === str) {
    return newStr;
  }


  return removeTwoAdjacentStr(stack.join(''));
}

console.log(removeTwoAdjacentStr("Mississippi"))
function reverseString(str) {
  let stack = [];
  let strLen = [...str].length;
  let reversedStr = '';
  for (let i = 0; i < strLen; i++) {
    stack.push(str[i]);
  }
  for (let i = 0; i < strLen; i++) {
    reversedStr += stack.pop();
  }
  return reversedStr;
}

console.log(reverseString('asdf'))
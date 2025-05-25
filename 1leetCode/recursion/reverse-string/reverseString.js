function reverseString(str) {
  if (str.length === 0) return str;

  let smallOp = reverseString(str.slice(1));

  return smallOp + str[0]
}

console.log(reverseString('Hello World'))
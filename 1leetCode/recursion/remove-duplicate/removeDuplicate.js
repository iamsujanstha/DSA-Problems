function removeConsecutiveDuplicate(str) {
  //base case
  if (str.length === 0) return '';

  //recursive case
  let smallOp = removeConsecutiveDuplicate(str.slice(1));

  if (str[0] === str[1]) {
    return smallOp
  }

  return str[0] + smallOp;
}

console.log(removeConsecutiveDuplicate("Hello Woorld"))
function removeCharacter(str, removeChar) {
  if (str.length === 0) return '';

  let smallOp = removeCharacter(str.slice(1), removeChar);

  if (str[0] !== removeChar) return str[0] + smallOp;

  return smallOp;

}

console.log(removeCharacter('Hello World', 'o'))
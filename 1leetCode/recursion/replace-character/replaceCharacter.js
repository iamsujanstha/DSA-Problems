function replaceCharacter(str, char, replacedBy) {
  // Base case: when the string is empty, return an empty string
  if (str.length === 0) return '';

  // Process the first character
  const firstChar = str[0] === char ? replacedBy : str[0];

  let smallOp = replaceCharacter(str.slice(1), char, replacedBy)

  // Recursive case: process the rest of the string
  return firstChar + smallOp;
}


console.log(replaceCharacter('hello world', 'o', 'x'));

function countOccurenceCharacter(str, char) {
  if (str.length === 0) return str;

  let smallOp = countOccurenceCharacter(str.slice(1), char)

  if (str[0] === char) {
    smallOp++;
  }


  return smallOp;
}

console.log(countOccurenceCharacter("hello there", 'e'))
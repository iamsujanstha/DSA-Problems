function lengthOfLastWord(str) {
  const strLen = [...str].length;

  let i = 0;
  let count = 0;
  while (i < strLen) {
    if (str[i] !== ' ') {
      count++;
      i++;
    }
    else {
      i++;
      count = 0;
    }
  }

  return count;

}

console.log(lengthOfLastWord("Hello   World"))
// Iterate from first to last character of the string
// Processes every character from the start, even though the last word is near the end
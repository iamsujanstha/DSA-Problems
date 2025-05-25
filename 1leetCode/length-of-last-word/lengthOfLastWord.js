// To pick last word, iterate last word to find the length

function lengthOfLastWord(str) {
  let strLen = [...str].length
  let count = 0;
  for (let i = strLen - 1; i <= strLen; i--) {
    if (str[i] === ' ') return count;
    count++
  }
  return count;
}

console.log(lengthOfLastWord("Hello World"))
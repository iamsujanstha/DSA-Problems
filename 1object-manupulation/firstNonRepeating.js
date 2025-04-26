function firstNonRepeating(word) {
  let result = {};
  for (let i of word) {
    result[i] = (result[i] || 0) + 1
  }

  for (let char of word) {
    if (result[char] === 1) {
      return char;
    }
  }

  return null;
}

console.log(firstNonRepeating('swiss'))
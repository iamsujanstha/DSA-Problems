function countVowels(str) {
  const vowels = 'aeiou'
  let count = 0;
  for (word of str.split('')) {
    if ([...vowels].includes(word.toLowerCase())) count++;
  }
  return count;
}

console.log(countVowels("Hey JS! You Are amazing"))

module.exports = { countVowels }
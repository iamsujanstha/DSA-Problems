function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  let count = 0;
  for (word of str.split('')) {
    if (vowels.includes(word.toLowerCase())) count++;
  }
  return count;
}

console.log(countVowels("Hey JS! You Are amazing"))
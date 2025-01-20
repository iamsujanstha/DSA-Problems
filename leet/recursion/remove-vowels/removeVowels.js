function removeVowels(str) {
  //base case
  if (str.length === 0) return '';

  let vowels = 'aeiou';
  let strWithoutVowels = [];

  if (!vowels.includes(str[0])) {
    strWithoutVowels.push(str[0])
  }

  let smallOp = removeVowels(str.slice(1));

  return strWithoutVowels.concat(smallOp).join('')
}

console.log(removeVowels("This is new world"))
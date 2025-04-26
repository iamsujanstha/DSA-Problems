function findVowels(str) {
  //base case
  if (str.length === 0) return str;

  let strWithVowels = [];

  if ('aeiou'.includes(str[0])) {
    strWithVowels.push(str[0])
  }

  let smallOp = findVowels(str.slice(1));

  return strWithVowels.concat(smallOp).join('')
}

console.log(findVowels('This is world'))
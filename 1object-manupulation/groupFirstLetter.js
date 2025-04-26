const words = [
  "apple", "apricot", "banana", "apple",
  "blueberry", "avocado", "banana", "cherry", "cherry", "coconut"
];
/* {
  a: { apple: 2, apricot: 1, avocado: 1 },
  b: { banana: 2, blueberry: 1 },
  c: { cherry: 2, coconut: 1 }
}
 */
function groupFirstLetter(words) {
  let result = {};
  for (let word of words) {
    const firstLetter = word[0];
    if (!result[firstLetter]) {
      result[firstLetter] = {}
    }
    if (!result[firstLetter][word]) {
      result[firstLetter][word] = 1;
    }
    else {
      result[firstLetter][word] += 1;
    }
  }

  return result;
}

console.log(groupFirstLetter(words))
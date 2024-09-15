function countRepeatedWord(str) {
  return [...str].reduce((countObj, word) => {
    if (!countObj[word]) {
      countObj[word] = 1;
    }
    countObj[word]++;

    return countObj;
  }, {})
}

console.log(countRepeatedWord('This is alpha'))
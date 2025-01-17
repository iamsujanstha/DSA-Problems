function countRepeatedWord(str) {
  return [...str].reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 1;
    }
    acc[curr]++;

    return acc;
  }, {})
}

console.log(countRepeatedWord('This is alpha'))
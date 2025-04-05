function countRepeatedWord(str) {
  return [...str].reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 0;
    }
    acc[curr]++;

    return acc;
  }, {})
}

module.exports = { countRepeatedWord }
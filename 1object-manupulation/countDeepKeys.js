const data = {
  a: 1,
  b: {
    b1: {
      b11: 2,
      b12: {
        b121: 3
      }
    },
    b2: 4
  },
  c: 5,
  f: 3
};

function countDeepKeys(data) {
  count = 0
  for (let key in data) {
    count += 1;
    if (typeof data[key] === 'object') {
      count += countDeepKeys(data[key], count)
    }
  }
  return count;
}

console.log(countDeepKeys(data))
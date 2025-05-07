const data = { a: 1, b: null, c: 2, d: null };

function removeProperties(data, key) {
  let result = {};
  for (let i in data) {
    if (data[i] !== key) {
      result[i] = data[i];
    }
  }

  return result;
}

console.log(removeProperties(data, null))
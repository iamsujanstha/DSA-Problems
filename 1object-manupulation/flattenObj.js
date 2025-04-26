const input = {
  user: {
    name: "Alice",
    address: {
      city: "Wonderland",
      zip: 12345
    }
  },
  age: 30
};
/* {
  "user.name": "Alice",
  "user.address.city": "Wonderland",
  "user.address.zip": 12345,
  "age": 30
}
 */
function flatenObj(input, parentKey = '', result = {}) {
  for (let key in input) {
    const newKey = parentKey ? `${parentKey}.${key}` : key;
    if (typeof input[key] === 'object') {
      flatenObj(input[key], newKey, result)
    } else {
      result[newKey] = input[key]
    }
  }

  return result;
}

console.log(flatenObj(input))
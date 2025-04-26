const data = {
  name: "Alice",
  info: {
    age: 25,
    contact: {
      email: "alice@example.com",
      phone: "1234567890"
    }
  },
  active: true
};


function countKeys(data) {
  let count = 0;
  for (let key in data) {
    count++
    if (typeof data[key] === 'object') {
      count += countKeys(data[key])
    }
  }
  return count;
}

console.log(countKeys(data))
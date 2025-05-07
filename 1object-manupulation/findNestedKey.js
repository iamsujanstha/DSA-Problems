const data = {
  id: 1,
  name: "John",
  details: {
    age: 30,
    address: {
      city: "New York",
      zip: 10001
    }
  }
};

function findNestedkey(data, key) {
  for (let item in data) {
    if (item === key) {
      return data[item];
    }
    if (typeof data[item] === 'object') {
      const result = findNestedkey(data[item], key);
      if (result !== undefined) {
        return result; // early return only when match is found in deeper level
      }

    }
  }
  return undefined;
}

console.log(findNestedkey(data, "city"))
const input = {
  name: "Alice",
  age: 30,
  active: true,
  meta: {
    created: "2023-01-01"
  },
  tags: ["dev", "js"],
};

function filterByType(input, type) {
  let result = {};
  for (let item in input) {
    if (typeof input[item] === type) {
      result[item] = input[item];
    }
  }

  return result;
}

console.log(filterByType(input, "object"));

const params = {
  name: "John Doe",
  age: 30,
  city: "New York"
};

function toQueryString(params) {
  return Object.keys(params).reduce((acc, curr) => {
    acc.push(`${curr}=${encodeURIComponent(params[curr])}`);
    return acc;
  }, []).join('&')
}

console.log(toQueryString(params));
// Output: "name=John%20Doe&age=30&city=New%20York"
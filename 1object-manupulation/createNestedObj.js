
function createNestedObj(keys, val) {
  const keysArr = keys.split('.');
  const result = {}
  keysArr.reduce((acc, curr, index) => {
    acc[curr] = index === keysArr.length - 1 ? val : {};
    console.log(result)
    return acc[curr];
  }, result)

  return result;
}

console.log(createNestedObj('a.b.c', 10));

/* {
  a: {
    b: {
      c: 10
    }
  }
}
 */
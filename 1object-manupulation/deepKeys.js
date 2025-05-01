const obj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3
    }
  },
  f: {
    g: 4
  }
};
/* ['a', 'b.c', 'b.d.e', 'f.g']
 */
function deepKeys(obj, parentKey = '') {
  return Object.keys(obj).reduce((acc, curr) => {
    const currentKey = parentKey ? `${parentKey}.${curr}` : curr;
    if (typeof obj[curr] === 'object') {
      acc = acc.concat(deepKeys(obj[curr], currentKey)); //here acc.concat() return array so need to store so acc= acc.concat()
    } else {
      acc.push(currentKey);
    }
    return acc;
  }, [])
}

console.log(deepKeys(obj))
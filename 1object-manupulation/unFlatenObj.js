function unFlatenObj(obj, parentKey = '') {
  let result = {};
  for (let key in obj) {
    let currentKey = parentKey ? `${parentKey}.${key}` : key;
    if (typeof obj[key] !== 'object' && !Array.isArray(obj[key])) {
      result[currentKey] = obj[key]
    }
    else if (typeof obj[key] === 'object') {
      Object.assign(result, unFlatenObj(obj[key], currentKey))
    } else if (Array.isArray(obj[key])) {
      for (let i = 0; i < obj[key].length; i++) {
        const arrKey = `${key}.${i}`;
        result[arrKey] = obj[key][i]
      }
    }
  }
  return result
}

const input = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3
    }
  },
  f: [4, 5]
};

console.log(unFlatenObj(input))

/* {
  "a": 1,
  "b.c": 2,
  "b.d.e": 3,
  "f.0": 4,
  "f.1": 5
}
 */
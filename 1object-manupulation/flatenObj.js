const obj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3
    }
  }
};

/* {
  'a': 1,
  'b.c': 2,
  'b.d.e': 3
}
 */

function flatenObj(obj, parentKey = '') {
  let result = {};
  for (let key in obj) {
    let currentKey = parentKey ? `${parentKey}.${key}` : key;
    if (typeof obj[key] === 'object') {
      Object.assign(result, flatenObj(obj[key], currentKey)) //mutate the object
    } else {
      result[currentKey] = obj[key];
    }
  }

  return result;
}

console.log(flatenObj(obj))
function flatenArray(arr) {
  let result = [];
  for (let i of arr) {
    if (Array.isArray(i)) {
      result.push(flatenArray(i));
    }
    else {
      result.push(i);
    }
  }
  return result;
}

console.log(flatenArray([1, [2, [3, 4], 5], 6]))
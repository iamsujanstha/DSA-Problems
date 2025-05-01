const data = [1, [2, 3], [4, [5, 6]]]

function flatenArray(arr) {
  if (arr.length === 0) return [arr];
  let result = []
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      result = result.concat(flatenArray(item))
    } else {
      result.push(item);
    }
  })

  return result;
}
// const flattenArray = (arr) =>
//   arr.reduce((acc, item) =>
//     acc.concat(Array.isArray(item) ? flattenArray(item) : item)
//     , []);

console.log(flatenArray(data))


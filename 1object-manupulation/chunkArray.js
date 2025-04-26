const arr = [1, 2, 3, 4, 5, 6, 7];
const size = 3;

/* output: [[1, 2, 3], [4, 5, 6], [7]]
 */

function chunkArray(arr, size) {
  const result = [];

  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }

  return result;
}


console.log(chunkArray(arr, size))
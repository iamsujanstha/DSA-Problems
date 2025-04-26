const input = [1, [2, 3], [4, [5, 6]], 7, [8, 10]];

function deepCount(input) {
  let count = 0;
  input.forEach((item) => {
    if (!Array.isArray(item)) {
      count += 1;
    } else {
      count += deepCount(item)
    }
  })
  return count;
}

console.log(deepCount(input))
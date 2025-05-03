const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

function largestRow(matrix) {
  let result = [];
  for (let row of matrix) {
    let maxItem = row[0];
    for (let i = 1; i < row.length; i++) {
      if (row[i] > maxItem) maxItem = row[i];
    }
    result.push(maxItem)
  }

  return result;
}

console.log(largestRow(matrix))
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

/* [1, 2, 3, 6, 5, 4, 7, 8, 9]
 */

function snakeMatrix(matrix) {
  let result = [];
  for (let row = 0; row < matrix.length; row++) {
    let currentRow = matrix[row];
    if (row % 2 === 1) {
      result.push(...currentRow.reverse())
    }
    else {
      result.push(...currentRow)
    }
  }
  return result;
}

console.log(snakeMatrix(matrix))
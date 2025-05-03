const matrix = [
  [1, 2, 3],
  [4, 0, 6],
  [7, 8, 9]
]

// If any element in the matrix is 0, set its entire row and column to 0. Do this in -place
/* Output:
[
  [1, 0, 3],
  [0, 0, 0],
  [7, 0, 9]
] */

function setMatrixZeros(matrix) {
  const rows = new Set();
  const cols = new Set();

  //First pass: Records rows and cols that need to be zeros
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        rows.add(i);
        cols.add(j);
      }
    }
  }

  // Second pass: set rows to zero
  for (let i of rows) {
    for (let j = 0; j < matrix[0].length; j++) {
      matrix[i][j] = 0;
    }
  }

  // Third pass: set columns to zero
  for (let j of cols) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][j] = 0;
    }
  }

  return matrix;
}

console.log(setMatrixZeros(matrix))
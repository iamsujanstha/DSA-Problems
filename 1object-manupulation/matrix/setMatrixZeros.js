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
}

console.log(setMatrixZeros(matrix))
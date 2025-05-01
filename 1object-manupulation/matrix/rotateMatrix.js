const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

/* [
  [7, 4, 1],
  [8, 5, 2],
  [9, 6, 3]
]
 */

function rotateMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix.length; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  for (let item of matrix) {
    item.reverse();
  }
  return matrix
}

console.log(rotateMatrix(matrix))
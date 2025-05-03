const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

function twoDiagonalSum(matrix) {
  let sum = 0;
  //first diagonal
  for (let i = 0; i < matrix.length; i++) {
    sum += matrix[i][i];
  }

  //second diagonal
  for (let j = matrix[0].length - 1; j >= 0; j--) {
    if (j === 1) continue;
    sum += matrix[j][j]
  }

  return sum;
}

console.log(twoDiagonalSum(matrix))
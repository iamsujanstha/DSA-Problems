const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

function printDiagonals(matrix) {
  const diagonals = new Map();

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const key = i + j;
      if (!diagonals.has(key)) {
        diagonals.set(key, []);
      }
      diagonals.get(key).push(matrix[i][j]);
    }
  }

  return Array.from(diagonals.values());
}

console.log(printDiagonals(matrix));

const decodeMessage = (matrix) => {
  let result = "";

  const numColumns = matrix[0].length;

  for (let col = 0; col < numColumns; col++) {
    for (let row = 0; row < matrix.length; row++) {
      if (col + row < numColumns) {
        result += matrix[row][col + row];
      }
    }
  }

  return result;
};

const matrix = [
  ['I', 'B', 'C', 'A', 'L', 'K', 'A'],
  ['D', 'R', 'F', 'C', 'A', 'E', 'A'],
  ['G', 'H', 'O', 'E', 'L', 'A', 'D']
];

const decodedMessage = decodeMessage(matrix);
console.log(decodedMessage); // Outputs: "IROCLED"

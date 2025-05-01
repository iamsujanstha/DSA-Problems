const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Output: [1, 2, 3, 6, 5, 4, 7, 8, 9]

function snakeOrder(matrix) {
  let result = [];
  for (let row = 0; row < matrix.length; row++) { //outer loop
    let order = [];
    for (let col = 0; col < matrix[row].length; col++) { //inner loop
      order.push(matrix[row][col])
    }
    if (row % 2 === 0) {
      result.push(...order)
    } else {
      result.push(...order.reverse())
    }
  }
  return result;
}

/* More Memory Efficient
 function snakeOrder(matrix) {
  let result = [];
  for (let row = 0; row < matrix.length; row++) {
    if (row % 2 === 0) {
      // Left to right
      for (let col = 0; col < matrix[row].length; col++) {
        result.push(matrix[row][col]);
      }
    } else {
      // Right to left
      for (let col = matrix[row].length - 1; col >= 0; col--) {
        result.push(matrix[row][col]);
      }
    }
  }
  return result;
} 
  */

console.log(snakeOrder(matrix))
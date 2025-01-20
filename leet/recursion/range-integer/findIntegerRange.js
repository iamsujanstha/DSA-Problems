function findIntegerRange(numArr, x, y) {
  //base case
  if (numArr.length === 0) return [];

  let rangedNumbers = [];

  if (numArr[0] > x && numArr[0] < y) {
    rangedNumbers.push(numArr[0])
  }
  //recursive case
  let smallOp = findIntegerRange(numArr.slice(1), x, y);

  return rangedNumbers.concat(smallOp);

}

console.log(findIntegerRange([8, 2, 4, 5, 10, 7], 2, 9))
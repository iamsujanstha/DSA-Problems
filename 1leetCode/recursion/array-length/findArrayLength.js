function findArrayLength(arr) {
  if (arr.length === 0) return 0;

  let smallOp = findArrayLength(arr.slice(1));

  if (arr[0]) {
    smallOp++
  }

  return smallOp;
}

console.log(findArrayLength([2, 3, 5, 21, 44, 32, 100, 12]))
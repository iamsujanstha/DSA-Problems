function findProductOfMaxNum(numArr, digit) {
  if (digit === 0 || numArr.length === 0) return 1;

  let sortedArr = numArr.sort((a, b) => Math.abs(b) - Math.abs(a));
  let smallOp = findProductOfMaxNum(sortedArr.slice(1), digit - 1);

  return smallOp * sortedArr[0];



}

console.log(findProductOfMaxNum([-1, 9, 22, 3, -15, -7], 3))
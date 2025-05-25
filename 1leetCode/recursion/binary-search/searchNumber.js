function searchNumber(numArr, num) {
  //base case
  if (numArr.length === 0) return;

  if (numArr[0] === num) return num;

  //recursive case
  let smallOp = searchNumber(numArr.slice(1), num)

  return smallOp;
}

console.log(searchNumber([12, 2345, 234, 123, 20], 20))
function countZeros(num) {
  //base case
  if (num === 0) return 0;

  //recursive case
  let smallOp = countZeros(Math.floor(num / 10));

  //calculation
  let lastDigit = num % 10;
  if (lastDigit === 0) {
    return 1 + smallOp;
  }
  else {
    return smallOp;
  }
}

console.log(countZeros(1032301304))
function countDigits(num) {
  //Base Case
  if (num === 0) return 0;

  //Recursive Case
  let smallOp = countDigits(num / 10);

  return smallOp + 1;

}

console.log(countDigits(13432))
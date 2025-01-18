function sumOfDigits(num) {
  /*  1. Base case */
  if (num === 0) return 0;

  // Solve the smaller problem
  // Recursive call to solve for the number without the last digit
  // For example, if num = 12345, Math.floor(num / 10) = 1234
  // Assume (inductive hypothesis) that this recursive call correctly computes
  // the sum of the digits for the smaller number (e.g., sumOfDigits(1234) = 10).

  /*  2. recursive case */
  let smallOp = sumOfDigits(Math.floor(num / 10));

  /* 3. Calculation */
  let lastDigit = num % 10;

  return lastDigit + smallOp;
}

console.log(sumOfDigits(12345));

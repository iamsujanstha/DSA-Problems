function geoMetrySum(k) {
  // Base case: If k is 0, the geometric sum is 1 (the first term of the series: 1/2^0 = 1).
  if (k === 0) return 1;

  // Recursive case: Calculate the sum of the first (k-1) terms of the geometric series. ASSUME
  let smallOp = geoMetrySum(k - 1);

  // Calculation: Add the k-th term (1 / 2^k) to the result of the smaller problem.
  return smallOp + (1 / 2 ** k);
}

console.log(geoMetrySum(3));

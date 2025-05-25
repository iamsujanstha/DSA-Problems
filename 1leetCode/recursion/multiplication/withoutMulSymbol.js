function withoutMulSymbol(m, n) {
  //base case
  if (m === 0 || n === 0) return 0;

  //recursive case
  let smallOp = withoutMulSymbol(m, n - 1);  // m(n-1)

  //calculation 
  return m + smallOp; //m + m(n-1) => m + mn -1 => mn

}

console.log(withoutMulSymbol(5, 4))
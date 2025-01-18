function fibonacii(num) {

  // Base Case:
  if (num === 0) return 0;
  if (num === 1) return 1;

  //Asume
  let smallOp1 = fibonacii(num - 1);
  let smallOp2 = fibonacii(num - 2);

  //calculation
  return smallOp1 + smallOp2;

}

console.log(fibonacii(3))
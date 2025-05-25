function power(num, pow) {
  //Base Case
  if (pow === 0) return 1;

  //Recursive Case
  let smallOp1 = power(num, pow - 1);

  return num * smallOp1;

}

console.log(power(10, 5))
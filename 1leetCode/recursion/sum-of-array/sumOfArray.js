function sumOfArray(arr) {
  let arrLen = arr.length;
  //base case
  if (arrLen === 0) return 0;

  //recursive case
  let smallOp = sumOfArray(arr.slice(1));

  //calculation
  return arr[0] + smallOp;

}

console.log(sumOfArray([10, 20, 30, 400]))
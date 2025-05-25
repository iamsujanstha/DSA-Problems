function isSortedArray(arr) {
  let arrLen = arr.length;
  //base case;
  if (arrLen === 0 || arrLen === 1) return true;

  if (arr[0] > arr[1]) return false;
  //recursive case
  let smallOp = isSortedArray(arr.slice(1))

  return smallOp;
}

console.log(isSortedArray([1, 2, 4]))
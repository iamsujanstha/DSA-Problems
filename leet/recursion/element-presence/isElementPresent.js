function isElementPresent(arr, element) {
  let arrLen = arr.length;
  //base case
  if (arrLen === 0) return false;

  if (arr[0] === element) return true;

  //recursive case
  let smallOp = isElementPresent(arr.slice(1), element);

  return smallOp;

}

console.log(isElementPresent([12, 34, 135, 300, 10], 12))
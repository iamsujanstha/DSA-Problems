function countOccurenceElement(arr, elem) {
  if (arr.length === 0) return 0;

  //recursive case
  let smallOp = countOccurenceElement(arr.slice(1), elem);

  if (arr[0] === elem) {
    return 1 + smallOp; // or ++samllOp
  }
  else {
    return smallOp;
  }
}

console.log(countOccurenceElement([2, 4, 23, 43, 2, 4, 5, 2, 30], 2))

/* Always use 1 + smallOp when you need to increment a value in recursion. Avoid using post-increment (smallOp++) when returning values directly from a function. */
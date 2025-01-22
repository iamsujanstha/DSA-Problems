function findProductArrayExceptCurrentIndex(arr, idx = 0) {
  //base case
  if (arr.length === 0 || idx === arr.length) return [];
  if (arr.length === 1) return arr;

  let productOfArray = arr.reduce((acc, curr) => acc * curr, 1);
  let currentItem = productOfArray / arr[idx]

  //recursive case
  let smallOp = findProductArrayExceptCurrentIndex(arr, idx + 1);

  return [currentItem, ...smallOp]
}

/* 
  productOfArray = 1*2*3*4*5=120
  result => [120/1, 120/2, 120/3, 120/4, 120/5]
 */

console.log(findProductArrayExceptCurrentIndex([1, 2, 3, 4, 5]));

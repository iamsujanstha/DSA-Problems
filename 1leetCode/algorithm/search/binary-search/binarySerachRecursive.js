function binarySearchRecursive(arr, key, start = 0, end = arr.length - 1) {
  if (start > end) return -1;

  let mid = Math.floor((start + end) / 2);

  if (arr[mid] === key) {
    return mid;
  } else if (key < arr[mid]) {
    return binarySearchRecursive(arr, key, start, mid - 1);
  } else {
    return binarySearchRecursive(arr, key, mid + 1, end);
  }
}

console.log(binarySearchRecursive([10, 23, 30, 43, 53], 43)); // Output: 3

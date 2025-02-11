function binarySearch(arr, key) {
  if (arr.length === 0) return -1;

  let mid = Math.floor(arr.length / 2);

  if (arr[mid] === key) {
    return mid;
  } else if (key < arr[mid]) {
    return binarySearch(arr.slice(0, mid), key);
  } else {
    let rightResult = binarySearch(arr.slice(mid + 1), key); // Search right half.
    return rightResult === -1 ? -1 : rightResult + mid + 1; // Adjust index for right half.
  }
}

console.log(binarySearch([10, 23, 30, 43, 53], 43));

/*
  Time Complexity: O(logN) -> Use only when array is sorted.
 */

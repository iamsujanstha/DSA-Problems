// Basic Structure of Binary Search
function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return mid; // Target found, return index
    } else if (arr[mid] < target) {
      start = mid + 1; // Search in the right half
    } else {
      end = mid - 1; // Search in the left half
    }
  }

  return -1; // Target not found
}

console.log(binarySearch([10, 23, 30, 43, 53], 43));
console.log(binarySearch([10, 23, 30, 43, 53], 100));

/*
  Time Complexity: O(logN) -> Use only when array is sorted.
 */

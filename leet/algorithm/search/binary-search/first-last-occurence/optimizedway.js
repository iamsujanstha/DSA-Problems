function findFirstAndLastPosition(nums, target, isFirst) {

  // Binary search for the first occurrence
  function getIndex(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    let result = -1;
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      if (arr[mid] === target) {
        result = mid;
        if (isFirst) {
          end = mid - 1; // Search the start half
        } else {
          start = mid + 1  // Search the end half
        }
      } else if (arr[mid] > target) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return result;
  }

  // Perform binary search on sorted array
  const first = getIndex(nums, target, true);
  const last = getIndex(nums, target, false);

  return [first, last];
}

// Example usage:
const nums = [7, 7, 8, 8, 8, 8, 8, 10];
const target = 8;
console.log(findFirstAndLastPosition(nums, target)); // Output: [0, 4]

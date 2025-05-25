function findNumberOfRotationArray(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);

    // If mid element is greater than the last element, min must be in the right half
    if (arr[mid] > arr[end]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  return start;
}

// console.log(findNumberOfRotationArray([3, 4, 5, 6, 8, 9, 2]));
console.log(findNumberOfRotationArray([6, 7, 8, 1, 2, 3, 4, 5]));
// console.log(findNumberOfRotationArray([1, 2, 3, 4, 5]));

function findInSortedArray(arr, key) {
  let start = 0;
  let end = arr.length - 1

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === key) return mid;

    //Case:1
    if (arr[start] < arr[mid]) {
      if (arr[start] <= key && key <= arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1
      }
    }
    //Case:2
    else {
      if (key >= arr[mid] && key <= arr[end]) {
        start = mid + 1;
      } else {
        end = mid - 1
      }
    }
  }
  return -1
}

console.log(findInSortedArray([4, 5, 6, 7, 9, 0, 1, 2, 3], 0))

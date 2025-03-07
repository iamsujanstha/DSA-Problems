function countOccurence(arr, num) {
  if (arr.length === 0) return -1;

  function findCount(arr, num, isFirst) {
    let start = 0;
    let end = arr.length - 1;
    let count = 0;

    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      if (num === arr[mid]) {
        count += 1;
        if (isFirst) {
          end = mid - 1;
        } else {
          start = mid + 1
        }
      }
      else if (arr[mid] < num) {
        start = mid + 1;
      }
      else {
        end = mid - 1
      }
    }
    return count;
  }

  let firstHalfCount = findCount(arr, num, true)
  let secondHalfCount = findCount(arr, num, false)

  return firstHalfCount + secondHalfCount;
}

console.log(countOccurence([10, 30, 43, 43, 43, 43], 43))

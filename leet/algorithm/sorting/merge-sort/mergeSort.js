function mergeArray(leftArr, rightArr) {
  let result = [];
  let i = 0;
  let j = 0;

  // Merge the arrays while both have elements
  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] < rightArr[j]) {
      result.push(leftArr[i]);
      i++;
    } else {
      result.push(rightArr[j]);
      j++;
    }
  }

  // Add remaining elements from leftArr
  while (i < leftArr.length) {
    result.push(leftArr[i]);
    i++;
  }

  // Add remaining elements from rightArr
  while (j < rightArr.length) {
    result.push(rightArr[j]);
    j++;
  }

  return result;
}

function mergeSort(arr) {
  // Base case: an array of one element is already sorted
  if (arr.length <= 1) return arr;

  // Divide the array into two halves
  let mid = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid);

  // Recursively sort both halves and merge them
  return mergeArray(mergeSort(leftArr), mergeSort(rightArr));
}

console.log(mergeSort([1, 5, 3, 4, 2])); // Time Complexity: nlogn

function bubbleSort(arr) {
  let arrLen = arr.length;
  for (let i = 1; i <= arrLen - 1; i++) {
    for (let j = 0; j <= arrLen - 2; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap adjacent elements
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

const arr = [64, 34, 25, 12, 22, 11, 90];
const arr1 = [5, 4, 3, 2, 1]
console.log(bubbleSort(arr1));

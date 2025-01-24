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

const arr1 = [1, 2, 3, 4, 5]
console.log(bubbleSort(arr1));

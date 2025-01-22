function insertionSort(arr) {
  let arrLen = arr.length;
  for (let i = 1; i < arrLen; i++) {
    let currentValue = arr[i]
    let j
    for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = currentValue
  }
  return arr
}

const arr = [64, 34, 25, 12, 22, 11, 90];
console.log(insertionSort(arr))
console.time('Execution time')
function optimizedBubbleSort(arr) {
  let arrLen = arr.length;
  let flag = 0;
  for (let i = 1; i <= arrLen - 1; i++) {
    for (let j = 0; j <= arrLen - 2; j++) {
      if (arr[j] >= arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        flag += 1;
      }
    }

    if (flag === 0) break;
  }
  return arr;
}

const arr1 = [1, 2, 3, 4, 5]
console.timeEnd('Execution time')
console.log(optimizedBubbleSort(arr1));
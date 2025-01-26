function quickSort(arr) {
  const arrLen = arr.length;
  //base case
  if (arrLen <= 1) return arr;

  const pivot = arr.pop();

  const left = [];
  const right = [];

  for (let i = 0; i < arrLen - 1; i++) {
    if (arr[i] < pivot) {
      arr.push(arr[i])
    }
    else {
      right.push(arr[i])
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)]

}

console.log(quickSort([9, 35, 21, 14, 19, 30, 28]));

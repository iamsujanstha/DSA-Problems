function optimizedSquareArray(arr) {
  let arrSize = arr.length;
  if (arrSize === 0) return [];

  const sortedArray = new Array(arrSize).fill(0);
  let start = 0, end = arrSize - 1;

  for (let i = arrSize - 1; i >= 0; i--) {
    const leftSquared = arr[start] ** 2;
    const rightSquared = arr[end] ** 2;

    if (leftSquared < rightSquared) {
      sortedArray[i] = rightSquared;
      end--;
    }
    else {
      sortedArray[i] = leftSquared
      start++
    }
  }

  return sortedArray;
}

module.exports = { optimizedSquareArray }

/*
  Time Complexity: O(n)
  Space Complexity: O(n)
 */
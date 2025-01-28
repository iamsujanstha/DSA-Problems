function linearSearch(arr, key) {
  let arrLen = arr.length;

  for (let i = 0; i < arrLen - 1; i++) {
    if (arr[i] === key) {
      return `key found at index ${i}`;
    }
  }
  return 'Does not exist'
}

console.log(linearSearch([10, 30, 43, 53, 23], 43))

/*
  Time Complexity: O(n)
 */
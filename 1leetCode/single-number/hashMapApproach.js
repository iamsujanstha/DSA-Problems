function findSingleNumber(arr) {
  const hashMap = new Map();

  for (let num of arr) {
    hashMap.set(num, (hashMap.get(num) || 0) + 1)
  }

  for (let [key, value] of hashMap) {
    if (value === 1) return key;
  }

  return null;
}

console.log(findSingleNumber([1, 3, 4, 3, 1, 1, 4, 8]))

/*
  Time Complexity: O(n)
  Space Complexity: O(n)
 */
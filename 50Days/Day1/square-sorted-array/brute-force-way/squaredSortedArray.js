function squaredSortedArray(arr) {
  return arr.map(i => i ** 2).sort((a, b) => a - b);
}

module.exports = { squaredSortedArray }

/*
  Time Complexity: O(nLogn)
  Space Complexity: O(n)
 */
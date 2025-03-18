function findSingleNumber(arr) {
  for (let num of arr) {
    if (arr.indexOf(num) === arr.lastIndexOf(num)) {
      return num;
    }
  }

}

console.log(findSingleNumber([1, 3, 4, 3, 1]))

/*
  Time Complexity: O(n^2)
  Space Complexity: O(1)
 */
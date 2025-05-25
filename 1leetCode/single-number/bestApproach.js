function findSingleNumber(arr) {
  let result = 0;

  for (let num of arr) {
    result ^= num;
  }

  return result;
}

console.log(findSingleNumber([1, 3, 4, 3, 1, 4, 8]));

/* 
  Time Complexity: O(n)
  Space Complexity: O(1)
*/

/* 
  ✔ XOR only works when all numbers appear twice except one
  ✔ If some numbers appear three times or more, use a hash map 
*/
function twoSumRecursive(nums, target, i = 0, j = 1) {
  // Base case: if we reach beyond array length
  if (i >= nums.length - 1) return null;

  // If pair matches the target
  if (nums[i] + nums[j] === target) {
    return [i, j];
  }

  // If we haven't checked all pairs with nums[i]
  if (j < nums.length - 1) {
    return twoSumRecursive(nums, target, i, j + 1);
  }

  // Move to next i, reset j
  return twoSumRecursive(nums, target, i + 1, i + 2);
}

console.log(twoSum([2, 7, 11, 15], 9));   // [0, 1]
console.log(twoSum([3, 2, 4], 6));        // [1, 2]
console.log(twoSum([3, 3], 6));           // [0, 1]


/* Complexity
    Time Complexity: still O(n²) (we check pairs).
    Space Complexity: O(n) (due to recursion stack).
*/
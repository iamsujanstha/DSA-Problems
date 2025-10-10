function twoSum(nums, target) {
  const map = new Map(); // value -> index

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }
}

console.log(twoSum([2, 7, 11, 15], 9));   // [0, 1]
console.log(twoSum([3, 2, 4], 6));        // [1, 2]
console.log(twoSum([3, 3], 6));           // [0, 1]


/* Complexity
    Time: O(n) → single pass through the array
    Space: O(n) → for the hash map
*/

/*
The optimized hash map approach achieves O(n) time, but requires O(n) space(to store numbers we’ve seen).

The brute force approach achieves O(1) space, but takes O(n²) time.

👉 So, O(n) time with O(1) space is not possible for the general unsorted Two Sum problem, 
  because you need to remember what you’ve already seen.Without extra memory, you’d have to re - scan the array each time → back to O(n²).

✅ Summary:
Unsorted nums → Best is O(n) time, O(n) space (hash map).
Sorted nums → Best is O(n) time, O(1) space (two pointers).
*/
function twoSum(nums, target) {
  const map = new Map(); // To store the difference and index

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]; // Calculate the difference

    if (map.has(complement)) {
      return [map.get(complement), i]; // Return indices if complement exists
    }

    map.set(nums[i], i); // Store the number and its index
  }

  throw new Error("No solution found"); // If no solution exists
}

// Examples:
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6));      // Output: [1, 2]
console.log(twoSum([3, 3], 6));         // Output: [0, 1]

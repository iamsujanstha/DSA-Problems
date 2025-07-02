function countKSubarrays(nums, k) {
  const remainderCount = new Map();
  remainderCount.set(0, 1); // base case: sum 0 is divisible by k

  let prefixSum = 0;
  let count = 0;

  for (const num of nums) {
    prefixSum += num;
    let mod = prefixSum % k;

    // Handle negative mods
    if (mod < 0) mod += k;

    if (remainderCount.has(mod)) {
      count += remainderCount.get(mod);
    }

    remainderCount.set(mod, (remainderCount.get(mod) || 0) + 1);
  }

  return count;
}


console.log(countKSubarrays([5, 10, 11, 9, 5], 5))
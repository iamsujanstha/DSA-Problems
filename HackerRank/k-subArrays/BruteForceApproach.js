function countKSubarraysBrute(nums, k) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum % k === 0) {
        count++;
      }
    }
  }

  return count;
}

console.log(countKSubarrays([5, 10, 11, 9, 5], 5))

# Sliding Window Pattern

The **Sliding Window** pattern is a commonly used technique for solving problems involving arrays or lists, especially when you need to find a subarray or substring that satisfies certain conditions.

## When to Use

Use the sliding window approach when:
- You need to examine all contiguous subarrays/substrings of a given size.
- You want to optimize from a brute-force O(n²) solution to O(n).
- The problem involves finding the maximum/minimum sum, length, or another property of a subarray/substring.

## Approach

1. **Initialize** pointers (usually `start` and `end`) to represent the window's boundaries.
2. **Expand** the window by moving the `end` pointer.
3. **Shrink** the window by moving the `start` pointer when a condition is met or violated.
4. **Update** the result as needed.

## Example 1: Maximum Sum Subarray of Size K

```js
function maxSumSubarray(arr, k) {
  let maxSum = 0;
  let windowSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  maxSum = windowSum;

  for (let end = k; end < arr.length; end++) {
    windowSum += arr[end] - arr[end - k];
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}

// Example usage:
const arr = [2, 1, 5, 1, 3, 2];
const k = 3;
console.log(maxSumSubarray(arr, k)); // Output: 9 ([5, 1, 3])
```

## Example 2: Smallest Subarray with Sum ≥ S

```js
function minSubarrayLen(s, arr) {
  let windowSum = 0;
  let minLength = Infinity;
  let start = 0;

  for (let end = 0; end < arr.length; end++) {
    windowSum += arr[end];
    while (windowSum >= s) {
      minLength = Math.min(minLength, end - start + 1);
      windowSum -= arr[start];
      start++;
    }
  }
  return minLength === Infinity ? 0 : minLength;
}

// Example usage:
const arr2 = [2, 1, 5, 2, 3, 2];
const s = 7;
console.log(minSubarrayLen(s, arr2)); // Output: 2 ([5, 2])
```

## Summary

The sliding window pattern is efficient for problems involving contiguous sequences. It reduces time complexity and is easy to implement for a wide range of problems.

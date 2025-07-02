# Prefix Sum in JavaScript

## What is Prefix Sum?

A **prefix sum** is an array that stores the cumulative sum of elements from the start of the array up to each index. For an array `arr`, the prefix sum at index `i` is the sum of all elements from `arr[0]` to `arr[i]`.

**Example:**
```js
const arr = [2, 4, 6, 8];
const prefixSum = [2, 6, 12, 20];
// prefixSum[2] = arr[0] + arr[1] + arr[2] = 2 + 4 + 6 = 12
```

## Applications of Prefix Sum

- **Efficient Range Sum Queries:** Quickly calculate the sum of any subarray in constant time.
- **Finding Subarrays with Given Sum:** Useful in problems where you need to find subarrays with a specific sum.
- **Solving Contiguous Subarray Problems:** Helps in optimizing brute-force solutions.

## When to Use Prefix Sum

Use prefix sum when you need to perform multiple queries for the sum of elements in different ranges of an array. It is especially useful when the array is static (does not change frequently).

## How to Use Prefix Sum

1. **Build the Prefix Sum Array:**
  ```js
  function buildPrefixSum(arr) {
    const prefixSum = [];
    prefixSum[0] = arr[0];
    for (let i = 1; i < arr.length; i++) {
     prefixSum[i] = prefixSum[i - 1] + arr[i];
    }
    return prefixSum;
  }
  ```

2. **Query the Sum of a Range [l, r]:**
  ```js
  function rangeSum(prefixSum, l, r) {
    if (l === 0) return prefixSum[r];
    return prefixSum[r] - prefixSum[l - 1];
  }
  ```

## Problems Solved by Prefix Sum

- Sum of elements in a subarray (range sum queries)
- Counting subarrays with a given sum
- Finding equilibrium index
- Solving problems involving contiguous elements efficiently

## What is a Contiguous Element Array?

A **contiguous element array** (or subarray) is a sequence of elements that are consecutive in the original array. For example, in `[1, 2, 3, 4]`, `[2, 3]` and `[1, 2, 3]` are contiguous subarrays, but `[1, 3]` is not.

---

**Summary:**  
Prefix sum is a powerful technique for optimizing array sum queries and solving various subarray problems efficiently in JavaScript.
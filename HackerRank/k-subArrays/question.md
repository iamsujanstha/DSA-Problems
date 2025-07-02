 # K-Subarrays
### Description

A **k-subarray** of an array is a contiguous subarray where the sum of its elements is divisible by `k`. Given an array of integers, determine the number of k-subarrays it contains.

### Example

For `nums = [5, 10, 11, 9, 5]` and `k = 5`, the valid subarrays are:

```
{5}, {5, 10}, {5, 10, 11, 9}, {5, 10, 11, 9, 5}, {10}, {10, 11, 9}, {10, 11, 9, 5}, {11, 9}, {11, 9, 5}, {5}
```

Thus, the count is **10**.

---

## Function Signature

```javascript
function kSub(k, nums)
```

- **Input:**
  - `k`: The divisor (`1 ≤ k ≤ 100`)
  - `nums`: An array of integers (`1 ≤ nums[i] ≤ 10^4`, `1 ≤ n ≤ 3 × 10^5`)
- **Output:**
  - The number of k-subarrays in `nums`.
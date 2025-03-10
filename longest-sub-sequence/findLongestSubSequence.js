function longestSubSequence(arr) {
  if (arr.length === 0) return 0; // Handle edge case of empty array

  let result = 1; // Stores the max increasing subsequence length
  let longest = 1; // Stores the current increasing subsequence length

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      longest++; // Increment sequence length
      result = Math.max(result, longest); // Update max length
    } else {
      longest = 1; // Reset current sequence length if order breaks
    }
  }

  return result;
}

console.log(longestSubSequence([2, 1, 5, 6, 7])); 

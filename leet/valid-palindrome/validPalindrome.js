function validPalindrome(str) {
  // Helper function to check if a substring is a palindrome
  const isPalindrome = (s, left, right) => {
    while (left < right) {
      if (s[left] !== s[right]) return false;
      left++;
      right--;
    }
    return true;
  };

  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      // Try skipping either the left or right character and check if it forms a palindrome
      return isPalindrome(str, left + 1, right) || isPalindrome(str, left, right - 1);
    }
    left++;
    right--;
  }

  return true; // The string is already a palindrome
}

console.log(validPalindrome("abca")); // Output: true
console.log(validPalindrome("racecar")); // Output: true
console.log(validPalindrome("abc")); // Output: false

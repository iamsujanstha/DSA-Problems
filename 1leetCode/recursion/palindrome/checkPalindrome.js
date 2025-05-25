function isPalindrome(num) {
  let numArr = [...String(num)];
  let startVal = numArr[0];
  let endVal = numArr[numArr.length - 1];

  // Base case: Single digit or no digits
  if (numArr.length <= 1) return true;

  // If the first and last digits do not match
  if (startVal !== endVal) return false;

  // Recursive case: Check inner digits
  return isPalindrome(+numArr.slice(1, -1).join(''));
}


console.log(isPalindrome(13521))
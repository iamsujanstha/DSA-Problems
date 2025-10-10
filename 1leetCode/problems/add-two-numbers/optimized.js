function addTwoNumbers(l1, l2) {
  const result = [];
  let carry = 0;
  const n = Math.max(l1.length, l2.length);

  for (let i = 0; i < n || carry > 0; i++) {
    const x = i < l1.length ? l1[i] : 0;
    const y = i < l2.length ? l2[i] : 0;

    const sum = x + y + carry;
    result.push(sum % 10);
    carry = Math.floor(sum / 10);
  }

  return result;
}

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4])); // [7,0,8]
console.log(addTwoNumbers([9, 9, 9], [1]));     // [0,0,0,1]
console.log(addTwoNumbers([0], [0]));         // [0]


// Why it’s optimized:

// Processes each digit once → O(max(m, n)) time.

// Only extra storage is the result array → O(max(m, n)) space.

// Works for very large numbers without overflow.
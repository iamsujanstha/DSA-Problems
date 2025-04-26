/* We build a table of n rows (1-indexed). We start by writing 0 in the 1st row. 
  Now in every subsequent row, we look at the previous row and replace each occurrence of 0 with 01, and each occurrence of 1 with 10.

For example, for n = 3, the 1st row is 0, the 2nd row is 01, and the 3rd row is 0110.
Given two integer n and k, return the kth (1-indexed) symbol in the nth row of a table of n rows.

 

Example 1:

Input: n = 2, k = 2
Output: 1
Explanation: 
row 1: 0
row 2: 01

Row 1:              0
Row 2:         0         1
Row 3:       0   1    1    0
Row 4:     0 1  1 0  1 0  0 1


*/

function kthGrammar(n, k) {
  //base case
  if (n === 1) return 0;

  //recursive case
  let length = 2 ** (n - 1);
  let mid = length / 2;

  if (k <= mid) {
    return kthGrammar(n - 1, k)
  }
  else {
    return 1 - kthGrammar(n - 1, k - mid)
  }
}

module.exports = { kthGrammar };

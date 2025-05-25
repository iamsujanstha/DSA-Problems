function printSubsequenceString(str, output = '') {
  // Base case: If the string is empty, return an array containing the output string
  if (str.length === 0) return [output];

  // Recursive case: Get all subsequences of the remaining string
  let excludeOp = printSubsequenceString(str.slice(1), output);        // subsequences excluding the current character
  let includeOp = printSubsequenceString(str.slice(1), output + str[0]); // subsequences including the current character

  // Combine the subsequences with and without the current character
  return [...excludeOp, ...includeOp];
}

console.log(printSubsequenceString('abc'));

function permutations(str) {
  // Base case: if the string is of length 1 or less, return it as the only permutation
  if (str.length <= 1) {
    return [str];
  }

  let allPermutations = [];

  // Iterate over each character in the string
  for (let i = 0; i < str.length; i++) {
    let char = str[i];  // current character
    let remainingString = str.slice(0, i) + str.slice(i + 1);  // string without the current character

    // Get permutations of the remaining string
    let remainingPermutations = permutations(remainingString);

    // Add the current character in front of each permutation
    for (let perm of remainingPermutations) {
      allPermutations.push(char + perm);
    }
  }

  // Remove duplicates using Set and return as an array
  return Array.from(new Set(allPermutations));
}

// Calling the function and printing the output
console.log(permutations("abcad"));

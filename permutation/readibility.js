function permutations(str) {
  // Base case
  if (str.length <= 1) {
    return [str];
  }

  let allPermutations = [];

  // Recursive case: iterate over each character in the string
  for (let i = 0; i < str.length; i++) {
    let char = str[i]; // Fix the current character (one character at a time)

    // Recursively get all permutations of the remaining string
    let smallOp = permutations(str.slice(0, i) + str.slice(i + 1));

    // Calculate: combine the fixed character with each of the remaining permutations
    for (let perm of smallOp) {
      allPermutations.push(char + perm);
    }
  }

  // Deduplication: Remove duplicates using a Set and return
  return Array.from(new Set(allPermutations));
}

console.log(permutations("ABC"));

/*  In the permutations function provided, swapping is not explicitly used as a method to generate permutations. 
    Instead, permutations are generated recursively by fixing one character at a time and 
    finding permutations of the remaining characters. 
*/
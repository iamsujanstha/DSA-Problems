let countChange = function (money, coins) {
  // Base case: No money left, found a valid way to make change
  if (money === 0) {
    return 1;
  }

  // Base case: Money is negative or no coins left, no valid way to make change
  if (money < 0 || coins.length === 0) {
    return 0;
  }

  // Recursive case: Explore two possibilities
  // 1. Include the first coin and try to make the remaining change
  const withFirstCoin = countChange(money - coins[0], coins);

  // 2. Exclude the first coin and try to make the change with the remaining coins
  const withoutFirstCoin = countChange(money, coins.slice(1));

  // The total number of ways is the sum of both possibilities
  return withFirstCoin + withoutFirstCoin;
}

// Example usage:
// console.log(countChange(98, [3, 14, 8])); // Outputs: Number of ways to make 98 with coins [3, 14, 8]
console.log(countChange(10, [5, 2, 3]));  // Outputs: 4

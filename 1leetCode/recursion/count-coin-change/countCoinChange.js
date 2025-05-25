function countCoinChange(coins, money) {
  //base case
  if (money === 0) return 1;
  if (coins.length === 0 || money < 0) return 0;

  //recusive case
  let smallOp = countCoinChange(coins, money - coins[0]);

  return smallOp + countCoinChange(coins.slice(1), money)
}

console.log(countCoinChange([5, 3, 2], 10))
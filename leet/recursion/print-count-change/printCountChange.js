function printCountChange(coins, money, ways = []) {
  //base case
  if (coins.length === 0 || money < 0) return 0;

  if (money === 0) {
    console.log(ways)
    return 1;
  }

  //recursive case
  let smallOp = printCountChange(coins, money - coins[0], [...ways, coins[0]])

  smallOp + printCountChange(coins.slice(1), money, ways)
}

printCountChange([5, 3, 2], 10)
function cutRod(price) {
  const rodLength = price.length;
  const dp = Array(rodLength + 1).fill(0);

  // Find maximum value for all 
  // rod of length i.
  for (let i = 1; i <= rodLength; i++) {
    for (let j = 1; j <= i; j++) {
      dp[i] = Math.max(dp[i], price[j - 1] + dp[i - j]);
    }
  }

  return dp[rodLength];
}

const price = [1, 5, 8, 9, 10, 17, 17, 20];
console.log(cutRod(price));
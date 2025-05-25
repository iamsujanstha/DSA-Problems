function countNoOfWaysToReach(stair) {
  // if (stair < 0) return 0;

  if (stair === 0 || stair === 1) return 1;
  if (stair === 2) return 2; // it avoids to reach (2-3) => -1 case

  return countNoOfWaysToReach(stair - 1) + countNoOfWaysToReach(stair - 2) + countNoOfWaysToReach(stair - 3)
}

console.log(countNoOfWaysToReach(4))
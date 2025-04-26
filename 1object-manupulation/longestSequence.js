const nums = [100, 4, 200, 1, 3, 2];

function longestSequence(nums) {
  const numSet = new Set(nums);
  let longestSeq = [];

  for (let num of numSet) {
    let currentSeq = [];

    if (!numSet.has(num - 1)) {
      currentSeq.push(num);

      while (numSet.has(num + 1)) {
        num += 1;
        currentSeq.push(num);
      }

      if (currentSeq.length > longestSeq.length) {
        longestSeq = currentSeq;
      }
    }
  }
  return longestSeq;
}

console.log(longestSequence(nums))
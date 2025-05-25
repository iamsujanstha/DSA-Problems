function majorityElement(arr) {
  const countMap = arr.reduce((acc, curr) => {
    acc.set(curr, (acc.get(curr) || 0) + 1);
    return acc;
  }, new Map());

  const majorityValue = Math.floor(arr.length / 2);

  for (let [key, value] of countMap) {
    console.log(`Checking key: ${key}, value: ${value}`);
    if (value >= majorityValue) {
      return key;
    }
  }

  return null;
}

console.log(majorityElement([1, 3, 4, 2, 2, 3, 1, 3, 3, 3]));

/* 
  Time Complexity: O(n)
  Space Complexity: O(n)
 */
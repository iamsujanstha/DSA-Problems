function majorityElement(arr) {
  let candidateItem = arr[0];
  let count = 1;
  const arrLen = arr.length;

  for (let i = 1; i < arrLen - 1; i++) {
    if (arr[i] === candidateItem) {
      count++;
    }
    else {
      count -= 1;
      if (count === 0) {
        candidateItem = arr[i];
        count = 1;
      }
    }
  }
  return candidateItem;
}

console.log(majorityElement([1, 3, 4, 2, 2, 3, 1, 3, 2, 2]))
/* 
  Time Complexity: O(n)
  Space Complexity: O(1)
 */
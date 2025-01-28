function majorityElement(arr) {
  return arr.sort()[Math.floor(arr.length / 2)];  // majority element always has (n/2 < majority element)
}

console.log(majorityElement([1, 3, 4, 2, 2, 3, 1, 3, 3, 3]))

/* 
  Time Complexity: O(nlogn)
  Space Complexity: O(1)
 */
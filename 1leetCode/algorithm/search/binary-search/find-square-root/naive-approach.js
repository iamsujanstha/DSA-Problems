function findSqureRoot(num) {
  let i = 1;
  let result = 0;
  while (i < num) {
    if (i ** 2 > num) break;
    result++;
    i++;
  }
  return result
}

console.log(findSqureRoot(50))

/* 
  Time Complexity: O(squrt(n)) 
*/
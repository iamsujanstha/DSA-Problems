function OptimizedIntersection(firstArr, secondArr) {
  const set = new Set(secondArr);
  const result = [];

  for (let item of firstArr) {
    if (set.has(item)) {
      result.push(item);
      // To avoid duplicates in the result, remove it from the set
      set.delete(item);
    }
  }

  return result;
}
console.log(OptimizedIntersection([3, 1, 4, 2], [4, 5, 3, 6]))

module.exports = { OptimizedIntersection }

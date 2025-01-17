function intersection(firstArr, secondArr) {
  let result = [];
  for (let i of firstArr) {
    for (let j of secondArr) {
      if (i === j) {
        result.push(i);
        break;
      }
    }
  }
  return result;
}

console.log(intersection([3, 1, 4, 2], [4, 5, 3, 6]))
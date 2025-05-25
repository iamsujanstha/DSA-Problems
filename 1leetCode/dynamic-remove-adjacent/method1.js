function dynamicRemoveAdjacent(str, adjacentNumber) {
  let stack = [];
  let map = new Map();

  for (let char of str) {
    if (stack.length > 0 && stack[stack.length - 1] === char) {
      map.set(char, map.get(char) + 1);

      if (map.get(char) === adjacentNumber) {
        stack.pop();
        map.delete(char);
      }
    } else {
      stack.push(char);
      map.set(char, 1);
    }
  }

  return stack.join('');
}

console.log(dynamicRemoveAdjacent('pbbcccb', 3));

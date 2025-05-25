console.time("Execution Time");

function matchParenthesis(parenthesis) {
  const openingBrackets = new Set(['(', '{', '[']);
  const matchingBrackets = new Map([
    [')', '('],
    ['}', '{'],
    [']', '[']
  ]);

  const stack = [];

  for (let char of parenthesis) {
    if (openingBrackets.has(char)) {
      // If it's an opening bracket, push it onto the stack
      stack.push(char);
    } else if (matchingBrackets.has(char)) {
      // If it's a closing bracket, check if it matches the top of the stack
      if (stack.pop() !== matchingBrackets.get(char)) {
        return false;
      }
    }
  }

  // If the stack is empty, all parentheses were matched; otherwise, it's unbalanced
  return stack.length === 0;
}

console.log(matchParenthesis("{(()]}()")); // true

console.timeEnd("Execution Time");

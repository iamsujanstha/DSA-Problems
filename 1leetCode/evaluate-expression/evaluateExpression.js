function evaluateExpression(expression) {
  const expressionLen = expression.length;
  let stack = [];
  for (let i = 0; i < expressionLen; i++) {
    // Operator part
    if (expression[i] === '+' || expression[i] === '-' || expression[i] === '*' || expression[i] === '/') {
      let secondElem = stack.pop();
      let firstElem = stack.pop();

      if (expression[i] === '+') {
        stack.push(firstElem + secondElem)
      }
      else if (expression[i] === '-') {
        stack.push(firstElem - secondElem)
      }
      else if (expression[i] === '*') {
        stack.push(firstElem * secondElem)
      }
      else if (expression[i] === '/') {
        stack.push(parseInt((firstElem / secondElem)))
      }
    }
    else {
      // Operand part
      stack.push(+expression[i])
    }
  }
  return stack;
}

console.log(evaluateExpression(["4", "13", "5", "/", "+"]))
## Recursion
Recursion is a technique in which a function calls itself as a subroutine.

### How Recursion Works
Recursion works by breaking down a problem into smaller, simpler problems, and then solving each of those problems recursively. Each recursive call reduces the original problem into a simpler form, until it reaches a base case that can be solved directly.

### When to Use Recursion
Recursion can be used to solve a wide variety of problems, such as tree traversal, sorting algorithms, and mathematical calculations. It is particularly useful when the problem can be broken down into smaller, similar subproblems that can be solved recursively.

### General Steps for Recursion
Define a base case that can be solved directly.
Define a recursive case that breaks down the problem into smaller, simpler subproblems.
Call the function recursively with the smaller subproblems.

### Always follow PMI(Principle of mathematical induction)

The principle of mathematical induction is a powerful method for proving statements about natural numbers. It is based on the idea that if a statement is true for a base case (usually n = 0 or n = 1) and if it is true for n = k, then it must also be true for n = k + 1. This allows us to prove that a statement is true for all natural numbers by starting with the base case and then using the inductive step to show that it is true for all subsequent numbers.


### 1. Base Case
A base case is a condition that is used to terminate the recursion. It is the simplest case that can be solved without further recursion. When the base case is reached, the function stops calling itself and returns a value. Without a base case, the function would continue to call itself indefinitely, resulting in an infinite loop.

f(0) = true;
f(1) = true;

### 2. Recursive Case
A recursive case is a condition that breaks down the problem into smaller, simpler subproblems. It is the part of the function that calls itself with a modified argument, moving closer to the base case with each recursive call. The recursive case is what allows the function to solve complex problems by breaking them down into smaller, more manageable parts.

assume f(k) is true, then f(k+1) is also true.

### 3. Calculation
After the base case is reached, the function can perform any necessary calculations to combine the results of the recursive calls and return a final value. This is where the function combines the results of the recursive calls to solve the original problem.

f(k) = f(k-1) + k;

### Example
function factorial(n) {
  //base case
  if (n === 0) {
    return 1;
  }
  //recursive case
    let m = factorial(n - 1);
  
  // calculation
  return n * m;
  
}

console.log(factorial(5)); // Output: 120

In this example, the `factorial` function calculates the factorial of a number using recursion. The base case is when `n` is equal to 0, in which case the function returns 1. Otherwise, the function calls itself with `n - 1` as the argument, until the base case is reached.

### Summary

Recursion is a technique in which a function calls itself as a subroutine.
A base case is a condition that is used to terminate the recursion.
Recursion can be used to solve a wide variety of problems by breaking them down into smaller, simpler problems.

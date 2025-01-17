function counter() {
  let count = 0;  // Step 1: Initialize the count variable to 0.

  function getMessage() {
    return `Your count is ${count}`;
    // Step 2: This function returns a dynamic string based on the current value of `count`.
    // Whenever `getMessage()` is called, it will use the current value of `count` at that time.
  }

  function increaseCount() {
    count++;
    // Step 3: This function increments the count variable by 1 each time it's called.
  }

  return [getMessage, increaseCount];
  // Step 4: Return an array containing:
  // - The `getMessage` function, which can dynamically generate a message based on `count`.
  // - The `increaseCount` function, which increments `count`.
}

const [getMessage, increaseCount] = counter();
// Step 5: Destructure the returned array into two variables:
// - `getMessage`: The function to generate the message.
// - `increaseCount`: The function to increment the `count` variable.

increaseCount();  // Step 6: Call `increaseCount()`. This increases `count` to 1.
increaseCount();  // Step 7: Call `increaseCount()` again. This increases `count` to 2.

console.log(getMessage());
// Step 8: Call `getMessage()`. This returns the message `"Your count is 2"`.
//When you call getMessage(), it dynamically returns a message that uses the current value of count. 
//This is because getMessage() is accessing the same count variable from the closure—the one that has been updated by the increaseCount() calls.


//If you call getMessage() after calling increaseCount() twice, getMessage() will use the updated count value (2), 
//because it has access to the current state of count within the closure.
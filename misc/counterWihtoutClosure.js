function counter() {
  let count = 0;  // Step 1: Initialize count variable to 0

  function increaseCount() {
    count++;  // Step 2: This function increments the count when called
  }

  let message = `Your count is ${count}`;
  // Step 3: Create a message string using the initial value of count (0).
  // At this point, `message` is `"Your count is 0"`, and it will not change 
  // when `increaseCount()` is called because this message is a static string 
  // created based on the current value of `count` at the time of execution.

  return [message, increaseCount];
  // Step 4: Return an array containing:
  // 1. The static message string (which is "Your count is 0").
  // 2. The increaseCount function (which modifies the count variable inside the closure).
}

const [message, increaseCount] = counter();
// Step 5: Destructure the returned values:
// - `message` gets the static string "Your count is 0".
// - `increaseCount` gets the function that increments `count` inside the closure.

increaseCount();  // Step 6: Call the increaseCount function (count is now 1)
increaseCount();  // Step 7: Call the increaseCount function again (count is now 2)

console.log(message);
// Step 8: Log `message`. This will output "Your count is 0" because `message` 
// was set when `counter()` was called, and it does not automatically update 
// when `count` changes. The variable `message` is a static string, not a dynamic reference.

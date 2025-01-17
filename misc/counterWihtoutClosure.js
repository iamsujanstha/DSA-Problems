function counter() {
  let count = 0; 

  function increaseCount() {
    count++; 
  }

  let message = `Your count is ${count}`; //message is immediately set to "Your count is 0" at the point of execution. This happens when count is still 0 because no increaseCount has been called yet.

  return [message, increaseCount];
}

const [message, increaseCount] = counter();

increaseCount(); 
increaseCount(); 

console.log(message);

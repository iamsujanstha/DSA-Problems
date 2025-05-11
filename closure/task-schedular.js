const createTaskScheduler = () => {
  return ((fn, timer) => {
    setTimeout(() => {
      fn();
    }, timer)
  })
};

const scheduler = createTaskScheduler();

scheduler(() => console.log("Task 1 executed!"), 2000);
scheduler(() => console.log("Task 2 executed!"), 1000);
scheduler(() => console.log("Task 3 executed!"), 3000);

// Expected Output:
// "Task 2 executed!" (after 1 second)
// "Task 1 executed!" (after 2 seconds)
// "Task 3 executed!" (after 3 seconds)
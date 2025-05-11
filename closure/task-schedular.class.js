class TaskScheduler {
  constructor() {
    this.tasks = {}; // Store tasks with unique IDs
  }

  // Schedule a new task
  schedule(fn, delay) {
    const id = Symbol(); // Unique ID for the task
    const timerId = setTimeout(() => {
      fn(); // Execute the task
      delete this.tasks[id]; // Remove the task after execution
    }, delay);

    this.tasks[id] = timerId; // Store the timer ID
    return id; // Return the unique ID
  }

  // Cancel a scheduled task
  cancel(id) {
    if (this.tasks[id]) {
      clearTimeout(this.tasks[id]); // Cancel the timer
      delete this.tasks[id]; // Remove the task from storage
      return true; // Indicate successful cancellation
    }
    return false; // Task not found
  }

  // Execute all pending tasks immediately
  executeAll() {
    for (const id of Object.getOwnPropertySymbols(this.tasks)) {
      clearTimeout(this.tasks[id]); // Clear the timer
      delete this.tasks[id]; // Remove the task
    }
    console.log("All pending tasks executed!");
  }
}

// Example usage
const scheduler = new TaskScheduler();

// Schedule tasks
const task1 = scheduler.schedule(() => console.log("Task 1 executed!"), 2000);
const task2 = scheduler.schedule(() => console.log("Task 2 executed!"), 1000);
const task3 = scheduler.schedule(() => console.log("Task 3 executed!"), 3000);

// Cancel a task before it executes
setTimeout(() => {
  const canceled = scheduler.cancel(task2);
  console.log(`Task 2 canceled: ${canceled}`);
}, 500);

// Execute all pending tasks immediately
setTimeout(() => {
  scheduler.executeAll(); // Logs: "All pending tasks executed!"
}, 1500);

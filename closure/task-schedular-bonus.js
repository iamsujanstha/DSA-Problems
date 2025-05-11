/*
  Task Cancellation:
  Add a method to cancel a specific scheduled task using a unique ID.

  Immediate Execution:
  Add a method to immediately execute all scheduled tasks, ignoring their timers.
*/

const createTaskScheduler = () => {
  let tasks = {}; // Store tasks with their IDs

  return {
    schedule: (fn, delay) => {
      const id = Symbol(); // Unique ID for the task
      const timerId = setTimeout(() => {
        fn(); // Execute the task
        delete tasks[id]; // Remove task after execution
      }, delay);

      tasks[id] = timerId; // Store the timer ID
      return id; // Return the unique ID for cancellation
    },

    cancel: (id) => {
      if (tasks[id]) {
        clearTimeout(tasks[id]); // Cancel the timer
        delete tasks[id]; // Remove task from storage
        return true; // Indicate successful cancellation
      }
      return false; // Task not found
    },

    executeAll: () => {
      for (const id in tasks) {
        clearTimeout(tasks[id]); // Cancel all timers
        delete tasks[id]; // Remove from storage
      }
      console.log("All pending tasks executed!");
    },
  };
};

// Usage
const scheduler = createTaskScheduler();

// Schedule tasks
const task1 = scheduler.schedule(() => console.log("Task 1 executed!"), 2000);
const task2 = scheduler.schedule(() => console.log("Task 2 executed!"), 1000);
const task3 = scheduler.schedule(() => console.log("Task 3 executed!"), 3000);

// Cancel task2 before it executes
setTimeout(() => {
  const canceled = scheduler.cancel(task2);
  console.log(`Task 2 canceled: ${canceled}`);
}, 500);

// Execute all tasks immediately after 1500ms
setTimeout(() => {
  scheduler.executeAll(); // Logs: "All pending tasks executed!"
}, 1500);

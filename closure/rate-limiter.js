/*
  Imagine you're implementing a rate limiter for a login system. 
  The system should allow a user to attempt login only a limited number of times (e.g., 3 attempts) 
  within a given time window (e.g., 10 minutes). After the limit is reached, 
  the user must wait for the window to reset.
*/

function rateLimiter(maxAttempts, timeWindow) {
  let attempts = []; // Array to store the timestamps of the attempts independently for every user.

  return () => {
    const now = Date.now(); // Current timestamp ie 1750602601360

    // Filter out attempts that are outside the time window
    attempts = attempts.filter((timestamp) => now - timestamp < timeWindow);

    if (attempts.length < maxAttempts) {
      attempts.push(now); // Record the new attempt
      return true;
    } else {
      return `Limit reached`;
    }
  };
}

const WINDOW_TIME = 10000;
const userRateLimiter = rateLimiter(3, WINDOW_TIME);

console.log(userRateLimiter());
console.log(userRateLimiter());
console.log(userRateLimiter());
console.log(userRateLimiter());

setTimeout(() => {
  console.log(userRateLimiter());
}, WINDOW_TIME + 100); // Adding a small buffer to ensure time passes





class Memoizer {

  /* Without this, variables like fn and cache would be treated as local variables inside the constructor function 
  and wouldn't persist outside the constructor. They would not be accessible in 
  other methods like memoizedFunction or clearCache. */

  constructor(fn) {
    this.fn = fn; // Original function to memoize
    this.cache = new Map(); // Cache to store results
    // this.memoizedFunction = this.memoizedFunction.bind(this); 

    // Rename the memoized function
    Object.defineProperty(this.memoizedFunction, 'name', {
      value: `memoized_${fn.name}`,
      configurable: true,
    });
  }
  /* If memoizedFunction as arrow function then there no need for binding 'this' with bind */
  // Method to get the memoized function
  memoizedFunction = (...args) => {
    const key = JSON.stringify(args);

    if (this.cache.has(key)) {
      return this.cache.get(key);
    }

    const result = this.fn(...args);
    this.cache.set(key, result);

    return result;
  }

  // Method to clear the cache
  clearCache() {
    this.cache.clear();
  }
}

// Original Fibonacci function
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Create an instance of the Memoizer class
const memoizedFibonacci = new Memoizer(fibonacci);

// Function to measure performance
function measurePerformance(func, arg) {
  const startTime = process.hrtime.bigint();
  const result = func(arg);
  const endTime = process.hrtime.bigint();
  const duration = (endTime - startTime) / BigInt(1000000); // Convert nanoseconds to milliseconds
  console.log(`${func.name}(${arg}) = ${result}, Time: ${duration}ms`);
}

const n = 42;

// Measure memoized Fibonacci
measurePerformance(memoizedFibonacci.memoizedFunction, n);

// Measure memoized Fibonacci second call
measurePerformance(memoizedFibonacci.memoizedFunction, n);

// Clear cache and measure again
console.log('Clearing cache and measuring again:');
memoizedFibonacci.clearCache();
measurePerformance(memoizedFibonacci.memoizedFunction, n);

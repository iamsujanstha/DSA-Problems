Modify the given function in a way that every third call prints "Hello" to the console. You cannot modify the original function signuature or use global variables.

```javascript
function createFunctionCallCounter(fn) {
  let callCount = 0;
  return function(...args) {
    callCount++;
    if (callCount % 3 === 0) {
      console.log("Hello");
    }
    return fn(...args);
  };
}
```     
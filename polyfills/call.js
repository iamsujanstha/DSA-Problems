Function.prototype.myCall = function (thisArgs, ...args) {
  // 1️⃣ If thisArgs is null or undefined, fallback to globalThis (like native call)
  thisArgs = thisArgs || globalThis;

  // 🧠 MEMORY:
  // Let's say:
  //   - this === greet 
  //   - thisArgs === person
  // Temporarily attach `greet` to `person` using a unique Symbol to avoid collision

  const symbol = Symbol(); // 2️⃣ Create a truly unique property key (safe!)

  // 3️⃣ Attach this (i.e., the function calling `myCall`) to thisArgs
  thisArgs[symbol] = this; //this referes to Function

  // 🔍 MEMORY at this point:
  //
  // person = {
  //   name: "Alice",
  //   [Symbol()]: greet // ← temporarily added
  // }

  // 4️⃣ Call the function as a method of `thisArgs` same like calling function i.e. greet(...args)
  const returnValue = thisArgs[symbol](...args);

  // 🧠 WHY?
  // By calling as `thisArgs[symbol](...)`, the internal `this` inside the function becomes `thisArgs`

  // 5️⃣ Clean up: remove the temporary method after calling
  delete thisArgs[symbol]; // person = { name: "Alice" } ⬅️ back to normal without side-effects

  // 6️⃣ Return the result of the original function call (like native .call does)
  return returnValue;
};


//Example Setup

function greet(age, gender) {
  console.log(`${this.name} is ${age} years old ${gender}`);
}

const person = {
  name: "Alice"
}

greet.myCall(person, 20, 'female');
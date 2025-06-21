Function.prototype.myApply = function (thisContext, args = []) {
  let symbol = Symbol();
  thisContext[symbol] = this;

  const returnValue = thisContext[symbol](...args);
  delete thisContext[symbol];

  return returnValue;
}

function greet(age, gender) {
  console.log(`${this.name} is ${age} years old ${gender}`);
}

const person = {
  name: "Bob"
}

greet.myApply(person, [20, 'male']);
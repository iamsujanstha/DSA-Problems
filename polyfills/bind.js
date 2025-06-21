Function.prototype.myBind = function (thisContext, ...args) {
  let symbol = Symbol();

  thisContext[symbol] = this;

  return function (...newArgs) {
    const result = thisContext[symbol](...args, ...newArgs);
    delete thisContext[symbol];

    return result;
  }
}

function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

const person = { name: 'Sujan' };

const greetSujan = greet.myBind(person, 'Hello');
greetSujan('!');

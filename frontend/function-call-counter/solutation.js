let isInvoked = false;

const fn = () => {
  isInvoked = true;
}

function createFnCallCounter(fn, times = 3) {
  let counter = 0;

  return () => {
    counter++;
    if (counter % times === 0) {
      console.log('Hello');
    }

    fn();
  }
}

let method = createFnCallCounter(fn, 2);
method();
method();
method();
method();
method();
method();
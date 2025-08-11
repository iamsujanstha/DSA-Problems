function promiseAll(promises) {
  const outputs = [];
  let promiseCounter = 0;

  return new Promise((resolve, reject) => {
    promises.forEach((promise, i) => {
      promise.then((value) => {
        outputs[i] = value;
        promiseCounter++;

        if (promiseCounter === promises.length) {
          resolve(outputs);
        }
      })
        .catch(reject);
    });
  })
}

const slowPromise = new Promise((resolve) => setTimeout(() => resolve('done'), 300));

const promises = [
  Promise.resolve(1),
  Promise.resolve(3),
  slowPromise,
  Promise.resolve('all'),
  // Promise.reject('2')
]

promiseAll(promises).then(console.log)

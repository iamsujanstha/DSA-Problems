function deepEqual(valueOne, valueTwo) {
  if (typeof valueOne !== typeof valueTwo) return false;
  if (valueOne === null && valueTwo === null) return true;
  if (valueOne === null || valueTwo === null) return false;

  //Check both are premitive
  if (typeof valueOne !== 'object' && typeof value2 !== 'object') {
    //in js isNaN === isNaN return false we need to fix to make isNan === isNaN true;
    const isValueOneNaN = isNaN(valueOne) && typeof valueOne === 'number';
    const isValueTwoNan = isNaN(valueTwo) && typeof valueTwo === 'number';

    if (isValueOneNaN && isValueTwoNan) return true;

    return valueOne === valueTwo;
  }

  if (Array.isArray(valueOne) && Array.isArray(valueTwo)) {
    if (valueOne.length !== valueTwo.length) return false;
    for (let i = 0; i < valueOne.length; i++) {
      if (!deepEqual(valueOne[i], valueTwo[i])) return false;
    }
    return true;
  }

  if (Array.isArray(valueOne) || Array.isArray(valueTwo)) return false;

  const valueOneKeys = Object.keys(valueOne);
  const valueTwoKeys = Object.keys(valueTwo);

  if (valueOneKeys.length !== valueTwoKeys.length) return false;
  if (!deepEqual(valueOneKeys, valueTwoKeys)) return false;

  for (let i = 0; i < valueOneKeys.length; i++) {
    let key = valueOneKeys[i];
    if (!deepEqual(valueOne[key], valueTwo[key])) return false;
  }

  return true;
}

// TRUE cases
console.log(deepEqual(1, 1));
console.log(deepEqual('hello', 'hello'));
console.log(deepEqual(true, true));
console.log(deepEqual(null, null));
console.log(deepEqual(undefined, undefined));
console.log(deepEqual(NaN, NaN));
console.log(deepEqual([], []));
console.log(deepEqual([1, 2, 3], [1, 2, 3]));
console.log(deepEqual(['a', 'b'], ['a', 'b']));
console.log(deepEqual([NaN], [NaN]));
console.log(deepEqual([[1, 2], [3, 4]], [[1, 2], [3, 4]]));
console.log(deepEqual({}, {}));
console.log(deepEqual({ a: 1 }, { a: 1 }));
console.log(deepEqual({ a: NaN }, { a: NaN }));
console.log(deepEqual({ a: { b: 2 } }, { a: { b: 2 } }));
console.log(deepEqual({ a: [1, 2] }, { a: [1, 2] }));
console.log(deepEqual(
  { a: [{ b: NaN }, 3], c: 'x' },
  { a: [{ b: NaN }, 3], c: 'x' }
));

console.log('\nFALSE:\n');

console.log(deepEqual(1, '1'));
console.log(deepEqual(true, 1));
console.log(deepEqual(null, undefined));
console.log(deepEqual(1, 2));
console.log(deepEqual('a', 'b'));
console.log(deepEqual(false, true));
console.log(deepEqual(NaN, 5));
console.log(deepEqual(5, NaN));
console.log(deepEqual([1, 2], [1, 2, 3]));
console.log(deepEqual([1, 2], [2, 1]));
console.log(deepEqual([NaN], [1]));
console.log(deepEqual([[1]], [[2]]));
console.log(deepEqual({ a: 1 }, { a: 2 }));
console.log(deepEqual({ a: 1 }, { b: 1 }));
console.log(deepEqual({ a: NaN }, { a: 1 }));
console.log(deepEqual({ a: [1, 2] }, { a: [2, 1] }));
console.log(deepEqual({ a: { b: 1 } }, { a: { b: 2 } }));
console.log(deepEqual([1, 2], { 0: 1, 1: 2 }));
console.log(deepEqual(
  { a: [{ b: NaN }, 3], c: 'x' },
  { a: [{ b: NaN }, 4], c: 'x' }
));

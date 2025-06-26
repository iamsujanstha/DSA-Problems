const array = [2, 5, 8, 9];

function rotationPrint(arr) {
  let current = [...arr]; // make a copy to preserve original
  return function () {
    // Rotate the array by 1 to the left
    const shifted = current.shift();
    current.push(shifted);
    return [...current]; // return a copy to avoid mutation outside
  }
  // (); -> if we use `()` then no closure is formed because it the inner function is invoked inside the same outer function call.

}

const rotator = rotationPrint(array);


console.log(rotator()); // [5, 8, 9, 2]
console.log(rotator()); // [8, 9, 2, 5]
console.log(rotator()); // [9, 2, 5, 8]


/* 
  A closure would typically be used if we wanted to retain state between multiple function calls — for example, 
  if we wanted to incrementally rotate an array over time, retaining the state of the array between function calls. 
  But in this case, everything is handled within a single function call, so there's no need to use a closure.
*/




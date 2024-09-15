const arr = new Array(20);

const arr1 = [1, 3, 4];

const arr2 = new Array(10).fill() // makes index for array with empty undefined

console.log(arr.length)


arr.forEach((element) => {
  console.log(element); // here forEach is not working
})

console.log({ ...arr })  // while creating with new Array(20) it does not have index so any map methods do not work to solve use `new Array(20).fll('')`
console.log({ ...arr1 })
console.log({ ...arr2 })
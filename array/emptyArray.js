const arr1 = new Array(20);

const arr2 = [1, 3, 4];

const arr3 = new Array(10).fill() // makes index for array with empty undefined

console.log(arr1.length)


arr1.forEach((element) => {
  console.log(element); // here forEach is not working because there is no index
})

console.log({ ...arr1 })  // while creating with new Array(20) it does not have index so any map methods do not work to solve use `new Array(20).fll('')`
console.log({ ...arr2 })
console.log({ ...arr3 })
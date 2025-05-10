function rotation(arr, num) {
  let times = 1;
  while (times <= num) {
    let lastElement = arr.pop();
    arr.unshift(lastElement);
    times++;
  }
  return arr;
}

console.log(rotation([1, 2, 3, 4, 5], 3))

function replicateNumber(num, times) {
  if (times <= 0) return [];

  if (times === 1) {
    [num]
  }
  let smallOp = replicateNumber(num, times - 1)

  return [num].concat(smallOp)
}

console.log(replicateNumber(5, 3))
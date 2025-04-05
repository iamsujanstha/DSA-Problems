function isMonotonicArray(arr) {
  if (arr.length <= 1) return true;

  let increasing = true;
  let decreasing = true;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= arr[i - 1]) {
      decreasing = false;
    } else if (arr[i] <= arr[i - 1]) {
      increasing = false;
    }
  }

  return increasing || decreasing;
}


module.exports = { isMonotonicArray }



//Increasing Monotonic => [1,4,5,7]
//Decreasing Monotonic => [4,3,2,1]
//Non Monotonic => [3,4,6,2]
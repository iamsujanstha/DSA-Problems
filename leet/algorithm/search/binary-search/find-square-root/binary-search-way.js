function findSqureRoot(num) {
  let start = 0;
  let end = num;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (mid ** 2 === num) {
      return mid;
    }
    else if (mid ** 2 < num) {
      start = mid + 1;
    }
    else {
      end = mid - 1
    }
  }
  return end;
}

console.log(findSqureRoot(10))
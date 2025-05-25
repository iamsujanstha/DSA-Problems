// multiple of 3 -> fizz
// multiple of 5 -> buzz
// mulitple of 3&5 -> fizzBuzz
function fizzBuzz(num) {
  let arr = [];
  for (let n = 1; n <= num; n++) {
    if (n % 3 === 0 && n % 5 === 0) {
      arr.push('fizzBuzz');
    }
    else if (n % 3 === 0) {
      arr.push('fizz')
      continue;
    }
    else if (n % 5 === 0) {
      arr.push('buzz');
      continue;
    }
    else {
      arr.push(n);
    }
  }
  return arr;
}

console.log(fizzBuzz(15))
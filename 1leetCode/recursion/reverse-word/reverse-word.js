function reverseWord(str) {
  if (str.length === 0) return str;

  let strArr = str.split(' ');
  let smallOp = reverseWord(strArr.slice(1).join(' '));

  return smallOp + (smallOp.length > 0 ? ' ' : '') + strArr[0]
}

console.log(reverseWord('Are you there!!'))
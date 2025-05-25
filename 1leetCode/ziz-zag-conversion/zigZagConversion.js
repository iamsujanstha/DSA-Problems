function zigZagConversion(str, numRows) {
  if (numRows === 1) return str;

  let rows = Array.from({ length: numRows }, () => "");
  let index = 0;
  let direction = 0;

  for (let char of str) {
    rows[index] += char;

    if (index === 0) direction = 1;
    if (index === numRows - 1) direction = -1;

    index += direction;
  }

  return rows.join('')
}

console.log(zigZagConversion("PAYPALISHIRING", 4));


/* 
  P     I    N
  A   L S  I G
  Y A   H R
  P     I

*/
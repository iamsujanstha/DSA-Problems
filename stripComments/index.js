function solution(input, markers) {
  return input.split('\n')   // [aa + bb,cc - dd,ee * ff]
    .map(str => markers.reduce((acc, curr) => {
      acc = acc.split(curr)[0]
      return acc;
    }, str).trimEnd())
    .join('/n');
}

console.log(solution('aa + bb\ncc - dd\nee * ff', ['+', '-', '*']))

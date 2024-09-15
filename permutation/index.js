function permutations(str) {
  return (str.length <= 1) ? [str] :
    Array.from(new Set(
      str.split('')
        .map((char, i) => permutations(str.substr(0, i) + str.substr(i + 1)).map(p => char + p))
        .reduce((r, x) => r.concat(x), [])
    ));
}

console.log(permutations("aabb")) 
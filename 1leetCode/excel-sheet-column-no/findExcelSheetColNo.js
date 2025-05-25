function findExcelSheetColNo(str) {
  let alphabet = [...'abcdefghijklmnopqrstuvwxyz'];

  return [...str].reverse().reduce((acc, curr, pow) => {
    acc += (alphabet.indexOf(curr.toLowerCase()) + 1) * 26 ** pow;
    return acc;
  }, 0)
}

console.log(findExcelSheetColNo("AABC"))
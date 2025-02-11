function findFirstAndLastOccurrence(arr, key) {
return [arr.indexOf(key), arr.lastIndexOf(key)]
}

console.log(findFirstAndLastOccurrence([10, 43, 30, 43, 43, 53], 43))
const words = ["listen", "silent", "enlist", "eat", "tea", "ate", "bat"];

/* [
  ["listen", "silent", "enlist"],
  ["eat", "tea", "ate"],
  ["bat"]
]
 */
function groupAnagram(words) {
  const map = new Map();

  for (let word of words) {
    const sorted = word.split('').sort().join();

    if (!map.has(sorted)) {
      map.set(sorted, [])
    }

    map.get(sorted).push(word)
  }
  return Array.from(map.values());
}

console.log(groupAnagram(words))
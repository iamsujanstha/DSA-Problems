function commonPrefix(arr) {
  if (!arr.length) return null;
  const arrLen = arr.length;
  let prefix = arr[0];
  for (let i = 1; i < arrLen; i++) {
    while (!arr[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1); // Shorten the prefix
      if (prefix === "") return ""; // No common prefix exists
    }
  }

  return prefix;
}

console.log(commonPrefix(["geeKfosez", "geeK", "geedafd"])) 
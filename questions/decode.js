/* 
Input: s = "12"
Output: 2
Explanation: "12" could be decoded as "AB" (1 2) or "L" (12).

Input: s = "226"
Output: 3
Explanation: "226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).

Input: s = "06"
Output: 0
Explanation: "06" cannot be mapped to "F" because of the leading zero ("6" is different from "06").
 */


const numDecodings = (s) => {
  if (s[0] === '0') return 0
  debugger;
  const howManyDecodes = Array(s.length + 1).fill(0)
  howManyDecodes[0] = 1
  howManyDecodes[1] = 1

  for (let i = 2; i <= s.length; i++) {
    const single = s.slice(i - 1, i);
    const double = s.slice(i - 2, i);

    if (single > 0) howManyDecodes[i] = howManyDecodes[i - 1];
    if (double >= 10 && double <= 26) howManyDecodes[i] += howManyDecodes[i - 2]
  }
  return howManyDecodes[s.length]
};

console.log(numDecodings('226'))
/*  What is a subsequence?
      A string w is a subsequence of string s if:
      You can remove some characters from s (without reordering the rest) to get w.

  Example:

  "ace" is a subsequence of "abcde" → we remove 'b' and 'd'

 */
function numMatchingSubseq(s, words) {
  let count = 0;

  for (const word of words) {
    if (isSubsequence(word, s)) {
      count++;
    }
  }

  return count;
}

function isSubsequence(word, s) {
  let i = 0; // pointer for word

  for (const char of s) {
    if (char === word[i]) {
      i++;
    }
    if (i === word.length) {
      return true;
    }
  }

  return i === word.length;
}


console.log(numMatchingSubseq("abcde", ["a", "bb", "acd", "ace"]));

console.log(numMatchingSubseq("dsahjpjauf", ["ahjpjau", "ja", "ahbwzgqnuk", "tnmlanowax"])); 

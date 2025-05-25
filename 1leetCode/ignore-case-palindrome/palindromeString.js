function palindromeString(str) {
  // Helper function to check if a character is alphanumeric
  const isAlphanumeric = (char) => {
    const code = char.charCodeAt(0);
    return (
      (code >= 48 && code <= 57) || // '0'-'9'
      (code >= 65 && code <= 90) || // 'A'-'Z'
      (code >= 97 && code <= 122)  // 'a'-'z'
    );
  };

  // Convert to lowercase and filter out non-alphanumeric characters
  const filteredChars = [...str.toLowerCase()].filter(isAlphanumeric);

  // Check if the filtered string is the same forwards and backwards
  return filteredChars.join('') === filteredChars.reverse().join('');
}

console.log(palindromeString("A man, a plan, a canal: Panama"));

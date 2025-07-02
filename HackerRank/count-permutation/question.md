# Count String Permutations
### Description

Determine the number of strings of a specified length that can be formed under the following constraints:

- Each character must be a vowel from the set `{a, e, i, o, u}`.
- The letter **'a'** can only be followed by **'e'**.
- The letter **'e'** can only be followed by **'a'** or **'i'**.
- The letter **'i'** cannot be followed by another **'i'**.
- The letter **'o'** can only be followed by **'i'** or **'u'**.
- The letter **'u'** can only be followed by **'a'**.

### Example

For strings of length 2, the valid permutations are:

```
"ae", "ea", "ei", "ie", "io", "iu", "oi", "ou", "ua"
```

Thus, the count is **9**.

### Input

- `n`: The length of the string to analyze (`0 < n < 10^5`).

### Output

- The number of valid permutations modulo `10^9 + 7`.
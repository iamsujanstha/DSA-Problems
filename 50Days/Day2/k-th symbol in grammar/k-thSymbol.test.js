const { kthGrammar } = require("./Question1");

describe('kthGrammar', () => {
  it('should return 0 for the 1st symbol of the 1st row', () => {
    const result = kthGrammar(1, 1);
    const expected = 0;
    expect(result).toBe(expected);
    console.log(`Input: (n=1, k=1) | Expected: ${expected} | Result: ${result}`);
  });

  it('should return 0 for the 1st symbol of the 2nd row', () => {
    const result = kthGrammar(2, 1);
    const expected = 0;
    expect(result).toBe(expected);
    console.log(`Input: (n=2, k=1) | Expected: ${expected} | Result: ${result}`);
  });

  it('should return 1 for the 2nd symbol of the 2nd row', () => {
    const result = kthGrammar(2, 2);
    const expected = 1;
    expect(result).toBe(expected);
    console.log(`Input: (n=2, k=2) | Expected: ${expected} | Result: ${result}`);
  });

  it('should return 0 for the 1st symbol of the 3rd row', () => {
    const result = kthGrammar(3, 1);
    const expected = 0;
    expect(result).toBe(expected);
    console.log(`Input: (n=3, k=1) | Expected: ${expected} | Result: ${result}`);
  });

  it('should return 1 for the 2nd symbol of the 3rd row', () => {
    const result = kthGrammar(3, 2);
    const expected = 1;
    expect(result).toBe(expected);
    console.log(`Input: (n=3, k=2) | Expected: ${expected} | Result: ${result}`);
  });

  it('should return 1 for the 3rd symbol of the 3rd row', () => {
    const result = kthGrammar(3, 3);
    const expected = 1;
    expect(result).toBe(expected);
    console.log(`Input: (n=3, k=3) | Expected: ${expected} | Result: ${result}`);
  });

  it('should return 0 for the 4th symbol of the 3rd row', () => {
    const result = kthGrammar(3, 4);
    const expected = 0;
    expect(result).toBe(expected);
    console.log(`Input: (n=3, k=4) | Expected: ${expected} | Result: ${result}`);
  });

  it('should return 0 for the 1st symbol of the 4th row', () => {
    const result = kthGrammar(4, 1);
    const expected = 0;
    expect(result).toBe(expected);
    console.log(`Input: (n=4, k=1) | Expected: ${expected} | Result: ${result}`);
  });

  it('should return 1 for the 2nd symbol of the 4th row', () => {
    const result = kthGrammar(4, 2);
    const expected = 1;
    expect(result).toBe(expected);
    console.log(`Input: (n=4, k=2) | Expected: ${expected} | Result: ${result}`);
  });

  it('should return 1 for the 3rd symbol of the 4th row', () => {
    const result = kthGrammar(4, 3);
    const expected = 1;
    expect(result).toBe(expected);
    console.log(`Input: (n=4, k=3) | Expected: ${expected} | Result: ${result}`);
  });

  it('should return 0 for the 4th symbol of the 4th row', () => {
    const result = kthGrammar(4, 4);
    const expected = 0;
    expect(result).toBe(expected);
    console.log(`Input: (n=4, k=4) | Expected: ${expected} | Result: ${result}`);
  });

  it('should return 1 for the 5th symbol of the 4th row', () => {
    const result = kthGrammar(4, 5);
    const expected = 1;
    expect(result).toBe(expected);
    console.log(`Input: (n=4, k=5) | Expected: ${expected} | Result: ${result}`);
  });

  it('should return 0 for the 6th symbol of the 4th row', () => {
    const result = kthGrammar(4, 6);
    const expected = 0;
    expect(result).toBe(expected);
    console.log(`Input: (n=4, k=6) | Expected: ${expected} | Result: ${result}`);
  });

  it('should return 0 for the 7th symbol of the 4th row', () => {
    const result = kthGrammar(4, 7);
    const expected = 0;
    expect(result).toBe(expected);
    console.log(`Input: (n=4, k=7) | Expected: ${expected} | Result: ${result}`);
  });

  it('should return 1 for the 8th symbol of the 4th row', () => {
    const result = kthGrammar(4, 8);
    const expected = 1;
    expect(result).toBe(expected);
    console.log(`Input: (n=4, k=8) | Expected: ${expected} | Result: ${result}`);
  });

  it('should return 0 for the 7th symbol of the 5th row', () => {
    const result = kthGrammar(5, 7);
    const expected = 0;
    expect(result).toBe(expected);
    console.log(`Input: (n=5, k=7) | Expected: ${expected} | Result: ${result}`);
  });

  it('should return 1 for the 15th symbol of the 5th row', () => {
    const result = kthGrammar(5, 15);
    const expected = 1;
    expect(result).toBe(expected);
    console.log(`Input: (n=5, k=15) | Expected: ${expected} | Result: ${result}`);
  });

  it('should return 0 for the 16th symbol of the 5th row', () => {
    const result = kthGrammar(5, 16);
    const expected = 0;
    expect(result).toBe(expected);
    console.log(`Input: (n=5, k=16) | Expected: ${expected} | Result: ${result}`);
  });
});

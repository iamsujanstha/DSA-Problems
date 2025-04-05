const { intersection } = require("./index");

describe("intersection function", () => {
  it('returns correct intersection of two arrays', () => {
    expect(intersection([3, 1, 4, 2], [4, 5, 3, 6])).toEqual([3, 4]);
  });

  it('returns empty array if no common elements', () => {
    expect(intersection([1, 2, 3], [4, 5, 6])).toEqual([]);
  });

  it('returns correct elements without duplicates in result', () => {
    expect(intersection([1, 2, 2, 3], [2, 2, 4])).toEqual([2, 2]);
  });

  it('handles empty arrays', () => {
    expect(intersection([], [1, 2])).toEqual([]);
    expect(intersection([1, 2], [])).toEqual([]);
  });
});

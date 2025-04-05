const { isMonotonicArray } = require('./monotonic');

describe("Test array monotonic or not", () => {
  it("increasing monotonic", () => {
    expect(isMonotonicArray([1, 3, 4])).toEqual(true)
  });

  it("decreasing monotonic", () => {
    expect(isMonotonicArray([4, 5, 6, 9])).toEqual(true)
  });

  it("equal array value", () => {
    expect(isMonotonicArray([3, 3, 3, 3])).toEqual(true)
  });

  it("non monotonic", () => {
    expect(isMonotonicArray([4, 3, 1, 0, 1, 3])).toEqual(false)
  });

  it("empty array", () => {
    expect(isMonotonicArray([])).toEqual(true)
  })
})
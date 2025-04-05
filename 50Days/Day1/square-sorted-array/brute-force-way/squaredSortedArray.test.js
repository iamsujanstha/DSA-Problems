const { squaredSortedArray } = require("./squaredSortedArray")

describe("Squared Sorted Array", () => {
  it('positive input array', () => {
    expect(squaredSortedArray([1, 4, 6, 8])).toEqual([1, 16, 36, 64])
  });

  it('positive negative input array', () => {
    expect(squaredSortedArray([-4, -2, 1, 3])).toEqual([1, 4, 9, 16])
  });

  it('if input array is empty', () => {
    expect(squaredSortedArray([])).toEqual([])
  })
})
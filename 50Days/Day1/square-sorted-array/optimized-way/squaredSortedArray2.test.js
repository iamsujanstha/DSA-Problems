const { optimizedSquareArray } = require("./optimizedSquareArray")

describe("Squared Sorted Array", () => {
  it('positive input array', () => {
    expect(optimizedSquareArray([1, 4, 6, 8])).toEqual([1, 16, 36, 64])
  });

  it('positive negative input array', () => {
    expect(optimizedSquareArray([-4, -2, 1, 3])).toEqual([1, 4, 9, 16])
  });

  it('if input array is empty', () => {
    expect(optimizedSquareArray([])).toEqual([])
  })
})
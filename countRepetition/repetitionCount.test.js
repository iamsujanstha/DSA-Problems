const { countRepeatedWord } = require("./index");

describe("Count Repeated Word", () => {
  it("count sentence", () => {
    expect(countRepeatedWord('This is alpha')).toEqual({ T: 1, h: 2, i: 2, s: 2, ' ': 2, a: 2, l: 1, p: 1 })
  });

  it("count word", () => {
    expect(countRepeatedWord('Hello')).toEqual({ H: 1, e: 1, l: 2, o: 1 })
  });

  it("space count", () => {
    expect(countRepeatedWord(" ")).toEqual({ " ": 1 })
  });
})
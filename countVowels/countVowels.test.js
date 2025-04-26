const { countVowels } = require('./index')

describe("Count vowels", () => {
  it("test 1", () => {
    expect(countVowels("Hey JS! You Are amazing")).toEqual(8)
  });

  it("test 2", () => {
    expect(countVowels("Hello there")).toEqual(4)
  });

  it("test 3", () => {
    expect(countVowels("An Apple")).toEqual(3)
  });

  it("test 4", () => {
    expect(countVowels("")).toEqual(0)
  })
})
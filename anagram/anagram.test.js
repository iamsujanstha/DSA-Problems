const { matchString } = require("./index");

describe("Match string", () => {
  it("first match", () => {
    expect(matchString("codeher", "decoere")).toEqual(false);
  });

  it("second match", () => {
    expect(matchString("madam", "damam")).toEqual(true);
  });

  it("third match", () => {
    expect(matchString("elephant", "hantplee")).toEqual(true);
  });

  it("No string", () => {
    expect(matchString("", "")).toEqual(true)
  })
})
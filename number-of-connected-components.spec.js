const {
  numberOfConnectedComponents,
} = require("./number-of-connected-components");

describe("given numberOfConnectedComponents", () => {
  it("should count the number of the connected components", () => {
    expect(
      numberOfConnectedComponents(5, [
        [0, 1],
        [1, 2],
        [3, 4],
      ])
    ).toBe(2);
  });
});

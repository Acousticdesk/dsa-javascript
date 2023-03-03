const { quickSort } = require("./quick-sort");

describe("given quickSort", () => {
  it("should sort numbers", () => {
    const arr = [1, 9, 2, 8, 3, 7, 4, 6, 5];

    expect(quickSort(arr)).toEqual(arr.sort((a, b) => a - b));
  });
});

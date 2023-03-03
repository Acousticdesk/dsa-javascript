const { binarySearch } = require("./binary-search");

describe("given binary-search", () => {
  it("should search for an item in a sorted array", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    expect(binarySearch(arr, 9)).toEqual(arr.length - 2);
  });

  it("should find a value and return a correct index from the beginning of the array", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    expect(binarySearch(arr, 1)).toEqual(0);
  });
});

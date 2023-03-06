const { binarySearch, binarySearchIterative } = require("./binary-search");

describe("given binarySearch", () => {
  it("should search for an item in a sorted array", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    expect(binarySearch(arr, 9)).toEqual(arr.length - 2);
  });

  it("should find a value and return a correct index from the beginning of the array", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    expect(binarySearch(arr, 1)).toEqual(0);
  });

  it("should return 0 if no items were found", () => {
    const arr = [1, 2, 3];

    expect(binarySearch(arr, 4)).toEqual(-1);
  });
});

describe("given binarySearchIterative", () => {
  it("should search for an item in a sorted array", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    expect(binarySearchIterative(arr, 9)).toEqual(arr.length - 2);
  });

  it("should find a value and return a correct index from the beginning of the array", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    expect(binarySearchIterative(arr, 1)).toEqual(0);
  });

  it("should return 0 if no items were found", () => {
    const arr = [1, 2, 3];

    expect(binarySearchIterative(arr, 4)).toEqual(-1);
  });
});

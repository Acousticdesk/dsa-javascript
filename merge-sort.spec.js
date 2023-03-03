const { split, merge, mergeSort, verifySorted } = require("./merge-sort");

describe("mergeSort", () => {
  describe("split", () => {
    it("should split an array with even length into half", () => {
      const arr = [1, 2, 3, 4];
      const [left, right] = split(arr);
      expect(left).toEqual([1, 2]);
      expect(right).toEqual([3, 4]);
    });

    it("should split an array with odd length into half", () => {
      const arr = [1, 2, 3];
      const [left, right] = split(arr);
      expect(left).toEqual([1]);
      expect(right).toEqual([2, 3]);
    });
  });

  describe("merge", () => {
    it("should merge arrays", () => {
      const arr1 = [1, 2, 7];
      const arr2 = [2, 4, 9];

      expect(merge(arr1, arr2)).toEqual([1, 2, 2, 4, 7, 9]);
    });

    it("should merge arrays with different lengths", () => {
      const arr1 = [1, 2, 3];
      const arr2 = [4, 5, 6, 7, 8, 9, 10];

      expect(merge(arr1, arr2)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
  });

  describe("given mergeSort", () => {
    it("should sort an unsorted array", () => {
      const arr = [54, 62, 93, 17, 77, 31, 44, 55, 20];

      expect(mergeSort(arr)).toEqual(arr.sort((a, b) => a - b));
    });
  });

  describe("given verifySorted", () => {
    it("should verify if array is sorted", () => {
      const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      expect(verifySorted(arr)).toBe(true);
    });

    it("should verify if array is not sorted", () => {
      const arr = [1, 2, 3, 5, 4, 6, 7, 8, 9];

      expect(verifySorted(arr)).toBe(false);
    });
  });
});

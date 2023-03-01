const { split, merge, mergeSort } = require("./merge-sort");

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
    it("should merge arrays while sorting them", () => {
      const arr1 = [1, 7, 2];
      const arr2 = [2, 9, 4];

      expect(merge(arr1, arr2)).toEqual([1, 7, 2, 2, 9, 4]);
    });
  });

  describe("given mergeSort", () => {
    it("should sort an unsorted array", () => {
      const arr = [1, 9, 2, 8, 3, 7, 4, 6, 5];

      expect(mergeSort(arr)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
  });
});

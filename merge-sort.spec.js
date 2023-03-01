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
      const arr1 = [1, 2, 7];
      const arr2 = [2, 4, 9];

      expect(merge(arr1, arr2)).toEqual([1, 2, 2, 4, 7, 9]);
    });
  });

  describe("given mergeSort", () => {
    it("should sort an unsorted array", () => {
      const arr = [54, 62, 93, 17, 77, 31, 44, 55, 20];

      expect(mergeSort(arr)).toEqual(arr.sort((a, b) => a - b));
    });
  });
});

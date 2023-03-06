const { MinHeap } = require("./heap");

describe("given MinHeap", () => {
  describe("given insert", () => {
    it("should insert new values", () => {
      const heap = new MinHeap(10);

      heap.insert(20);
      heap.insert(30);
      heap.insert(40);

      expect(heap.heap).toEqual([10, 20, 30, 40]);
    });

    it("should insert new value and elevate it to the top of the tree if it's not in the correct spot", () => {
      const heap = new MinHeap(10);

      heap.insert(20);
      heap.insert(30);
      heap.insert(40);
      heap.insert(1);
      heap.insert(0);

      expect(heap.heap).toEqual([0, 10, 1, 40, 20, 30]);

      //                           0
      //                        /     \
      //                       10      1
      //                      /  \    /
      //                     40  20  30
    });
  });

  describe("given peek", () => {
    it("should show the min value in the heap", () => {
      const heap = new MinHeap(10);

      heap.insert(1);
      heap.insert(0);

      expect(heap.peek()).toBe(0);
    });
  });

  describe("given pop", () => {
    it("should should remove the min value from the heap and bubble the swap element to a correct place", () => {
      const heap = new MinHeap(1);

      heap.insert(5);
      heap.insert(1);
      heap.insert(8);
      heap.insert(6);
      heap.insert(2);
      heap.insert(2);
      heap.insert(13);
      heap.insert(12);
      heap.insert(11);
      heap.insert(7);
      heap.insert(2);
      heap.insert(15);
      heap.insert(3);
      heap.insert(10);

      expect(heap.heap).toEqual([
        1, 5, 1, 8, 6, 2, 2, 13, 12, 11, 7, 2, 15, 3, 10,
      ]);

      expect(heap.pop()).toBe(1);

      expect(heap.heap).toEqual([
        1, 5, 2, 8, 6, 2, 2, 13, 12, 11, 7, 10, 15, 3,
      ]);
    });
  });
});

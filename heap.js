// left child = 2i + 1
// right child = 2i + 2
// parent = (i - 1) / 2
class MinHeap {
  constructor(first) {
    this.heap = [];

    if (first) {
      this.heap.push(first);
    }
  }

  peek() {
    return this.heap[0];
  }

  // bubble down
  pop() {
    const removed = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();

    let bubbleIndex = 0;

    while (true) {
      const leftChild = this.heap[leftChildIndex(bubbleIndex)];
      const rightChild = this.heap[rightChildIndex(bubbleIndex)];

      const swap =
        leftChild <= rightChild
          ? leftChildIndex(bubbleIndex)
          : rightChildIndex(bubbleIndex);

      if (this.heap[swap] < this.heap[bubbleIndex]) {
        const temp = this.heap[bubbleIndex];
        this.heap[bubbleIndex] = this.heap[swap];
        this.heap[swap] = temp;

        bubbleIndex = swap;
      } else {
        return removed;
      }
    }
  }

  // bubble up
  insert(value) {
    this.heap.push(value);

    let index = this.heap.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);
    let parent = this.heap[parentIndex];

    while (parent > value) {
      const temp = this.heap[parentIndex];
      this.heap[parentIndex] = this.heap[index];
      this.heap[index] = temp;

      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
      parent = this.heap[parentIndex];
    }
  }

  // can bubble up
  // can bubble down (is not implemented)
  remove(value) {
    let removeIndex;

    for (let i = 0; i < this.heap.length; i += 1) {
      if (value === this.heap[i]) {
        removeIndex = i;
        break;
      }
    }

    if (typeof removeIndex !== "number") {
      return false;
    }

    this.heap[removeIndex] = this.heap[this.heap.length - 1];
    this.heap.pop();

    while (true) {
      const parent = this.heap[parentIndex(removeIndex)];

      if (parent > this.heap[removeIndex]) {
        const temp = this.heap[removeIndex];
        this.heap[removeIndex] = this.heap[parentIndex(removeIndex)];
        this.heap[parentIndex(removeIndex)] = temp;

        removeIndex = parentIndex(removeIndex);
      } else {
        return value;
      }
    }
  }
}

function leftChildIndex(index) {
  return 2 * index + 1;
}

function rightChildIndex(index) {
  return 2 * index + 2;
}

function parentIndex(index) {
  return Math.floor((index - 1) / 2);
}

module.exports = {
  MinHeap,
};

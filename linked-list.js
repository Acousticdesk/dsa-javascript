class LinkedListNode {
  constructor(value) {
    this.value = value;
  }
}

class LinkedList {
  constructor(head, traverseLogic) {
    this.head = head;
    this.traverseLogic = traverseLogic;
  }

  // 'a' -> 'b' -> 'c'
  // insert(ä, 1)

  // 'a'
  // insert('ä', 1)

  insert(value, index) {
    let current = this.head;
    let currentIndex = 0;

    while (current) {
      if (index === 0) {
        this.head = new LinkedListNode(value);
        this.head.next = current;
        return true;
      }

      if (currentIndex === index - 1) {
        const inserted = new LinkedListNode(value);
        inserted.next = current.next;
        current.next = inserted;
        return true;
      }

      current = current.next;
      currentIndex += 1;
    }

    return false;
  }

  search(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return true;
      }

      current = current.next;
    }

    return false;
  }

  // 'a' -> 'b' -> 'c'
  // delete('b')

  delete(value) {
    let current = this.head;
    let previous = null;

    while (current) {
      const isHead = !previous;

      if (isHead && current.value === value) {
        this.head = current.next;
        return current.value;
      }

      if (current.value === value) {
        previous.next = current.next;
        return current.value;
      }

      previous = current;
      current = current.next;
    }
  }

  traverse() {
    let current = this.head;

    while (current) {
      this.traverseLogic(current.value);
      current = current.next;
    }
  }

  toString() {
    let current = this.head;
    let string = "";

    while (current) {
      console.log(current.value);
      string += current.value;
      string += " ";

      current = current.next;
    }

    return string.trimEnd();
  }
}

module.exports = {
  LinkedList,
  LinkedListNode,
};

// class LinkedListNode {
//   constructor(value) {
//     this.value = value;
//   }
// }
//
// class LinkedList {
//   constructor(head, traverseLogic) {
//     this.head = head;
//     this.traverseLogic = traverseLogic;
//   }
//
//   // 'a' -> 'b' -> 'c'
//   // insert(ä, 1)
//
//   // 'a'
//   // insert('ä', 1)
//
//   insert(value, index) {
//     let current = this.head;
//     let currentIndex = 0;
//
//     while (current) {
//       if (index === 0) {
//         this.head = new LinkedListNode(value);
//         this.head.next = current;
//         return true;
//       }
//
//       if (currentIndex === index - 1) {
//         const inserted = new LinkedListNode(value);
//         inserted.next = current.next;
//         current.next = inserted;
//         return true;
//       }
//
//       current = current.next;
//       currentIndex += 1;
//     }
//
//     return false;
//   }
//
//   search(value) {
//     let current = this.head;
//
//     while (current) {
//       if (current.value === value) {
//         return true;
//       }
//
//       current = current.next;
//     }
//
//     return false;
//   }
//
//   // 'a' -> 'b' -> 'c'
//   // delete('b')
//
//   delete(value) {
//     let current = this.head;
//     let previous = null;
//
//     while (current) {
//       const isHead = !previous;
//
//       if (isHead && current.value === value) {
//         this.head = current.next;
//         return current.value;
//       }
//
//       if (current.value === value) {
//         previous.next = current.next;
//         return current.value;
//       }
//
//       previous = current;
//       current = current.next;
//     }
//   }
//
//   traverse() {
//     let current = this.head;
//
//     while (current) {
//       this.traverseLogic(current.value);
//       current = current.next;
//     }
//   }
//
//   toString() {
//     let current = this.head;
//     let string = "";
//
//     while (current) {
//       string += current.value;
//       string += " ";
//
//       current = current.next;
//     }
//
//     return string.trimEnd();
//   }
// }

class LinkedListNode {
  next = null;
  constructor(value) {
    this.value = value;
  }
}

class LinkedList {
  constructor(root, traverseCallback) {
    this.root = root;
    this.traverseCallback = traverseCallback;
  }

  insert(value) {
    if (!this.root) {
      this.root = value;
      return;
    }

    let current = this.root;

    while (current.next) {
      current = current.next;
    }

    current.next = new LinkedListNode(value);
  }

  insertAtIndex(value, index) {
    if (index === 0) {
      const prevRoot = this.root;
      this.root = new LinkedListNode(value);
      this.root.next = prevRoot;
      return;
    }

    let current = this.root;
    let prev = null;
    let currentIndex = 0;

    while (current) {
      if (currentIndex === index) {
        const newNode = new LinkedListNode(value);
        prev.next = newNode;
        newNode.next = current;
        return;
      }

      prev = current;
      current = current.next;
      currentIndex += 1;
    }

    // insert at the end of the list
    if (currentIndex === index) {
      prev.next = new LinkedListNode(value);
    }
  }

  search(value) {
    let current = this.root;

    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }

    return false;
  }

  delete(value) {
    let current = this.root;
    let prev = null;

    if (this.root.value === value) {
      const prevRoot = this.root;
      this.root = this.root.next;
      return prevRoot.value;
    }

    while (current) {
      if (current.value === value) {
        prev.next = current.next;
        return current.value;
      }

      prev = current;
      current = current.next;
    }
  }

  traverse() {
    let current = this.root;

    while (current) {
      if (this.traverseCallback) {
        this.traverseCallback(current.value);
      }
      current = current.next;
    }
  }

  toString() {
    let current = this.root;
    let result = "";

    while (current) {
      result += current.value;
      result += " ";
      current = current.next;
    }

    return result.trimEnd();
  }
}

module.exports = {
  LinkedList,
  LinkedListNode,
};

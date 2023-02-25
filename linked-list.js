// 23-02-23

// export class LinkedListNode {
//   next = null;

//   constructor(value) {
//     this.value = value;
//   }
// }

// export class LinkedList {
//   static TraversalLogicLog = (value) => {
//     console.log(value);
//   };

//   constructor(head, traversalLogic) {
//     this.head = head;
//     this.traversalLogic = traversalLogic;
//   }

//   traverse() {
//     if (!this.traversalLogic) {
//       this.traversalLogic = LinkedList.TraversalLogicLog;
//     }

//     let current = this.head;

//     while (current) {
//       this.traversalLogic(current);
//       current = current.next;
//     }
//   }

//   search(value) {
//     let current = this.head;

//     while (current) {
//       if (current.value === value) {
//         return true;
//       }
//       current = current.next;
//     }
//     return false;
//   }

//   insert(value, index) {
//     let current = this.head;
//     let currentIndex = 0;

//     while (current) {
//       if (index === 0) {
//         const inserted = new LinkedListNode(value);
//         inserted.next = current;
//         this.head = inserted;
//         return true;
//       }

//       if (currentIndex === index - 1) {
//         const inserted = new LinkedListNode(value);
//         inserted.next = current.next;
//         current.next = inserted;
//         return true;
//       }

//       currentIndex += 1;
//       current = current.next;
//     }

//     return false;
//   }

//   delete(value) {
//     let current = this.head;
//     let previous = null;
//     let currentIndex = 0;

//     while (current) {
//       if (current.value === value) {
//         if (currentIndex === 0) {
//           this.head = current.next;
//           return current.value;
//         }
//         previous.next = current.next;
//         return current.value;
//       }

//       previous = current;
//       current = current.next;
//       currentIndex += 1;
//     }
//   }

//   toString() {
//     let string = "";
//     let current = this.head;

//     while (current) {
//       string += current.value;
//       string += " ";
//       current = current.next;
//     }

//     return string.trimEnd();
//   }
// }

// 24-02-23

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
  LinkedListNode
}

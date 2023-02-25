class DoublyLinkedListNode {
  previous = null;
  next = null;

  constructor(value) {
    this.value = value;
  }
}

class DoublyLinkedList {
  constructor(head, tail) {
    this.head = head;
    this.tail = tail;
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
  
  searchEnd(value) {
    let current = this.tail;

    while (current) {
      if (current.value === value) {
        return true;
      }

      current = current.previous;
    }

    return false;
  }
}

const a = new DoublyLinkedListNode('a');
const b = new DoublyLinkedListNode('b');
a.next = b;
b.previous = a;
const c = new DoublyLinkedListNode('c');
b.next = c;
c.previous = b;

const doublyLinkedList = new DoublyLinkedList(a, c);

module.exports = {
  DoublyLinkedList,
  DoublyLinkedListNode
}

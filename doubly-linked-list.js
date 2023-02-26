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
  
  // a -> b -> c -> d
  // insert(ä, 1)
  // a -> ä -> b -> c -> d
  
  insert(value, index) {
    let current = this.head;
    let currentIndex = 0;
    
    while (current) {
      
      if (currentIndex === index) {
        const inserted = new DoublyLinkedListNode(value);
        
        inserted.next = current;
        current.previous.next = inserted;
        
        return true;
      }
      
      current = current.next;
      currentIndex += 1;
    }
    
    return false;
  }
  
  toString() {
    let current = this.head;
    let result = '';
    
    while(current) {
      result += current.value;
      result += ' ';
      current = current.next;
    }
    
    return result.trimEnd();
  }
}

module.exports = {
  DoublyLinkedList,
  DoublyLinkedListNode
}

const { DoublyLinkedList, DoublyLinkedListNode } = require("./doubly-linked-list");

describe("DoublyLinkedList", () => {
  it("should search for a value from the beginning of the list", () => {
    const a = new DoublyLinkedListNode("a");
    const b = new DoublyLinkedListNode("b");
    a.next = b;
    b.previous = a;
    const c = new DoublyLinkedListNode("c");
    b.next = c;
    c.previous = b;

    const doublyLinkedList = new DoublyLinkedList(a, c);

    expect(doublyLinkedList.search('b')).toBe(true);
  });
  it("should search for a value from end of the list", () => {
    const a = new DoublyLinkedListNode("a");
    const b = new DoublyLinkedListNode("b");
    a.next = b;
    b.previous = a;
    const c = new DoublyLinkedListNode("c");
    b.next = c;
    c.previous = b;

    const doublyLinkedList = new DoublyLinkedList(a, c);

    expect(doublyLinkedList.searchEnd('b')).toBe(true);
  });
  it("should return false if the value was not found", () => {
    const a = new DoublyLinkedListNode("a");
    const b = new DoublyLinkedListNode("b");
    a.next = b;
    b.previous = a;
    const c = new DoublyLinkedListNode("c");
    b.next = c;
    c.previous = b;

    const doublyLinkedList = new DoublyLinkedList(a, c);

    expect(doublyLinkedList.search('d')).toBe(false);
  });
});

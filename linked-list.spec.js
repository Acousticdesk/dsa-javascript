const { LinkedList, LinkedListNode } = require("./linked-list");

describe("LinkedList", () => {
  it("should insert a value at index", () => {
    const head = new LinkedListNode("a");
    const list = new LinkedList(head);

    list.insertAtIndex("b", 1);

    expect(list.toString()).toBe("a b");

    list.insertAtIndex("c", 2);

    expect(list.toString()).toBe("a b c");

    list.insertAtIndex("à", 0);

    expect(list.toString()).toBe("à a b c");
  });
  it("should insert a value to the end of the list", () => {
    const head = new LinkedListNode("a");
    const list = new LinkedList(head);

    list.insert("b");

    expect(list.toString()).toBe("a b");

    list.insert("c");

    expect(list.toString()).toBe("a b c");
  });
  it("should search for a value", () => {
    const head = new LinkedListNode("a");
    const list = new LinkedList(head);

    list.insertAtIndex("b", 1);

    expect(list.search("b")).toBe(true);
    expect(list.search("c")).toBe(false);
  });
  it("should delete a value", () => {
    const head = new LinkedListNode("a");
    const list = new LinkedList(head);

    list.insert("b");
    list.insert("c");

    expect(list.delete("b")).toBe("b");
    expect(list.toString()).toBe("a c");

    expect(list.delete("a")).toBe("a");
    expect(list.toString()).toBe("c");
  });
  it("should traverse the list", () => {
    const head = new LinkedListNode("a");
    const traversalLogic = jest.fn();
    const list = new LinkedList(head, traversalLogic);

    list.insertAtIndex("b", 1);
    list.insertAtIndex("c", 2);

    list.traverse();

    expect(traversalLogic).toHaveBeenCalledTimes(3);
    expect(traversalLogic).toHaveBeenCalledWith("a");
    expect(traversalLogic).toHaveBeenCalledWith("b");
    expect(traversalLogic).toHaveBeenCalledWith("c");
  });
});

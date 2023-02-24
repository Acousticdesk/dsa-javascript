const { LinkedList, LinkedListNode } = require('./index')

describe("LinkedList", () => {
  it("should insert a value", () => {
    const head = new LinkedListNode("a");
    const list = new LinkedList(head);

    list.insert("b", 1);

    expect(list.toString()).toBe("a b");

    list.insert("c", 2);

    expect(list.toString()).toBe("a b c");

    list.insert("à", 0);

    expect(list.toString()).toBe("à a b c");
  });
  it("should search for a value", () => {
    const head = new LinkedListNode("a");
    const list = new LinkedList(head);

    list.insert("b", 1);

    expect(list.search("b")).toBe(true);
    expect(list.search("c")).toBe(false);
  });
  it("should delete a value", () => {
    const head = new LinkedListNode("a");
    const list = new LinkedList(head);

    list.insert("b", 1);
    list.insert("c", 2);

    expect(list.delete("b")).toBe("b");
    expect(list.toString()).toBe("a c");

    expect(list.delete("a")).toBe("a");
    expect(list.toString()).toBe("c");
  });
  it("should traverse the list", () => {
    const head = new LinkedListNode("a");
    const traversalLogic = jest.fn();
    const list = new LinkedList(head, traversalLogic);

    list.insert("b", 1);
    list.insert("c", 2);

    list.traverse();

    expect(traversalLogic).toHaveBeenCalledTimes(3);
    expect(traversalLogic).toHaveBeenCalledWith("a");
    expect(traversalLogic).toHaveBeenCalledWith("b");
    expect(traversalLogic).toHaveBeenCalledWith("c");
  });
});

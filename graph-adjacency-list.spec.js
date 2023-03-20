const {
  depthFirst,
  breadthFirst,
  hasPath,
  hasPathBST,
} = require("./graph-adjacency-list");

describe("given graph adjacency list", () => {
  let graph;

  beforeEach(() => {
    graph = {
      a: ["b", "c"],
      b: ["d"],
      c: ["e"],
      d: ["f"],
      e: [],
      f: [],
    };
  });

  describe("given depthFirst", () => {
    it("should traverse the graph", () => {
      const result = [];

      const graph = {
        a: ["b", "c"],
        b: ["d"],
        c: ["e"],
        d: ["f"],
        e: [],
        f: [],
      };

      depthFirst(graph, "a", (vertex) => result.push(vertex));

      expect(result).toEqual(["a", "b", "d", "f", "c", "e"]);
    });
  });

  describe("given breadthFirst", () => {
    it("should traverse the graph", () => {
      const result = [];

      const graph = {
        a: ["b", "c"],
        b: ["d"],
        c: ["e"],
        d: ["f"],
        e: [],
        f: [],
      };

      breadthFirst(graph, "a", (vertex) => result.push(vertex));

      expect(result).toEqual(["a", "b", "c", "d", "e", "f"]);
    });
  });

  describe("given hasPath", () => {
    it("should return true if path exists", () => {
      expect(hasPath(graph, "a", "c")).toBe(true);
    });
    it("should return false if path does not exist", () => {
      const graph = {
        a: ["b", "c"],
        b: ["d"],
        c: ["e"],
        d: [],
        e: [],
        f: [],
      };

      expect(hasPath(graph, "a", "f")).toBe(false);
    });
  });

  describe("given hasPathBST", () => {
    it("should return true if path exists", () => {
      expect(hasPathBST(graph, "a", "c")).toBe(true);
    });
    it("should return false if path does not exist", () => {
      const graph = {
        a: ["b", "c"],
        b: ["d"],
        c: ["e"],
        d: [],
        e: [],
        f: [],
      };

      expect(hasPathBST(graph, "a", "f")).toBe(false);
    });
  });
});

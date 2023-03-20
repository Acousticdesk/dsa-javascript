const { depthFirst, breadthFirst } = require("./graph-adjacency-list");

describe("given graph adjacency list", () => {
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
});

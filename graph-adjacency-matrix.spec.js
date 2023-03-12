const { GraphAdjacencyMatrix } = require("./graph-adjacency-matrix");

describe("given GraphAdjacencyMatrix", () => {
  describe("given toString", () => {
    it("should represent a graph as a string", () => {
      const graph = new GraphAdjacencyMatrix();

      graph.addVertex("A");
      graph.addVertex("B");
      graph.addVertex("C");

      expect(graph.toString()).toBe(`A B C 
0 0 0 
0 0 0 
0 0 0 
`);
    });
  });

  describe("given addEdge", () => {
    it("should add an edge from one vertex to another", () => {
      const graph = new GraphAdjacencyMatrix();

      graph.addVertex("A");
      graph.addVertex("B");

      graph.addEdge("A", "B");

      expect(graph.toString()).toBe(`A B 
0 1 
0 0 
`);
    });
  });
});

//   A B
// A 0 1
// B 1 0

// A directed graph
class GraphAdjacencyMatrix {
  vertexes = {};
  numVertexes = 0;

  adjacencyMatrix = [];

  addVertex(value) {
    this.numVertexes += 1;
    this.vertexes[value] = this.numVertexes - 1;

    this.adjacencyMatrix.push(this.createAdjacencyMatrixEntry());

    for (let i = 0; i < this.numVertexes; i += 1) {
      if (
        typeof this.adjacencyMatrix[i][this.numVertexes - 1] === "undefined"
      ) {
        this.adjacencyMatrix[i][this.numVertexes - 1] = 0;
      }
    }
  }

  addEdge(val1, val2) {
    const val1Index = this.vertexes[val1];
    const val2Index = this.vertexes[val2];

    if (typeof val1Index !== "number" || typeof val2Index !== "number") {
      throw new Error("Some of the values are missing in the graph");
    }

    this.adjacencyMatrix[val1Index][val2Index] = 1;
  }

  // private
  createAdjacencyMatrixEntry() {
    const entry = [];

    for (let i = 0; i < this.numVertexes; i += 1) {
      entry.push(0);
    }

    return entry;
  }

  toString() {
    let result = "";

    for (let key in this.vertexes) {
      result += key;
      result += " ";
    }

    result += "\n";

    for (let i = 0; i < this.numVertexes; i += 1) {
      for (let j = 0; j < this.numVertexes; j += 1) {
        result += this.adjacencyMatrix[i][j];
        result += " ";
      }
      result += "\n";
    }

    return result;
  }
}

module.exports = {
  GraphAdjacencyMatrix,
};

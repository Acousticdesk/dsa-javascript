function depthFirst(graph, source, cb) {
  if (cb) {
    cb(source);
  }
  for (let neighbor of graph[source]) {
    depthFirst(graph, neighbor, cb);
  }
}

function breadthFirst(graph, source, cb) {
  const queue = [source];

  while (queue.length) {
    const next = queue.shift();

    if (cb) {
      cb(next);
    }

    for (let neighbor of graph[next]) {
      queue.push(neighbor);
    }
  }
}

function hasPath(graph, source, dest) {
  if (source === dest) {
    return true;
  }

  for (let neighbor of graph[source]) {
    if (hasPath(graph, neighbor, dest)) {
      return true;
    }
  }

  return false;
}

function hasPathBST(graph, source, dest) {
  const queue = [source];

  while (queue.length) {
    const next = queue.shift();

    if (next === dest) {
      return true;
    }

    for (let neighbor of graph[next]) {
      queue.push(neighbor);
    }
  }

  return false;
}

function constructFromEdges(edges) {
  const graph = {};

  for (let [src, dest] of edges) {
    graph[src] = graph[src] || [];
    graph[dest] = graph[dest] || [];
  }

  for (let [src, dest] of edges) {
    graph[src].push(dest);
  }

  return graph;
}

module.exports = {
  depthFirst,
  breadthFirst,
  hasPath,
  hasPathBST,
  constructFromEdges,
};

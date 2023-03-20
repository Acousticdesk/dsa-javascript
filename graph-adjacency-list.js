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

module.exports = {
  depthFirst,
  breadthFirst,
};

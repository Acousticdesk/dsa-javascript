// Input: n = 5 and edges = [[0, 1], [1, 2], [3, 4]]
//
// 0          3
// |          |
// 1 --- 2    4
//
// Output: 2

function numberOfConnectedComponents(n, edges) {
  const parent = [...Array(n).keys()];
  const rank = new Array(n).fill(1);

  let res = n;

  for (let [v1, v2] of edges) {
    res -= union(v1, v2, parent, rank);
  }

  return res;
}

function find(v, parent) {
  let next = v;

  // the vertex is its own parent
  while (next !== parent[next]) {
    next = parent[next];
  }

  return next;
}

function union(v1, v2, parent, rank) {
  const p1 = find(v1, parent);
  const p2 = find(v2, parent);

  if (p1 === p2) {
    return 0;
  }

  if (rank[p2] > rank[p1]) {
    parent[p1] = p2;
    rank[p2] += 1;
  } else {
    parent[p2] = p1;
    rank[p1] += 1;
  }

  return 1;
}

module.exports = {
  numberOfConnectedComponents,
};

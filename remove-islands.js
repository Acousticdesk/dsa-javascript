// https://leetcode.com/discuss/interview-question/354563/google-phone-screen-delete-islands
const map = [
  [1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1]
];

function removeIslands(pristineMap) {
  const matrix = JSON.parse(JSON.stringify(pristineMap));
  const visited = {};
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      exploreAndRemove(pristineMap, matrix, i, j, visited);
    }
  }
  return matrix;
}

function exploreAndRemove(pristineMap, matrix, i, j, visited) {
  if (pristineMap[i][j] === 0) {
    return;
  }

  if (visited[`${i}, ${j}`]) {
    return;
  }

  visited[`${i}, ${j}`] = true;

  if (
    i === 0 ||
    j === matrix[i].length - 1 ||
    j === 0 ||
    i === matrix.length - 1
  ) {
    return;
  }

  if (
    pristineMap[i - 1][j] === 0 ||
    pristineMap[i - 1][j + 1] === 0 ||
    pristineMap[i][j + 1] === 0 ||
    pristineMap[i + 1][j + 1] === 0 ||
    pristineMap[i + 1][j] === 0 ||
    pristineMap[i + 1][j - 1] === 0 ||
    pristineMap[i][j - 1] === 0 ||
    pristineMap[i - 1][j - 1] === 0
  ) {
    return;
  }

  matrix[i][j] = 0;

  exploreAndRemove(pristineMap, matrix, i - 1, j, visited);
  exploreAndRemove(pristineMap, matrix, i, j + 1, visited);
  exploreAndRemove(pristineMap, matrix, i + 1, j, visited);
  exploreAndRemove(pristineMap, matrix, i, j - 1, visited);
}

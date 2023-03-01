function split(arr) {
  const midpoint = Math.floor(arr.length / 2);
  const left = arr.slice(0, midpoint);
  const right = arr.slice(midpoint);

  return [left, right];
}

function merge(arr1, arr2) {
  let i = 0;
  let j = 0;

  const merged = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i += 1;
    } else {
      merged.push(arr2[j]);
      j += 1;
    }

    while (i < arr1.length) {
      merged.push(arr1[i]);
      i += 1;
    }

    while (j < arr2.length) {
      merged.push(arr2[j]);
      j += 1;
    }
  }

  return merged;
}

// mergeSort([2, 1])
// |||
//  V
// mergeSort([2])
// mergeSort([1])
function mergeSort(arr) {
  if (arr.length === 0 || arr.length === 1) {
    return arr;
  }

  const [left, right] = split(arr);

  const leftSorted = mergeSort(left);
  const rightSorted = mergeSort(right);

  return merge(leftSorted, rightSorted);
}

module.exports = {
  split,
  merge,
  mergeSort,
};

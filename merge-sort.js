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
  }

  while (i < arr1.length) {
    merged.push(arr1[i]);
    i += 1;
  }

  while (j < arr2.length) {
    merged.push(arr2[j]);
    j += 1;
  }

  return merged;
}

// mergeSort([54, 62, 93, 17, 77, 31, 44, 55, 20])
// left [54, 62, 93, 17], right [77, 31, 44, 55, 20]

// mergeSort([54, 62, 93, 17])
// left mergeSort([54, 62]), right mergeSort([93, 17])
// [54, 62], [17, 93]
// [17, 54, 62, 93]

// mergeSort([54, 62])
// left mergeSort([54]) => 54, right mergeSort([62]) => 62
// merge([54], [62])
// result [54, 62]

// mergeSort([54]) => 54
// result [54]

// [77, 31, 44, 55, 20]
// [77, 31] [44, 55, 20]

// [77] [31]
// [31, 77]

// [44] [55, 20]

// [55, 20]
// [55] [20]
// [20, 55]

// [20, 44, 55]

// [31, 77] [20, 44, 55]
// [20, 31, 44, 55, 77]
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const [left, right] = split(arr);

  const leftSorted = mergeSort(left);
  const rightSorted = mergeSort(right);

  return merge(leftSorted, rightSorted);
}

function verifySorted(arr, index) {
  if (arr.length <= 1) {
    return true;
  }
  index = index || 0;
  return arr[0] < arr[1] && verifySorted(arr.slice(index + 1));
}

module.exports = {
  split,
  merge,
  mergeSort,
  verifySorted,
};

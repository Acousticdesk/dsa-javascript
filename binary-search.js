// function binarySearch(sortedArr, value, removedLength = 0) {
//   if (sortedArr.length === 1) {
//     return sortedArr[0] === value ? removedLength : -1;
//   }
//
//   const midpoint = Math.floor(sortedArr.length / 2);
//
//   if (sortedArr[midpoint] === value) {
//     return removedLength + midpoint;
//   }
//
//   let subArray;
//   let totalRemovedLength = removedLength;
//
//   if (value < sortedArr[midpoint]) {
//     subArray = sortedArr.slice(0, midpoint);
//   } else {
//     subArray = sortedArr.slice(midpoint);
//     totalRemovedLength = removedLength + sortedArr.length - subArray.length;
//   }
//
//   return binarySearch(subArray, value, totalRemovedLength);
// }

function binarySearch(sortedArray, value, offset = 0) {
  if (sortedArray.length === 0) {
    return -1;
  }

  if (sortedArray.length === 1) {
    return sortedArray[0] === value ? offset : -1;
  }

  const midpoint = Math.floor(sortedArray.length / 2);

  if (sortedArray[midpoint] === value) {
    return offset + midpoint;
  }

  if (value < sortedArray[midpoint]) {
    return binarySearch(sortedArray.slice(0, midpoint), value);
  }

  if (value > sortedArray[midpoint]) {
    return binarySearch(sortedArray.slice(midpoint), value, offset + midpoint);
  }
}

function binarySearchIterative(sortedArr, value) {
  let first = 0;
  let last = sortedArr.length - 1;

  while (first <= last) {
    const midpoint = Math.floor((first + last) / 2);

    if (sortedArr[midpoint] === value) {
      return midpoint;
    }

    if (value < sortedArr[midpoint]) {
      last = midpoint - 1;
    } else {
      first = midpoint + 1;
    }
  }

  return -1;
}

module.exports = {
  binarySearch,
  binarySearchIterative,
};

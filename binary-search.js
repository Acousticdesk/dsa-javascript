function binarySearch(sortedArr, value, removedLength = 0) {
  if (sortedArr.length === 0) {
    return -1;
  }

  const midpoint = Math.floor(sortedArr.length / 2);

  if (sortedArr[midpoint] === value) {
    return removedLength + midpoint;
  }

  let subArray;
  let totalRemovedLength = removedLength;

  if (value < sortedArr[midpoint]) {
    subArray = sortedArr.slice(0, midpoint);
  } else {
    subArray = sortedArr.slice(midpoint);
    totalRemovedLength = removedLength + sortedArr.length - subArray.length;
  }

  return binarySearch(subArray, value, totalRemovedLength);
}

module.exports = {
  binarySearch,
};

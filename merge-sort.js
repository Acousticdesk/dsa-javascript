function split(arr) {
  const midpoint = Math.floor(arr.length / 2);
  const left = arr.slice(0, midpoint)
  const right = arr.slice(midpoint)
  
  return [left, right];
}

function mergeSort(arr) {
  
}

module.exports = {
  split,
  mergeSort
}

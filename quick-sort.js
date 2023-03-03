function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];

  const lessThenPivot = [];
  const greaterThanPivot = [];

  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] <= pivot) {
      lessThenPivot.push(arr[i]);
      continue;
    }

    greaterThanPivot.push(arr[i]);
  }

  return [...quickSort(lessThenPivot), pivot, ...quickSort(greaterThanPivot)];
}

module.exports = {
  quickSort,
};

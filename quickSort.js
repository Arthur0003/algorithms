const arr = [1, 22, 13, 11, 77, 32, 1231, 123];

const quickSort = (arr = []) => {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[Math.floor(Math.random() * arr.length)];
  const leftArr = arr.filter((num) => num < pivot);
  const rightArr = arr.filter((num) => num > pivot);

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};

console.log(quickSort(arr));

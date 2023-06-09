const arr = [1, 1, 1, 8, 7, 13, 5];

const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(Math.random() * arr.length)];
  const leftArr = arr.filter((num) => num < pivot);
  const rightArr = arr.filter((num) => num > pivot);

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};

console.log(quickSort(arr));

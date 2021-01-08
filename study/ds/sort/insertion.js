function insertionSort(arr) {
  for (let i = 1; i < arr.length; i += 1) {
    const key = arr[i];

    for (let j = i - 1; j >= 0; j -= 1) {
      if (arr[j] < key) {
        arr[j + 1] = key;
        break;
      }
      arr[j + 1] = arr[j];
      if (j === 0) arr[j] = key;
    }
  }
  return arr;
}

const arr = [4, 6, 7, 3, 2, 9, 8, 0, 1, 5];
console.log(insertionSort(arr));
console.log([1, 2, 3, 4, 5]);

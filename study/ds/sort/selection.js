function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i += 1) {
    let index = i;

    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[index] > arr[j]) {
        index = j;
      }
    }
    const temp = arr[index];
    arr[index] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

const arr = [4, 6, 7, 3, 2, 9, 8, 0, 1, 5];
console.log(selectionSort(arr));

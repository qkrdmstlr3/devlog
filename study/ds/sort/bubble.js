function bubbleSort(array) {
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array.length - i - 1; j += 1) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

const arr = [4, 6, 7, 3, 2, 9, 8, 0, 1, 5];
console.log(bubbleSort(arr));

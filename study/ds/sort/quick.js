function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left >= right) {
    return;
  }

  const mid = Math.floor((left + right) / 2);
  const pivot = arr[mid];
  const partition = divide(arr, left, right, pivot);

  quickSort(arr, left, partition - 1);
  quickSort(arr, partition, right);
  return arr;
}

function divide(arr, left, right, pivot) {
  while (left <= right) {
    while (arr[left] < pivot) {
      left++;
    }
    while (arr[right] > pivot) {
      right--;
    }
    if (left <= right) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }
  return left;
}

const arr = [4, 6, 7, 3, 2, 9, 8, 0, 1, 5];
console.log(quickSort(arr));

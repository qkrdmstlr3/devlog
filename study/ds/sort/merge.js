function merge(left, right) {
  const sorted = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      sorted.push(left[leftIndex]);
      leftIndex += 1;
    } else {
      sorted.push(right[rightIndex]);
      rightIndex += 1;
    }
  }
  return [...sorted, ...left.slice(leftIndex), ...right.slice(rightIndex)];
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const middle = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));

  return merge(left, right);
}

const arr = [4, 6, 7, 3, 2, 9, 8, 0, 1, 5];
console.log(mergeSort(arr));

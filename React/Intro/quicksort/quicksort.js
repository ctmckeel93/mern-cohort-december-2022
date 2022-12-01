// Pick a pivot

// Swap values in the array
const swap = (array, index1, index2) => {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
};

// Generate random array
const randomArrayGenerator = (size, limit) => {
  let resultArray = [];

  for (let i = 0; i <= size; i++) {
    resultArray.push(Math.floor(Math.random() * limit));
  }
  return resultArray;
};

// Partition the array

const partition = (array, start, end, pivot) => {
  let i = start;
  let j = end - 1;

  while (i < j) {
    while (array[i] < pivot && i < j) {
      i++;
    }
    while (array[j] > pivot && i < j) {
      j--;
    }
    swap(array, i, j);
  }

  if (array[i] > array[end]) {
    swap(array, i, end);
  } else {
    i = end;
  }
  return i;
};

// Recursively run quicksort until all values are in order.

const quicksort = (array, start = 0, end = array.length - 1) => {
  console.log("Before", array);
  if (start >= end) return;

  let pivotIndex = Math.floor(Math.random() * (end - start) + start);
  let pivot = array[pivotIndex];
  swap(array, pivotIndex, end);

  let leftPointer = partition(array, start, end, pivot);

  quicksort(array, start, leftPointer - 1);
  quicksort(array, leftPointer + 1, end);

  return array;
};

const testArray = randomArrayGenerator(10, 100);

console.log("After", quicksort(testArray));

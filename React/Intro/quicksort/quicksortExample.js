const randomArrayGenerator = (size, limit) => {
  let resultArray = [];

  for (let i = 0; i <= size; i++) {
    resultArray.push(Math.floor(Math.random() * limit));
  }
  return resultArray;
};

const swap = (array, index1, index2) => {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
};

const testArray = randomArrayGenerator(10, 100);

const partition = (array, low, high, pivot) => {
  let i = low;
  let j = high - 1;

  console.log(array);
  console.log("Pivot:", pivot);

  while (i < j) {
    while (array[i] < pivot && i < j) {
      i++;
    }
    while (array[j] > pivot && i < j) {
      j--;
    }

    swap(array, i, j);
  }

  if (array[i] > array[high]) {
    swap(array, i, high);
  } else {
    i = high;
  }

  return i;
};

const quickSort = (unsortedArray, low = 0, high = unsortedArray.length - 1) => {
  if (low >= high) return;
  let pivotIndex = Math.floor(Math.random() * (high - low)) + low;
  let pivot = unsortedArray[pivotIndex];
  swap(unsortedArray, pivotIndex, high);

  let leftPointer = partition(unsortedArray, low, high, pivot);
  quickSort(unsortedArray, low, leftPointer - 1);
  quickSort(unsortedArray, leftPointer + 1, high);

  return unsortedArray;
};

console.log(quickSort(testArray));

// console.log(partitionSort(testArray));

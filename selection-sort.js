const numbers = [7, 4, 8, 2, 0, 3, 1, 5];

selectionSort(numbers);

function selectionSort(array) {

  // Move from left to right through the array
  for (let currentIndex = 0; currentIndex < array.length; currentIndex++) {

    // Starting from the current position, find the index of the lowest value in the remainder of the array
    const indexOfSmallest = getIndexOfLowestValue(array, currentIndex);

    // Swap the lowest value into the current position
    swap(array, currentIndex, indexOfSmallest);

    console.log(array);
  }
  // Once we've moved through the array from left to right swapping the smallest value into the current position
  // the array is sorted.
}

function getIndexOfLowestValue(array, startingPoint) {
  let lowestValue = Infinity;
  let lowestIndex;

  for (let i = startingPoint; i < array.length; i++) {
    if (array[i] < lowestValue) {
      lowestValue = array[i];
      lowestIndex = i;
    }
  }

  return lowestIndex;
}

function swap(array, firstPosition, secondPosition) {
  let temp = array[firstPosition];
  array[firstPosition] = array[secondPosition];
  array[secondPosition] = temp;
}

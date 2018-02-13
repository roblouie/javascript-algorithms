const numbers = [7, 4, 8, 2, 0, 3, 1, 5];

insertionSort(numbers);

function insertionSort(array) {

  for(let i = 1; i < array.length; i++) {
    const itemToSort = array[i];

    for(var j = i - 1; j >= 0 && array[j] > itemToSort; j--) {
      array[j+1] = array[j];
    }

    array[j+1] = itemToSort;
    console.log(array);
  }

  return array;
}

function swap(array, firstPosition, secondPosition) {
  let temp = array[firstPosition];
  array[firstPosition] = array[secondPosition];
  array[secondPosition] = temp;
}

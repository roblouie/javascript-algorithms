const numbers = [7, 4, 8, 2, 0, 3, 1, 5];

bubbleSort(numbers);

function bubbleSort(array) {
  // Keep track of where to bubble up to, starting at zero and increasing after each value is bubbled up
  for (let bubbleTo = 0; bubbleTo < array.length; bubbleTo++) {

    // Starting at the end of the array and going to wherever we should bubble to
    for (let i = array.length - 1; i >= bubbleTo; i--) {
      const rightSide = array[i];
      const leftSide = array[i - 1];

      // Swap the left and right sides
      if (leftSide > rightSide) {
        swap(array, i, i - 1);
      }
    }
    console.log(array);
  }
  // By swapping the right side with the left whenever the left is lower for each position of the array, the smallest
  // value will "bubble up", resulting in a sorted array.
}

function swap(array, firstPosition, secondPosition) {
  let temp = array[firstPosition];
  array[firstPosition] = array[secondPosition];
  array[secondPosition] = temp;
}

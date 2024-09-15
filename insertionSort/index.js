function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp_value = arr[i];
    let j = i - 1;

    // Shift elements of arr[0..i-1], that are greater than temp_value, to one position ahead of their current position
    while (j >= 0 && arr[j] > temp_value) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp_value;
  }
  return arr;  // Return the sorted array
}

console.log(insertionSort([4, 2, 7, 1, 3]));  // Output: [1, 2, 3, 4, 7]

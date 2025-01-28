function selectionSort(arr) {
  for (let i = 0; i <= arr.length-2; i++) {
    let minIndex = i; // Assume the current index is the minimum
    for (let j = i + 1; j <= arr.length-1; j++) { // Start from the unsorted portion
      if (arr[j] < arr[minIndex]) { // Find the smallest element
        minIndex = j;
      }
    }

    // Swap only if a smaller element is found
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}

// Example Usage
console.log(selectionSort([64, 34, 25, 12, 22, 11, 90]));

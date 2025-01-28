function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    // Partition the array and get the pivot index
    const pivotIndex = partition(arr, start, end);

    // Recursively sort the left and right partitions
    quickSort(arr, start, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, end);
  }
  return arr;
}

function partition(arr, start, end) {
  const pivot = arr[end]; // Choose the last element as the pivot
  let i = start - 1; // Index of smaller element

  for (let j = start; j < end; j++) {
    if (arr[j] < pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
      i++;
    }
  }

  // Place the pivot in the correct position
  [arr[i + 1], arr[end]] = [arr[end], arr[i + 1]];
  return i + 1; // Return the pivot index
}

// Example usage:
console.log(quickSort([9, 35, 21, 14, 19, 30, 28])); // 

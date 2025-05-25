function selectionSortRecursive(arr, start = 0) {
  // Base Case
  if (start >= arr.length - 1) return arr;

  // Step 1: Find the index of the minimum element in the unsorted portion
  let minIndex = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (arr[i] < arr[minIndex]) {
      minIndex = i;
    }
  }

  // Step 2: Swap the minimum element with the first unsorted element
  [arr[start], arr[minIndex]] = [arr[minIndex], arr[start]];

  // Step 3: Recursion for the remaining unsorted portion
  return selectionSortRecursive(arr, start + 1);
}

const arr = [64, 34, 25, 12, 22, 11, 90];
console.log(selectionSortRecursive(arr)); 

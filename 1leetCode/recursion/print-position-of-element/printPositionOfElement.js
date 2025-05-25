function printPositionOfElement(arr, item, index = 0) {
  // Base case: Stop recursion when the array is empty
  if (arr.length === 0) return;

  // Check if the current element matches the item
  if (arr[0] === item) {
    console.log(index); // Print the current index
  }

  // Recursive call with the rest of the array and incremented index
  printPositionOfElement(arr.slice(1), item, index + 1);
}

// Example Usage
printPositionOfElement([1, 3, 4, 5, 2, 1, 1, 5], 1);

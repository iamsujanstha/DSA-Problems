function printNumber(num) {
  //Base Case
  if (num === 0) return;

  //Recursive Case
  printNumber(num - 1); // this will print 1 2 3 .... n-1 term;

  // printNumber(num) = printNumber(num - 1) + num

  console.log(num) // print here nth term;
}

printNumber(10)
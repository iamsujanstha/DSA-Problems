const intervals = [
  [1, 5],
  [3, 7],
  [4, 6]
];
/* [
  [1, 4],
  [5, 8]
]
 */
function mergeIntervals(intervals) {
  let result = [];
  let start = intervals[0][0] //1
  let end = intervals[0][1]; //5

  for (let i = 1; i < intervals.length; i++) { //skip first sub-array
    const [currentStart, currentEnd] = intervals[i];

    // Check if current interval overlaps with previous
    if (currentStart <= end) {
      end = Math.max(end, currentEnd) //If overlapping, merge by updating the end time
    }
    else {
      result.push([start, end]);  //push current merged interval to results
      end = currentEnd;
      start = currentStart;
    }
  }
  result.push([start, end]);
  return result;
}

console.log(mergeIntervals(intervals))
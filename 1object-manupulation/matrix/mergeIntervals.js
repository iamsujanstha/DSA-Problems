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
  let start = intervals[0][0]
  let end = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    const [currentStart, currentEnd] = intervals[i];

    if (currentStart <= end) {
      end = Math.max(end, currentEnd)
    }
    else {
      result.push([start, end]);
      end = currentEnd;
      start = currentStart;
    }
  }
  result.push([start, end]);
  return result;
}

console.log(mergeIntervals(intervals))
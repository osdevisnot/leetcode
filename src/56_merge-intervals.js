// https://leetcode.com/problems/merge-intervals/
let start = 0,
  end = 1;

let merge = function (intervals) {
  if (!intervals.length) return intervals;
  intervals = intervals.sort((a, b) => a[start] - b[start]);
  let previous = intervals[0],
    answer = [previous];
  for (let current of intervals) {
    if (current[start] <= previous[end]) {
      previous[end] = Math.max(previous[end], current[end]);
    } else {
      answer.push(current);
      previous = current;
    }
  }
  return answer;
};

// https://leetcode.com/problems/interval-list-intersections/
var intervalIntersection = function (A, B) {
  let start = 0;
  let end = 1;

  let i = 0;
  let j = 0;

  let x = A.length;
  let y = B.length;

  let result = [];

  while (i < x && j < y) {
    let first = A[i];
    let second = B[j];
    let min = Math.max(first[start], second[start]);
    let max = Math.min(first[end], second[end]);
    if (min <= max) {
      result.push([min, max]);
    }
    first[end] < second[end] ? i++ : j++;
  }
  return result;
};

console.log(
  intervalIntersection(
    [
      [0, 2],
      [5, 10],
      [13, 23],
      [24, 25],
    ],
    [
      [1, 5],
      [8, 12],
      [15, 24],
      [25, 26],
    ],
  ),
);

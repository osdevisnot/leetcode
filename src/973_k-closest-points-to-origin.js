// https://leetcode.com/problems/k-closest-points-to-origin/

let kClosest = (points, K) => {
  let euclidean = (a, b) => a[0] * a[0] + a[1] * a[1] - (b[0] * b[0] + b[1] * b[1]);
  return points.sort(euclidean).slice(0, K);
};

// prettier-ignore
console.log( kClosest( [ [1, 3], [-2, 2], ], 1 ) );

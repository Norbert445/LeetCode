import { number } from "prop-types";

function diagonalSum(mat: number[][]): number {
  let i: number;
  let j: number = 0;
  let k: number = mat[0].length - 1;
  let sum: number = 0;
  let arr: number[] = [];
  for (i = 0; i < mat.length; i++, j++, k--) {
    arr.push(mat[i][j]);
    if (i === j && i == k) {
      if (mat[i][j] === mat[i][k]) {
        continue;
      }
    }
    arr.push(mat[i][k]);
  }
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(
  diagonalSum([
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ])
);

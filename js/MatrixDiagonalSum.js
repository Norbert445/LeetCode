"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function diagonalSum(mat) {
    let i;
    let j = 0;
    let k = mat[0].length - 1;
    let sum = 0;
    let arr = [];
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
console.log(diagonalSum([
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
]));

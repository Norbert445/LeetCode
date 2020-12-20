"use strict";
function flipAndInvertImage(A) {
    let i;
    let j;
    for (i = 0; i < A.length; i++) {
        A[i] = A[i].reverse();
        for (j = 0; j < A[i].length; j++) {
            if (A[i][j] === 1) {
                A[i][j] = 0;
            }
            else {
                A[i][j] = 1;
            }
        }
    }
    return A;
}
console.log(flipAndInvertImage([
    [1, 1, 0],
    [1, 0, 1],
    [0, 0, 0],
]));

"use strict";
function sortArrayByParity(A) {
    let i;
    let result = [];
    for (i = 0; i < A.length; i++) {
        if (A[i] % 2 === 0) {
            result.push(A[i]);
        }
    }
    for (i = 0; i < A.length; i++) {
        if (A[i] % 2 !== 0) {
            result.push(A[i]);
        }
    }
    return result;
}

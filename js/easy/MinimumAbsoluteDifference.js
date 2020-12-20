"use strict";
function minimumAbsDifference(arr) {
    let i;
    let p = 0;
    let min = Number.MAX_SAFE_INTEGER;
    let result = [];
    arr = arr.sort((a, b) => a - b);
    for (i = 1; i < arr.length; i++) {
        if (min > Math.abs(arr[i] - arr[i - 1])) {
            min = Math.abs(arr[i] - arr[i - 1]);
        }
    }
    for (i = 1; i < arr.length; i++) {
        if (Math.abs(arr[i] - arr[i - 1]) === min) {
            result[p] = [arr[i - 1], arr[i]];
            p++;
        }
    }
    return result;
}
console.log(minimumAbsDifference([3, 8, -10, 23, 19, -4, -14, 27]));

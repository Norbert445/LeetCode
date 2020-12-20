"use strict";
function sumOddLengthSubarrays(arr) {
    let i;
    let j;
    let k;
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        for (j = i; j < arr.length; j += 2) {
            for (k = i; k <= j; k++) {
                sum += arr[k];
            }
        }
    }
    return sum;
}

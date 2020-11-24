"use strict";
function xorOperation(n, start) {
    let i;
    let result = 0;
    let j = start;
    for (i = 0; i < n; i++) {
        result ^= j;
        j += 2;
    }
    return result;
}
console.log(xorOperation(5, 0));

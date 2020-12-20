"use strict";
function countOdds(low, high) {
    let count = 0;
    for (; low <= high; low++) {
        if (low % 2 != 0) {
            count++;
        }
    }
    return count;
}

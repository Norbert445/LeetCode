"use strict";
function maximumWealth(accounts) {
    let i;
    let j;
    let sum = 0;
    let max = Number.MIN_VALUE;
    for (i = 0; i < accounts.length; i++) {
        for (j = 0; j < accounts[i].length; j++) {
            sum += accounts[i][j];
        }
        if (sum > max) {
            max = sum;
        }
        sum = 0;
    }
    return max;
}

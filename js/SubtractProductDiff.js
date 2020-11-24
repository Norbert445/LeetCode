"use strict";
function subtractProductAndSum(n) {
    let sum = 0;
    let product = 1;
    let i;
    let str = n.toString();
    let digits = [];
    for (i = 0; i < str.length; i++) {
        digits[i] = parseInt(str.charAt(i));
    }
    for (i = 0; i < digits.length; i++) {
        sum += digits[i];
        product *= digits[i];
    }
    return sum > product ? sum - product : product - sum;
}
console.log(subtractProductAndSum(234));

"use strict";
function generateTheString(n) {
    let i;
    let str = "";
    if (n % 2 != 0) {
        for (i = 0; i < n; i++) {
            str += "c";
        }
    }
    else {
        for (i = 0; i < n - 1; i++) {
            str += "c";
        }
        str += "a";
    }
    return str;
}
console.log(generateTheString(4));

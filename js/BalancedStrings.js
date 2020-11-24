"use strict";
function balancedStringSplit(s) {
    let r = 0;
    let l = 0;
    let i;
    let count = 0;
    for (i = 0; i < s.length; i++) {
        if (s.charAt(i) === "L") {
            l++;
        }
        if (s.charAt(i) === "R") {
            r++;
        }
        if (l === r) {
            l = 0;
            r = 0;
            count++;
        }
    }
    return count;
}
console.log(balancedStringSplit("RLRRLLRLRL"));

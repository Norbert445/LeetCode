"use strict";
function maxDepths(s) {
    let i;
    let stack = [];
    let max = 0;
    if (s === "" || s.length === 1)
        return 0;
    for (i = 0; i < s.length; i++) {
        if (s.charAt(i) === "(") {
            stack.push(s.charAt(i));
            if (max < stack.length) {
                max = stack.length;
            }
        }
        if (s.charAt(i) === ")") {
            stack.pop();
        }
    }
    return max;
}

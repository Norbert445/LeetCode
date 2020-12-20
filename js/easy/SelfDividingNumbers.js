"use strict";
function selfDividingNumbers(left, right) {
    let i;
    let j;
    let result = [];
    let str;
    let self = false;
    for (i = left; i <= right; i++) {
        str = i.toString();
        for (j = 0; j < str.length; j++) {
            if (i % parseInt(str.charAt(j)) == 0) {
                self = true;
            }
            else {
                self = false;
                break;
            }
        }
        if (self) {
            result.push(i);
        }
    }
    return result;
}
console.log(selfDividingNumbers(1, 22));

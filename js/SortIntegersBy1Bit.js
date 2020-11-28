"use strict";
function sortByBits(arr) {
    const sortByBits = (arr) => {
        return arr.sort((a, b) => numBit(a) - numBit(b) || a - b);
    };
    const numBit = (num) => {
        let i;
        let str = num.toString(2);
        let result = 0;
        for (i = 0; i < str.length; i++) {
            if (str.charAt(i) == "1") {
                result++;
            }
        }
        return result;
    };
    return sortByBits(arr);
}

"use strict";
function maximum69Number(num) {
    let str = num.toString();
    let i;
    for (i = 0; i < str.length; i++) {
        if (str.charAt(i) != "9") {
            str = str.substr(0, i) + "9" + str.substr(i + 1, str.length);
            return parseInt(str);
        }
    }
    return num;
}
console.log(maximum69Number(9669));

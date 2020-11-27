"use strict";
function replaceElements(arr) {
    let pocet = arr.length;
    let max = arr[pocet - 1];
    arr[pocet - 1] = -1;
    let i;
    let temp;
    for (i = pocet - 2; i >= 0; i--) {
        temp = arr[i];
        arr[i] = max;
        if (max < temp) {
            max = temp;
        }
    }
    return arr;
}
console.log(replaceElements([17, 18, 5, 4, 6, 1]));

"use strict";
function restoreString(s, indices) {
    let tmp;
    let tmp1;
    let arr = s.split("");
    for (let i = 0; i < indices.length; i++) {
        for (let j = i + 1; j < indices.length; j++) {
            if (indices[i] > indices[j]) {
                tmp = indices[i];
                indices[i] = indices[j];
                indices[j] = tmp;
                tmp1 = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp1;
            }
        }
    }
    s = arr.join();
    return s;
}
console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));

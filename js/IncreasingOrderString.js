"use strict";
function sortString(s) {
    let result = "";
    let frequency = [];
    let count = 0;
    frequency = Array.from(Array(26), () => 0);
    let i;
    for (i = 0; i < s.length; i++) {
        frequency[s.charCodeAt(i) - "a".charCodeAt(0)]++;
        count++;
    }
    for (i = 0; i < frequency.length; i++) {
        console.log(frequency[i]);
    }
    while (count > 0) {
        for (i = 0; i < frequency.length; i++) {
            if (frequency[i] != 0) {
                frequency[i]--;
                count--;
                result += String.fromCharCode(i + "a".charCodeAt(0));
            }
        }
        for (i = frequency.length - 1; i >= 0; i--) {
            if (frequency[i] != 0) {
                frequency[i]--;
                count--;
                result += String.fromCharCode(i + "a".charCodeAt(0));
            }
        }
    }
    return result;
}
console.log(sortString("rat"));

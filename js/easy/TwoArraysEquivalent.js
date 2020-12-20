"use strict";
function arrayStringsAreEqual(word1, word2) {
    let str1;
    let str2;
    str1 = word1.join("");
    str2 = word2.join("");
    if (str1 === str2) {
        return true;
    }
    return false;
}

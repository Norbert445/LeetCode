"use strict";
function numJewelsInStones(J, S) {
    let i;
    let j;
    let count = 0;
    for (i = 0; i < J.length; i++) {
        for (j = 0; j < S.length; j++) {
            if (J.charAt(i) === S.charAt(j)) {
                count++;
            }
        }
    }
    return count;
}
console.log(numJewelsInStones("aA", "aAAbbbb"));

"use strict";
function commonChars(A) {
    let result = [];
    let i;
    let j;
    let char;
    for (i = 0; i < A.length; i++) {
        char = A[0].charAt(i);
        for (j = 0; j < A[i].length; j++) {
            if (char === A[i + 1].charAt(j))
                ;
        }
    }
}

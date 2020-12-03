"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function luckyNumbers(matrix) {
    let i;
    let j;
    let k = 0;
    let index = 2;
    let luckyNumbers = [];
    let isLucky = false;
    if (matrix.length === 1) {
        luckyNumbers.push(Math.min(...matrix[0]));
        return luckyNumbers;
    }
    for (i = 0; i < matrix.length; i++) {
        index = matrix[i].indexOf(Math.min(...matrix[i]));
        console.log(index);
        for (j = 0; j < matrix.length; j++) {
            if (matrix[i][index] === matrix[j][index])
                continue;
            if (matrix[i][index] > matrix[j][index]) {
                isLucky = true;
            }
            else {
                isLucky = false;
                break;
            }
        }
        if (isLucky === true) {
            luckyNumbers.push(matrix[i][index]);
        }
    }
    return luckyNumbers;
}
console.log(luckyNumbers([[76618, 42558, 65788, 20503, 29400, 54116]]));

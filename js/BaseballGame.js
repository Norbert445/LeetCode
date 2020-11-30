"use strict";
function calPoints(ops) {
    let i;
    let result = [];
    let sum = 0;
    let j = 0;
    for (i = 0; i < ops.length; i++) {
        if (ops[i] == "+") {
            result.push(result[j - 1] + result[j - 2]);
            j++;
        }
        else if (ops[i] == "D") {
            result.push(result[j - 1] * 2);
        }
        else if (ops[i] == "C") {
            result.splice(j - 1, 1);
            j--;
        }
        else {
            result.push(parseInt(ops[i]));
            j++;
        }
    }
    console.log(result);
    result.forEach((result) => {
        sum += result;
    });
    return sum;
}
console.log(calPoints(["5", "2", "C", "D", "+"]));

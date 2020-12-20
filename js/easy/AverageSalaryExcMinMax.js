"use strict";
function average(salary) {
    let sum = 0;
    salary.splice(salary.indexOf(Math.min(...salary)), 1);
    salary.splice(salary.indexOf(Math.max(...salary)), 1);
    salary.forEach((salary) => {
        sum += salary;
    });
    return sum / salary.length;
}
console.log(average([4000, 3000, 1000, 2000]));

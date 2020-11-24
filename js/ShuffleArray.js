"use strict";
var shuffle = function (nums, n) {
    var sorted = [];
    var i;
    for (i = 0; i < nums.length; i++) {
        sorted.push(nums[i], nums[i + n]);
        if (sorted.length === nums.length) {
            break;
        }
    }
    return sorted;
};
console.log(shuffle([2, 5, 1, 3, 4, 7], 3));

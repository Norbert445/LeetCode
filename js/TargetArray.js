"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createTargetArray(nums, index) {
    let i;
    let arr = [];
    for (i = 0; i < nums.length; i++) {
        arr.splice(index[i], 0, nums[i]);
    }
    return arr;
}
console.log(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]));

"use strict";
function arrayPairSum(nums) {
    nums.sort((a, b) => a - b);
    let i;
    let sum = 0;
    for (i = 0; i < nums.length; i += 2) {
        sum += nums[i];
    }
    return sum;
}

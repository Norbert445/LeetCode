"use strict";
function maxSubArray(nums) {
    let i;
    let local_max = 0;
    let global_max = Number.NEGATIVE_INFINITY;
    for (i = 0; i < nums.length; i++) {
        local_max = Math.max(nums[i], local_max + nums[i]);
        if (local_max > global_max) {
            global_max = local_max;
        }
    }
    return global_max;
}
console.log(maxSubArray([-1]));

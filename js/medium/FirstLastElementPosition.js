"use strict";
function searchRange(nums, target) {
    let i;
    let start = -1;
    let end = 1;
    if (!nums.includes(target))
        return [-1, -1];
    for (i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            if (start === -1) {
                start = i;
            }
            end = i;
        }
    }
    return [start, end];
}

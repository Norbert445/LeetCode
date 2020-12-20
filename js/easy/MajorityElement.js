"use strict";
function majorityElement(nums) {
    let occurances = {};
    let i;
    let min = nums.length / 2;
    for (i = 0; i < nums.length; i++) {
        if (occurances[nums[i]] == undefined) {
            occurances[nums[i]] = 1;
        }
        else {
            occurances[nums[i]]++;
        }
        if (occurances[nums[i]] > min) {
            return nums[i];
        }
    }
    return 0;
}

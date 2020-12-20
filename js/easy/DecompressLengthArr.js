"use strict";
function decompressRLElist(nums) {
    let i = 0;
    let j = 0;
    let result = [];
    let freq;
    for (i = 0; i < nums.length; i += 2) {
        freq = nums[i];
        for (j = 0; j < freq; j++) {
            result.push(nums[i + 1]);
        }
    }
    return result;
}
console.log(decompressRLElist([1, 2, 3, 4]));

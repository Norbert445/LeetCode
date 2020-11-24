import { number } from "prop-types";

function createTargetArray(nums: number[], index: number[]): number[] {
  let i: number;
  let arr: number[] = [];
  for (i = 0; i < nums.length; i++) {
    arr.splice(index[i], 0, nums[i]);
  }
  return arr;
}

console.log(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]));

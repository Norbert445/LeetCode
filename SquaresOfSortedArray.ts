function sortedSquares(nums: number[]): number[] {
  let i: number;
  for (i = 0; i < nums.length; i++) {
    nums[i] = nums[i] * nums[i];
  }
  nums = nums.sort((a, b) => a - b);
  return nums;
}

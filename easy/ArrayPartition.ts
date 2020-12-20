function arrayPairSum(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let i: number;
  let sum: number = 0;
  for (i = 0; i < nums.length; i += 2) {
    sum += nums[i];
  }
  return sum;
}

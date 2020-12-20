function maxSubArray(nums: number[]): number {
  let i: number;
  let local_max: number = 0;
  let global_max: number = Number.NEGATIVE_INFINITY;

  for (i = 0; i < nums.length; i++) {
    local_max = Math.max(nums[i], local_max + nums[i]);
    if (local_max > global_max) {
      global_max = local_max;
    }
  }
  return global_max;
}
console.log(maxSubArray([-1]));

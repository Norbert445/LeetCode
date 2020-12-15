function maxSubArray(nums: number[]): number {
  let i: number;
  let j: number;
  let length: number = nums.length;
  let sum: number = 0;
  let max = Number.MIN_VALUE;

  for (i = 0; i < length; i++) {
    while (length - 1 != i) {
      for (j = i; j < length; j++) {
        sum += nums[j];
      }
      if (sum > max) {
        max = sum;
      }
      sum = 0;
      length--;
    }
  }
  return max;
}

function numIdenticalPairs(nums: number[]): number {
  let count: number = 0;
  let i: number;
  let j: number;
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count++;
      }
    }
  }
  return count;
}

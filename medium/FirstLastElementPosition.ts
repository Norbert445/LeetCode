function searchRange(nums: number[], target: number): number[] {
  let i: number;
  let start: number = -1;
  let end: number = 1;
  if (!nums.includes(target)) return [-1, -1];
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

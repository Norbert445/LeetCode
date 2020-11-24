function decompressRLElist(nums: number[]): number[] {
  let i: number = 0;
  let j: number = 0;
  let result: number[] = [];
  let freq: number;

  for (i = 0; i < nums.length; i += 2) {
    freq = nums[i];
    for (j = 0; j < freq; j++) {
      result.push(nums[i + 1]);
    }
  }

  return result;
}

console.log(decompressRLElist([1, 2, 3, 4]));

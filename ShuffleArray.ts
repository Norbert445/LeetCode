var shuffle = function (nums: number[], n: number): number[] {
  var sorted: number[] = [];
  var i: number;
  for (i = 0; i < nums.length; i++) {
    sorted.push(nums[i], nums[i + n]);
    if (sorted.length === nums.length) {
      break;
    }
  }
  return sorted;
};
console.log(shuffle([2, 5, 1, 3, 4, 7], 3));

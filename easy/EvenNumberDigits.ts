function findNumbers(nums: number[]): number {
  let digits: number;
  let count: number = 0;
  nums.forEach((num) => {
    digits = num.toString().length;
    if (digits % 2 == 0) {
      count++;
    }
  });
  return count;
}
console.log(findNumbers([12, 345, 2, 6, 7896]));

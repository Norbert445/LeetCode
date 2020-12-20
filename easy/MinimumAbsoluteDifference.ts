function minimumAbsDifference(arr: number[]): number[][] {
  let i: number;
  let p: number = 0;
  let min: number = Number.MAX_SAFE_INTEGER;
  let result: number[][] = [];

  arr = arr.sort((a, b) => a - b);

  for (i = 1; i < arr.length; i++) {
    if (min > Math.abs(arr[i] - arr[i - 1])) {
      min = Math.abs(arr[i] - arr[i - 1]);
    }
  }

  for (i = 1; i < arr.length; i++) {
    if (Math.abs(arr[i] - arr[i - 1]) === min) {
      result[p] = [arr[i - 1], arr[i]];
      p++;
    }
  }
  return result;
}

console.log(minimumAbsDifference([3, 8, -10, 23, 19, -4, -14, 27]));

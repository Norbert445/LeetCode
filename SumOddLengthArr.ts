function sumOddLengthSubarrays(arr: number[]): number {
  let i: number;
  let j: number;
  let k: number;
  let sum: number = 0;
  for (i = 0; i < arr.length; i++) {
    for (j = i; j < arr.length; j += 2) {
      for (k = i; k <= j; k++) {
        sum += arr[k];
      }
    }
  }
  return sum;
}

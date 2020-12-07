function canMakeArithmeticProgression(arr: number[]): boolean {
  let i: number;
  arr = arr.sort((a, b) => a - b);
  let diff: number = arr[0] - arr[1];
  if (arr.length === 1) {
    return false;
  }
  for (i = 1; i < arr.length - 1; i++) {
    if (diff !== arr[i] - arr[i + 1]) {
      return false;
    }
  }
  return true;
}

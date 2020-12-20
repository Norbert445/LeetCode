function repeatedNTimes(A: number[]): number {
  var arr: number[] = [];
  let i: number;
  for (i = 0; i < A.length; i++) {
    arr[A[i]] = 0;
  }
  for (i = 0; i < A.length; i++) {
    arr[A[i]]++;
    if (arr[A[i]] > 1) {
      return A[i];
    }
  }
  return 6;
}
console.log(console.log(repeatedNTimes([1, 2, 3, 3])));

function sortArrayByParity(A: number[]): number[] {
  let i: number;
  let result: number[] = [];
  for (i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      result.push(A[i]);
    }
  }
  for (i = 0; i < A.length; i++) {
    if (A[i] % 2 !== 0) {
      result.push(A[i]);
    }
  }
  return result;
}

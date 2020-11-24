function xorOperation(n: number, start: number): number {
  let i: number;
  let result: number = 0;
  let j: number = start;
  for (i = 0; i < n; i++) {
    result ^= j;
    j += 2;
  }
  return result;
}
console.log(xorOperation(5, 0));

function maximumWealth(accounts: number[][]): number {
  let i: number;
  let j: number;
  let sum: number = 0;
  let max: number = Number.MIN_VALUE;

  for (i = 0; i < accounts.length; i++) {
    for (j = 0; j < accounts[i].length; j++) {
      sum += accounts[i][j];
    }
    if (sum > max) {
      max = sum;
    }
    sum = 0;
  }
  return max;
}

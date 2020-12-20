function countOdds(low: number, high: number): number {
  let count: number = 0;
  for (; low <= high; low++) {
    if (low % 2 != 0) {
      count++;
    }
  }
  return count;
}

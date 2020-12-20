function oddCells(n: number, m: number, indices: number[][]): number {
  let i: number;
  let j: number;
  let k: number;
  let matrix: number[][] = [];
  let result: number = 0;

  for (i = 0; i < n; i++) {
    matrix[i] = [];
    for (j = 0; j < m; j++) {
      matrix[i][j] = 0;
    }
  }

  for (i = 0; i < indices.length; i++) {
    for (j = 0; j < indices[i].length; j++) {
      if (j == 0) {
        for (k = 0; k < m; k++) {
          matrix[indices[i][j]][k]++;
        }
      } else {
        for (k = 0; k < n; k++) {
          matrix[k][indices[i][j]]++;
        }
      }
    }
  }
  for (i = 0; i < n; i++) {
    for (j = 0; j < m; j++) {
      if (matrix[i][j] % 2 != 0) {
        result++;
      }
    }
  }

  return result;
}
console.log(
  oddCells(2, 2, [
    [1, 1],
    [0, 0],
  ])
);

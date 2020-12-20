import { number } from "prop-types";

function luckyNumbers(matrix: number[][]): number[] {
  let i: number;
  let j: number;
  let k: number = 0;
  let index: number = 2;
  let luckyNumbers: number[] = [];
  let isLucky: boolean = false;

  if (matrix.length === 1) {
    luckyNumbers.push(Math.min(...matrix[0]));
    return luckyNumbers;
  }

  for (i = 0; i < matrix.length; i++) {
    index = matrix[i].indexOf(Math.min(...matrix[i]));
    console.log(index);
    for (j = 0; j < matrix.length; j++) {
      if (matrix[i][index] === matrix[j][index]) continue;
      if (matrix[i][index] > matrix[j][index]) {
        isLucky = true;
      } else {
        isLucky = false;
        break;
      }
    }
    if (isLucky === true) {
      luckyNumbers.push(matrix[i][index]);
    }
  }
  return luckyNumbers;
}
console.log(luckyNumbers([[76618, 42558, 65788, 20503, 29400, 54116]]));

function calPoints(ops: string[]): number {
  let i: number;
  let result: number[] = [];
  let sum: number = 0;
  let j: number = 0;
  for (i = 0; i < ops.length; i++) {
    if (ops[i] == "+") {
      result.push(result[result.length - 1] + result[result.length - 2]);
    } else if (ops[i] == "D") {
      result.push(result[result.length - 1] * 2);
    } else if (ops[i] == "C") {
      result.splice(result.length - 1, 1);
    } else {
      result.push(parseInt(ops[i]));
    }
  }
  console.log(result);
  result.forEach((result) => {
    sum += result;
  });
  return sum;
}
console.log(calPoints(["5", "2", "C", "D", "+"]));

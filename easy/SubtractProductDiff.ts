function subtractProductAndSum(n: number): number {
  let sum: number = 0;
  let product: number = 1;
  let i: number;
  let str: string = n.toString();
  let digits: number[] = [];
  for (i = 0; i < str.length; i++) {
    digits[i] = parseInt(str.charAt(i));
  }
  for (i = 0; i < digits.length; i++) {
    sum += digits[i];
    product *= digits[i];
  }
  return sum > product ? sum - product : product - sum;
}
console.log(subtractProductAndSum(234));

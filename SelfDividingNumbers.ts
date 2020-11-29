function selfDividingNumbers(left: number, right: number): number[] {
  let i: number;
  let j: number;
  let result: number[] = [];
  let str: string;
  let self: boolean = false;

  for (i = left; i <= right; i++) {
    str = i.toString();
    for (j = 0; j < str.length; j++) {
      if (i % parseInt(str.charAt(j)) == 0) {
        self = true;
      } else {
        self = false;
        break;
      }
    }
    if (self) {
      result.push(i);
    }
  }
  return result;
}
console.log(selfDividingNumbers(1, 22));

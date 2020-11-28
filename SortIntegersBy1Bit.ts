function sortByBits(arr: number[]): number[] {
  const sortByBits = (arr: number[]) => {
    return arr.sort((a, b) => numBit(a) - numBit(b) || a - b);
  };
  const numBit = (num: number) => {
    let i: number;
    let str: string = num.toString(2);
    let result: number = 0;
    for (i = 0; i < str.length; i++) {
      if (str.charAt(i) == "1") {
        result++;
      }
    }
    return result;
  };
  return sortByBits(arr);
}

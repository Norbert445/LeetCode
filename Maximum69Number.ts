function maximum69Number(num: number): number {
  let str: string = num.toString();
  let i: number;
  for (i = 0; i < str.length; i++) {
    if (str.charAt(i) != "9") {
      str = str.substr(0, i) + "9" + str.substr(i + 1, str.length);
      return parseInt(str);
    }
  }
  return num;
}
console.log(maximum69Number(9669));

function generateTheString(n: number): string {
  let i: number;
  let str: string = "";
  if (n % 2 != 0) {
    for (i = 0; i < n; i++) {
      str += "c";
    }
  } else {
    for (i = 0; i < n - 1; i++) {
      str += "c";
    }
    str += "a";
  }
  return str;
}
console.log(generateTheString(4));

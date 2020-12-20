function replaceElements(arr: number[]): number[] {
  let pocet: number = arr.length;
  let max: number = arr[pocet - 1];
  arr[pocet - 1] = -1;
  let i: number;
  let temp: number;

  for (i = pocet - 2; i >= 0; i--) {
    temp = arr[i];
    arr[i] = max;
    if (max < temp) {
      max = temp;
    }
  }
  return arr;
}
console.log(replaceElements([17, 18, 5, 4, 6, 1]));

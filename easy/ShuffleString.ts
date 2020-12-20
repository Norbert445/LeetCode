function restoreString(s: string, indices: number[]): string {
  let tmp: number;
  let tmp1: string;
  let arr = s.split("");
  for (let i: number = 0; i < indices.length; i++) {
    for (let j: number = i + 1; j < indices.length; j++) {
      if (indices[i] > indices[j]) {
        tmp = indices[i];
        indices[i] = indices[j];
        indices[j] = tmp;
        tmp1 = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp1;
      }
    }
  }
  s = arr.join();
  return s;
}
console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));

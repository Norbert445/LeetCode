function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
  let str1: string;
  let str2: string;

  str1 = word1.join("");
  str2 = word2.join("");
  if (str1 === str2) {
    return true;
  }
  return false;
}

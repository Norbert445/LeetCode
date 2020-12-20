function removeOuterParentheses(S: string): string {
  let i: number;
  let stack: string[] = [];
  let parantheses: string[] = [];
  let result: string = "";
  parantheses[0] = "";
  let j: number = 0;
  for (i = 0; i < S.length; i++) {
    if (S.charAt(i) === "(") {
      stack.push(S.charAt(i));
      parantheses[j] += S.charAt(i);
    } else {
      stack.pop();
      parantheses[j] += S.charAt(i);
    }
    if (stack.length === 0 && i != S.length - 1) {
      j++;
      parantheses[j] = "";
    }
  }
  parantheses.forEach((paranthes) => {
    result += paranthes.substring(1, paranthes.length - 1);
  });
  return result;
}
console.log(removeOuterParentheses("(()())(())"));

var reverseString = function (s) {
  var str = s.split("");
  for (i = 0, j = s.length - 1; i < j; i++, j--) {
    p = str[i];
    str[i] = str[j];
    str[j] = p;
  }
  return str.join("");
};
console.log(reverseString("ahoj"));

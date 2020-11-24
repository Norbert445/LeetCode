"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function uniqueMorseRepresentations(words) {
  let morse = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];
  let i;
  let index;
  let count = [];
  let text = "";
  let j = 0;
  words.forEach((word) => {
    for (i = 0; i < word.length; i++) {
      index = word.charCodeAt(i) - "a".charCodeAt(0);
      text += morse[index];
    }
    console.log(text);
    if (!count.includes(text)) {
      count[j] = text;
      j++;
    }
    text = "";
  });
  return count.length;
}
console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));

import { string } from "prop-types";

function uniqueMorseRepresentations(words: string[]): number {
  let morse: string[] = [
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
  let i: number;
  let index: number;
  let count: string[] = [];
  let text: string = "";
  let j: number = 0;

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

  return count.length - 1;
}
console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));

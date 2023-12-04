let A = [
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
];

let B = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "!",
  "@",
  "#",
  "$",
  "%",
  "&",
  "*",
  "?",
];
let f1 = () => {
  let index = Math.floor(Math.random() * A.length);
  let value = A[index];
  return value;
};
let f2 = () => {
  let index = Math.floor(Math.random() * B.length);
  let value = B[index];
  return value;
};
let id = () => {
  let id1 = f1() + f2() + f2() + f2() + f2() + f2() + f2() + f2() + f2() + f1();
  return id1;
};
let AR7Id = () => {
  let myId =
    id() +
    "-" +
    id() +
    "-" +
    id() +
    "-" +
    id() +
    "-" +
    id() +
    "-" +
    id() +
    "-" +
    id() +
    "-" +
    "AR7";
  return myId;
};
module.exports = AR7Id;

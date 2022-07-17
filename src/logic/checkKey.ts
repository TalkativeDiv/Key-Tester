const characterCodes = Array.from(Array(26)).map((_, i) => i + 97);
let lowercaseLetters = characterCodes.map((code) => String.fromCharCode(code));
let ctrl = [
  "Control",
  "Alt",
  "Shift",
  "Meta",
  "CapsLock",
  "Backspace",
  "Delete",
  "Enter",
  "Tab",
  "Escape",
  "ArrowLeft",
  "ArrowRight",
  "ArrowUp",
  "ArrowDown",
  "Home",
  "End",
  "PageUp",
  "PageDown",
  "Insert",
  "F1",
  "F2",
  "F3",
  "F4",
  "F5",
  "F6",
  "F7",
  "F8",
  "F9",
  "F10",
  "F11",
  "F12",
  "ScrollLock",
  "Pause",
  "PrintScreen",
  "NumLock",
  "Clear",
];
let special = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "{",
  "}",
  "|",
  ":",
  '"',
  "<",
  ">",
  "?",
  "~",
  "`",
  ".",
  ",",
  "\\",
  "/",
  ";",
  "-",
  "=",
  "Meta",
  "Alt",
  "Shift",
  "Control",
  "CapsLock",
  "Backspace",
  "Delete",
  "Enter",
  "Tab",
  "Escape",
  "ArrowLeft",
  "ArrowRight",
  "ArrowUp",
  "ArrowDown",
  "Home",
  "End",
  "PageUp",
  "PageDown",
  "Insert",
  "F1",
  "F2",
  "F3",
  "F4",
  "F5",
  "F6",
  "F7",
  "F8",
  "F9",
  "F10",
  "F11",
  "F12",
  '"',
  "'",
];
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

let keys = [lowercaseLetters, ctrl, special, numbers, " "];

let checkType = (key: any) => {
  let length =
    special.length + lowercaseLetters.length + ctrl.length + numbers.length;
  for (let j = 0; j < length; j++) {
    if (key == null) return "not a key";
    if (key.toLowerCase() == keys[0][j]) return "it is a string.";
    else if (key == keys[1][j]) return "it is a ctrl key.";
    else if (key == keys[2][j]) return "it is a special character.";
    else if (key == keys[3][j]) return "it is a number.";
    else if (key == keys[4]) return "it is a space.";
  }
};

export default checkType;

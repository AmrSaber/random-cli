
export const TYPE_HEX = 'hex';
export const TYPE_ASCII = 'ascii';
export const TYPE_BASE_64 = 'base64';
export const TYPE_NUMBERS = 'numbers';
export const TYPE_LETTERS = 'letters';
export const TYPE_EXTENDED = 'extended';

export const TYPES = [TYPE_HEX, TYPE_ASCII, TYPE_NUMBERS, TYPE_LETTERS, TYPE_EXTENDED, TYPE_BASE_64];

export const HEX_DIGITS = [...'0123456789abcdefABCDEF'];

// =============== Functions for generating ascii constants ===============
function getAsciiLetters() {
  const [smallLetters, capitalLetters] = ['a', 'A'].map(startLetter => {
    const letters = [];
    const startLetterCode = startLetter.charCodeAt(0);
    for (let i = 0; i < 26; ++i) {
      letters.push(String.fromCharCode(startLetterCode + i));
    }
    return letters;
  });

  return [...smallLetters, ...capitalLetters];
}

function getNumbers() {
  const numbers = [];
  for (let i = 0; i < 10; ++i) { numbers.push(`${i}`); }
  return numbers;
}

// =============== ASCII Constants ===============
export const ASCII_LETTERS = getAsciiLetters();
export const NUMBERS = getNumbers();

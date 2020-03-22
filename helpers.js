import {
  TYPE_ASCII,
  ASCII_LETTERS,
  NUMBERS,
  TYPE_NUMBERS,
  TYPE_LETTERS,
  TYPE_EXTENDED,
  TYPE_HEX,
  TYPE_BASE_64,
  HEX_DIGITS,
} from './constants';

export function getRandomElement(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

export function getValidCharacters(type) {
  switch (type) {
    case TYPE_ASCII: return [...ASCII_LETTERS, ...NUMBERS];
    case TYPE_NUMBERS: return NUMBERS;
    case TYPE_LETTERS: return ASCII_LETTERS;
    case TYPE_EXTENDED: return [...ASCII_LETTERS, ...NUMBERS, ...'+-_$#/@!'];
    case TYPE_HEX: return HEX_DIGITS;
    case TYPE_BASE_64: return [...ASCII_LETTERS, ...NUMBERS, ...'+/'];
    default: throw new Error(`Unknown type [${type}]`);
  }
}

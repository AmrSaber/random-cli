import { getRandomElement } from './random';
import {
  STRING_TYPE_ASCII,
  STRING_TYPE_NUMBERS,
  STRING_TYPE_LETTERS,
  STRING_TYPE_EXTENDED,
  STRING_TYPE_HEX,
  STRING_TYPE_BASE_64,
  ASCII_LETTERS,
  NUMBERS,
  HEX_DIGITS,
} from '../constants';

/**
 * Returns an array of valid characters for the given type.
 *
 * @param {[String]} type
 */
export function getValidCharacters(type) {
  switch (type) {
    case STRING_TYPE_ASCII: return [...ASCII_LETTERS, ...NUMBERS];
    case STRING_TYPE_NUMBERS: return NUMBERS;
    case STRING_TYPE_LETTERS: return ASCII_LETTERS;
    case STRING_TYPE_EXTENDED: return [...ASCII_LETTERS, ...NUMBERS, ...'+-_$#/@!'];
    case STRING_TYPE_HEX: return HEX_DIGITS;
    case STRING_TYPE_BASE_64: return [...ASCII_LETTERS, ...NUMBERS, ...'+/'];
    default: throw new Error(`Unknown type [${type}]`);
  }
}

/**
 * Returns a random string of the given type and length
 *
 * @param {Object} args
 * @param {String} args.type
 * @param {Number} args.length
 *
 * @returns {String}
 */
export function getRandomString({ type, length }) {
  // Populate the valid letters based on the random string type
  const valid = getValidCharacters(type);

  // Create and construct the random numbers array
  const randomLetters = [];
  for (let i = 0; i < length; ++i) { randomLetters.push(getRandomElement(valid)); }

  // Base64 string must have length that is a multiple of 4
  while (type === STRING_TYPE_BASE_64 && randomLetters.length % 4 !== 0) { randomLetters.push('='); }

  // Join the created random array to generate the resulting string
  return randomLetters.join('');
}

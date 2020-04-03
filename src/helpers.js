import {
  STRING_TYPE_ASCII,
  ASCII_LETTERS,
  NUMBERS,
  STRING_TYPE_NUMBERS,
  STRING_TYPE_LETTERS,
  STRING_TYPE_EXTENDED,
  STRING_TYPE_HEX,
  STRING_TYPE_BASE_64,
  HEX_DIGITS,
} from './constants';

/**
 * Returns a random integer in the given range, both start and end are inclusive.
 *
 * @param {Object} args
 * @param {Number} [args.min=0]
 * @param {Number} args.max
 *
 * @returns {Number}
 */
export function getRandomIntInRange({ min = 0, max }) {
  if (min > max) { throw new Error('Min must be less than or equal to max'); }

  const rangeMin = Math.ceil(min);
  const rangeMax = Math.floor(max);
  return Math.floor(Math.random() * (rangeMax - rangeMin + 1)) + rangeMin;
}

/**
 * Returns a shuffled array with the elements [0 .. length-1]
 * This uses a variation of fisher-yates algorithm described in link below
 * https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#Variants
 *
 * @param {Object} args
 * @param {Number} args.start
 * @param {Number} args.end
 *
 * @returns {[Number]}
 */
export function getShuffledArray({ start, end }) {
  const shuffled = [];

  for (let i = 0; i < (end - start + 1); ++i) {
    const randomIndex = getRandomIntInRange({ max: i });
    const nextValue = start + i;

    if (randomIndex === shuffled.length) {
      shuffled.push(nextValue);
    } else {
      shuffled.push(shuffled[randomIndex]);
      shuffled[randomIndex] = nextValue;
    }
  }

  return shuffled;
}

/**
 * Returns a random element from the given array.
 *
 * @param {[Any]} arr
 *
 * @returns {Any}
 */
function getRandomElement(arr) {
  const randomIndex = getRandomIntInRange({ max: arr.length - 1 });
  return arr[randomIndex];
}

/**
 * Returns an array of valid characters for the given type.
 *
 * @param {[String]} type
 */
function getValidCharacters(type) {
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

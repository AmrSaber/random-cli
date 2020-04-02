import {
  TYPE_ASCII,
  ASCII_LETTERS,
  NUMBERS,
  TYPE_NUMBERS,
  TYPE_LETTERS,
  TYPE_EXTENDED,
  TYPE_HEX,
  TYPE_BASE_64,
  TYPE_ARRAY,
  HEX_DIGITS,
} from './constants';

/**
 * Returns a random integer in the given range.
 * Note: this is implemented using binary-search-like technique, so it have complexity of O(log(max-min)).
 *
 * Personal Note: I am not sure if this is worth the effort;
 * I could not find anyone who references such a method or anything similar,
 * but I feel like it's better that depending on the float precision of Math.random
 *
 * @param {Object} args
 * @param {Number} [args.min=0]
 * @param {Number} args.max
 *
 * @returns {Number}
 */
function getRandomIntInRange({ min = 0, max }) {
  if (min > max) { throw new Error('Min must be less than or equal to max'); }

  let low = min;
  let high = max;

  while (high > low) {
    const med = Math.ceil((low + high) / 2);

    if (Math.random() > 0.5) {
      low = med;
    } else {
      high = med - 1;
    }
  }

  return low;
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
    case TYPE_ASCII: return [...ASCII_LETTERS, ...NUMBERS];
    case TYPE_NUMBERS: return NUMBERS;
    case TYPE_LETTERS: return ASCII_LETTERS;
    case TYPE_EXTENDED: return [...ASCII_LETTERS, ...NUMBERS, ...'+-_$#/@!'];
    case TYPE_HEX: return HEX_DIGITS;
    case TYPE_BASE_64: return [...ASCII_LETTERS, ...NUMBERS, ...'+/'];
    case TYPE_ARRAY: throw new Error('Cannot handle type [array]');
    default: throw new Error(`Unknown type [${type}]`);
  }
}

/**
 * Returns a shuffled array with the elements [0 .. length-1]
 * This uses a variation of fisher-yates algorithm described in link below
 * https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#Variants
 *
 * @param {Number} length
 *
 * @returns {[Number]}
 */
function getShuffledArray(length) {
  const shuffled = [];

  for (let i = 0; i < length; ++i) {
    const randomIndex = getRandomIntInRange({ max: i });
    if (randomIndex === shuffled.length) {
      shuffled.push(i);
    } else {
      shuffled.push(shuffled[randomIndex]);
      shuffled[randomIndex] = i;
    }
  }

  return shuffled.join(' ');
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
  // Shuffled array has special handling unlike the rest of the types
  if (type === TYPE_ARRAY) { return getShuffledArray(length); }

  // Populate the valid letters based on the random string type
  const valid = getValidCharacters(type);

  // Create and construct the random numbers array
  const randomLetters = [];
  for (let i = 0; i < length; ++i) { randomLetters.push(getRandomElement(valid)); }

  // Base64 string must have length that is a multiple of 4
  while (type === TYPE_BASE_64 && randomLetters.length % 4 !== 0) { randomLetters.push('='); }

  // Join the created random array to generate the resulting string
  return randomLetters.join('');
}

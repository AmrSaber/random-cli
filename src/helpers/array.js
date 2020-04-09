import { getRandomIntInRange } from './random';

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

  for (let value = start; value <= end; ++value) {
    const randomIndex = getRandomIntInRange({ min: 0, max: shuffled.length });

    if (randomIndex === shuffled.length) {
      shuffled.push(value);
    } else {
      shuffled.push(shuffled[randomIndex]);
      shuffled[randomIndex] = value;
    }
  }

  return shuffled;
}

/**
 * Given an array, returns a shuffled instance of that array.
 *
 * @param {Any[]} arr
 *
 * @returns {Any[]}
 */
export function shuffle(arr) {
  const shuffledIndexes = getShuffledArray({ start: 0, end: arr.length - 1 });
  return shuffledIndexes.map(i => arr[i]);
}

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

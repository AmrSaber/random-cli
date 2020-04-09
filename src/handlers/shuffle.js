import { shuffle } from '../helpers';

/**
 * Given an array of string, shuffles and prints them.
 *
 * @param {Object} args
 * @param {String[]} args.items
 * @param {String} args.delimiter
 * @param {String} args.count
 */
function shuffleHandler({ items, delimiter, count }) {
  const randomShuffles = [];

  for (let i = 0; i < count; ++i) {
    const shuffledItems = shuffle(items);
    randomShuffles.push(shuffledItems.join(delimiter));
  }

  // Print the generated random strings
  console.log(randomShuffles.join('\n')); // eslint-disable-line no-console
}

export default shuffleHandler;

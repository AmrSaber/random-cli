import { shuffle } from '../helpers';

/**
 * Given an array of string, pick and print `number` items of them, without repetition.
 *
 * @param {Object} args
 * @param {String[]} args.items
 * @param {Number} args.number
 * @param {String} args.delimiter
 * @param {String} args.count
 */
function pickHandler({ items, number, delimiter, count }) {
  const randomChoices = [];

  for (let i = 0; i < count; ++i) {
    const shuffledItems = shuffle(items);
    const chosenItems = shuffledItems.slice(0, number);
    randomChoices.push(chosenItems.join(delimiter));
  }

  // Print the generated random strings
  console.log(randomChoices.join('\n')); // eslint-disable-line no-console
}

export default pickHandler;

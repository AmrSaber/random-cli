import { getShuffledArray } from '../helpers';

/**
 * Logs random array(s) with the given specs.
 *
 * Note: `pad` option makes all the numbers have the same length.
 *
 * @param {Object} args
 * @param {Number} [args.length=10] array length.
 * @param {Number} [args.start=1] array start, overrides startAtZero if both are provided.
 * @param {Number} [args.end] array end, overrides `length` if both are provided.
 * @param {String} [args.delimiter=' ']
 * @param {Number} [args.count=1] number of arrays to print.
 * @param {Boolean} [args.startAtZero=false] whether array should start at 0.
 * @param {Boolean} [args.pad=false] whether to pad small numbers with zeros.
 */
function arrayHandler({ length, start, end, delimiter, count, startAtZero, pad }) {
  let arrayStart = 1;
  if (start != null) {
    arrayStart = start;
  } else if (startAtZero) {
    arrayStart = 0;
  }

  let arrayEnd = arrayStart + length - 1;
  if (end != null) { arrayEnd = end; }

  if (arrayEnd < arrayStart) {
    console.error('Array end must be less than or equal array start'); // eslint-disable-line no-console
    return;
  }

  // Construct number arrays of the given count
  const shuffledArrays = [];
  for (let c = 0; c < count; ++c) {
    let shuffledArray = getShuffledArray({ start: arrayStart, end: arrayEnd });

    if (pad) {
      const padWithZeros = number => String(number).padStart(String(arrayEnd).length, '0');
      shuffledArray = shuffledArray.map(padWithZeros);
    }

    shuffledArrays.push(shuffledArray.join(delimiter));
  }

  // Print the generated shuffled arrays
  console.log(shuffledArrays.join('\n')); // eslint-disable-line no-console
}

export default arrayHandler;

import { getShuffledArray } from '../helpers';

function arrayHandler({ length, start, end, delimiter, count, startAtZero }) {
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
    const shuffledArray = getShuffledArray({ start: arrayStart, end: arrayEnd });
    shuffledArrays.push(shuffledArray.join(delimiter));
  }

  // Print the generated shuffled arrays
  console.log(shuffledArrays.join('\n')); // eslint-disable-line no-console
}

export default arrayHandler;

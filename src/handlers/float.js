import { getSecureFloat } from '../helpers';

function floatHandler({ precision, count }) {
  // Set precision to have minimum of 0 and maximum of 100
  precision = Math.max(precision, 0); // eslint-disable-line no-param-reassign
  precision = Math.min(precision, 100); // eslint-disable-line no-param-reassign

  // Construct number strings of the given count
  const randomNumbers = [];
  for (let c = 0; c < count; ++c) {
    let randomFloat = getSecureFloat().toFixed(precision).replace(/0+$/, '');
    if (randomFloat.length <= 2) { randomFloat = '0'; } // handles a corner case when precision is less than 2

    randomNumbers.push(randomFloat);
  }

  // Print the generated random strings
  console.log(randomNumbers.join('\n')); // eslint-disable-line no-console
}

export default floatHandler;

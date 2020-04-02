import { getRandomString } from '../helpers';

function stringHandler({ type, length, count }) {
  // Construct number strings of the given count
  const randomStrings = [];
  for (let c = 0; c < count; ++c) { randomStrings.push(getRandomString({ type, length })); }

  // Print the generated random strings
  console.log(randomStrings.join('\n')); // eslint-disable-line no-console
}

export default stringHandler;

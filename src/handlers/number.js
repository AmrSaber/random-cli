import { getRandomIntInRange } from '../helpers';

function numberHandler({ min, max, count }) {
  if (min > max) {
    console.error('Min must be less than or equal to max'); // eslint-disable-line no-console
    return;
  }

  // Construct number strings of the given count
  const randomNumbers = [];
  for (let c = 0; c < count; ++c) { randomNumbers.push(getRandomIntInRange({ min, max })); }

  // Print the generated random strings
  console.log(randomNumbers.join('\n')); // eslint-disable-line no-console
}

export default numberHandler;

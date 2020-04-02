import { getRandomIntInRange } from '../../helpers';

/**
 * @type {import('yargs').CommandModule}
 */
export const NumberCommand = {
  command: 'number <min> <max>',

  aliases: ['num', 'integer', 'int'],

  describe: 'Prints a random integer number from a given range',

  builder: yargs => yargs
    .positional(
      'max',
      {
        type: 'number',
        describe: 'Maximum value for the number',
      },
    )
    .positional(
      'min',
      {
        type: 'number',
        describe: 'Minimum value for the number',
      },
    ),

  handler: argv => {
    const { min, max, count } = argv;
    if (min > max) {
      console.error('Min must be less than or equal to max'); // eslint-disable-line no-console
      return;
    }

    // Construct number strings of the given count
    const randomNumbers = [];
    for (let c = 0; c < count; ++c) { randomNumbers.push(getRandomIntInRange({ min, max })); }

    // Print the generated random strings
    console.log(randomNumbers.join('\n')); // eslint-disable-line no-console
  },
};

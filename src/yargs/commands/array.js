import { getShuffledArray } from '../../helpers';

/**
 * @type {import('yargs').CommandModule}
 */
export const ArrayCommand = {
  command: 'array [length]',

  aliases: ['arr'],

  describe: 'Prints a shuffled array, array starts at 1 by default',

  builder: {
    length: {
      type: 'number',
      default: 10,
      describe: 'Length of the shuffled array',
    },

    0: {
      type: 'boolean',
      describe: 'Array should start at 0, short-hand for "-s 0"',
    },

    start: {
      alias: 's',
      type: 'number',
      describe: 'Array starting position, overrides -0 if both were provided',
    },

    end: {
      alias: 'e',
      type: 'number',
      describe: 'Array ending position, overrides length',
    },

    delimiter: {
      alias: 'd',
      type: 'string',
      default: ' ',
      describe: 'Array element delimiter',
    },
  },

  handler: argv => {
    const { length, start, end, delimiter, count } = argv;

    let arrayStart = 1;
    if (start != null) {
      arrayStart = start;
    } else if (argv['0']) {
      arrayStart = 0;
    }

    let arrayEnd = arrayStart + length - 1;
    if (end != null) { arrayEnd = end; }

    // Construct number arrays of the given count
    const shuffledArrays = [];
    for (let c = 0; c < count; ++c) {
      const shuffledArray = getShuffledArray({ start: arrayStart, end: arrayEnd });
      shuffledArrays.push(shuffledArray.join(delimiter));
    }

    // Print the generated shuffled arrays
    console.log(shuffledArrays.join('\n')); // eslint-disable-line no-console
  },
};

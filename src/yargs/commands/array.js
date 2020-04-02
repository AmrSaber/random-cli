import { arrayHandler } from '../../handlers';

/**
 * @type {import('yargs').CommandModule}
 */
export const ArrayCommand = {
  command: 'array [length]',

  aliases: ['arr'],

  describe: 'Prints a shuffled array, array starts at 1 by default',

  builder: yargs => yargs
    .positional(
      'length',
      {
        type: 'number',
        default: 10,
        describe: 'Length of the shuffled array',
      },
    ).options({
      0: {
        alias: 'startAtZero',
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
    }),

  handler: arrayHandler,
};

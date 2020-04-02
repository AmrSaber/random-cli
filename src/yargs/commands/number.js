import { numberHandler } from '../../handlers';

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

  handler: numberHandler,
};

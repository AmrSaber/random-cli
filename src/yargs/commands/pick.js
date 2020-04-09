import { pickHandler } from '../../handlers';

/**
 * @type {import('yargs').CommandModule}
 */
export const PickCommand = {
  command: 'pick <items..>',

  describe: 'Picks and print a random item from the given items',

  builder: yargs => yargs
    .positional(
      'items',
      {
        type: 'string',
        describe: 'Items to pick from, space separated',
      },
    ).options({
      number: {
        alias: 'n',
        type: 'number',
        default: 1,
        describe:
        'Number of items to pick',
      },

      delimiter: {
        alias: 'd',
        type: 'string',
        default: ' ',
        describe: 'Delimiter for the chosen items',
      },
    }),

  handler: pickHandler,
};

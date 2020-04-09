import { shuffleHandler } from '../../handlers';

/**
 * @type {import('yargs').CommandModule}
 */
export const shuffleCommand = {
  command: 'shuffle <items..>',

  describe: 'Shuffles the given items',

  builder: yargs => yargs
    .positional(
      'items',
      {
        type: 'string',
        describe: 'Items to shuffle, space separated',
      },
    ).options({
      delimiter: {
        alias: 'd',
        type: 'string',
        default: ' ',
        describe: 'Delimiter for the shuffled output',
      },
    }),

  handler: shuffleHandler,
};

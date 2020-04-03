import { STRING_TYPE_ASCII, STRING_TYPES } from '../../constants';
import { stringHandler } from '../../handlers';

/**
 * @type {import('yargs').CommandModule}
 */
export const StringCommand = {
  command: 'string',

  aliases: ['str'],

  describe: 'Prints a random string',

  builder: {
    type: {
      alias: 't',
      type: 'string',
      default: STRING_TYPE_ASCII,
      choices: STRING_TYPES,
      describe: 'Type of the random string',
    },

    length: {
      alias: 'l',
      type: 'number',
      default: 20,
      describe: 'Length of the random string',
    },
  },

  handler: stringHandler,
};

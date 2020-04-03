import { booleanHandler } from '../../handlers';
import { BOOLEAN_TYPE_TRUE_FALSE, BOOLEAN_TYPES } from '../../constants';

/**
 * @type {import('yargs').CommandModule}
 */
export const BooleanCommand = {
  command: 'boolean',

  aliases: ['bool'],

  describe: 'Prints a random boolean',

  builder: {
    type: {
      alias: 't',
      type: 'string',
      default: BOOLEAN_TYPE_TRUE_FALSE,
      choices: BOOLEAN_TYPES,
      describe: 'Type of the boolean',
    },
  },

  handler: booleanHandler,
};

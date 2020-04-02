import { booleanHandler } from '../../handlers';

/**
 * @type {import('yargs').CommandModule}
 */
export const BooleanCommand = {
  command: 'boolean',

  aliases: ['bool'],

  describe: 'Prints a random boolean',

  handler: booleanHandler,
};

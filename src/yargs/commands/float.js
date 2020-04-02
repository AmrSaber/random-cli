import { floatHandler } from '../../handlers';

/**
 * @type {import('yargs').CommandModule}
 */
export const FloatCommand = {
  command: 'float',

  describe: 'Prints a random floating point number between 0 (inclusive) and 1 (exclusive) with some chosen precision',

  builder: yargs => yargs.options({
    precision: {
      alias: 'p',
      type: 'number',
      default: 10,
      describe: 'Float precision, note that max precision is 16, any greater value supported will be considered 16',
    },
  }),

  handler: floatHandler,
};

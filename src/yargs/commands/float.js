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
      default: 100,
      describe: 'Float precision, note that max precision is 100, any greater value provided will be considered 100',
    },
  }),

  handler: floatHandler,
};

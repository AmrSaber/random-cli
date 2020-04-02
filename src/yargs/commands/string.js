import { TYPE_ASCII, STRING_TYPES } from '../../constants';
import { getRandomString } from '../../helpers';

export const StringCommand = {
  command: 'string',

  aliases: ['str'],

  desc: 'Prints a random string',

  builder: {
    type: {
      alias: 't',
      type: 'string',
      default: TYPE_ASCII,
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

  handler: argv => {
    const { type, length, count } = argv;

    // Construct number strings of the given count
    const randomStrings = [];
    for (let c = 0; c < count; ++c) { randomStrings.push(getRandomString({ type, length })); }

    // Print the generated random strings
    console.log(randomStrings.join('\n')); // eslint-disable-line no-console
  },
};

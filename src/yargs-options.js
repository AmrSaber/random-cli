import { TYPE_ASCII, TYPES } from './constants';

const options = {
  type: {
    alias: 't',
    type: 'string',
    default: TYPE_ASCII,
    choices: TYPES,
    describe: 'Type of the random string',
  },

  length: {
    alias: 'l',
    type: 'number',
    default: 20,
    describe: 'Length of the random string',
  },

  count: {
    alias: 'c',
    type: 'number',
    default: 1,
    describe: 'Number of random strings to display',
  },
};

export default options;

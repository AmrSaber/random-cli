#!/usr/bin/env node
require = require('esm')(module); // eslint-disable-line no-global-assign
const yargs = require('yargs');
const { TYPES, TYPE_ASCII, TYPE_BASE_64 } = require('./constants');
const { getRandomElement, getValidCharacters } = require('./helpers');

// Set yargs options
yargs
  .strict(true)
  .alias('help', 'h')
  .alias('version', 'v')
  .option('type', {
    alias: 't',
    type: 'string',
    default: TYPE_ASCII,
    choices: TYPES,
    describe: 'Type of the random string',
  })
  .option('length', {
    alias: 'l',
    type: 'number',
    default: 20,
    describe: 'Length of the random string',
  })
  .option('count', {
    alias: 'c',
    type: 'number',
    default: 1,
    describe: 'Number of random strings to display',
  });

// Get parsed arguments from yargs
const { argv: { type, length, count } } = yargs;

// Populate the valid letters based on the random string type
const valid = getValidCharacters(type);

const randomStrings = [];
for (let c = 0; c < count; ++c) {
  // Create and construct the random numbers array
  const randomLetters = [];
  for (let i = 0; i < length; ++i) { randomLetters.push(getRandomElement(valid)); }

  // Base64 string must have length that is a multiple of 4
  while (type === TYPE_BASE_64 && randomLetters.length % 4 !== 0) { randomLetters.push('='); }

  // Add the generated random letters into randomStrings array to be printed
  randomStrings.push(randomLetters.join(''));
}

// Print the generated random strings
console.log(randomStrings.join('\n')); // eslint-disable-line no-console

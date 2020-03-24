#!/usr/bin/env node
require = require('esm')(module); // eslint-disable-line no-global-assign

const yargs = require('yargs');
const yargsOptions = require('./yargs-options').default;
const { getRandomString } = require('./helpers');

// Set yargs options
yargs
  .strict(true)
  .demandCommand(0, 0)
  .alias('help', 'h')
  .alias('version', 'v')
  .options(yargsOptions);

// Get parsed arguments from yargs
const { argv: { type, length, count } } = yargs;

// Construct number strings of the given count
const randomStrings = [];
for (let c = 0; c < count; ++c) { randomStrings.push(getRandomString({ type, length })); }

// Print the generated random strings
console.log(randomStrings.join('\n')); // eslint-disable-line no-console

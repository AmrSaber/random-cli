#!/usr/bin/env node
require = require('esm')(module); // eslint-disable-line no-global-assign

const yargs = require('yargs');
const { globalYargsOptions, yargsCommands } = require('./yargs');

// Set yargs options
yargs
  .strict(true)
  .demandCommand(1, 1)
  .alias('help', 'h')
  .alias('version', 'v')
  .options(globalYargsOptions);

// Attach each command to yargs
yargsCommands.forEach(command => yargs.command(command));

// Must be called for yargs to parse the arguments
yargs.argv; // eslint-disable-line no-unused-expressions

/**
 * @type {import('yargs').CommandModule}
 */
export const BooleanCommand = {
  command: 'boolean',

  aliases: ['bool'],

  describe: 'Prints a random boolean',

  handler: argv => {
    const { count } = argv;

    // Construct number strings of the given count
    const randomBooleans = [];
    for (let c = 0; c < count; ++c) {
      const boolean = Math.random() > 0.5;
      randomBooleans.push(String(boolean));
    }

    // Print the generated random strings
    console.log(randomBooleans.join('\n')); // eslint-disable-line no-console
  },
};

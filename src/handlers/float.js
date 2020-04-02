function floatHandler({ precision, count }) {
  let floatPrecision = precision;
  if (floatPrecision > 16) { floatPrecision = 16; }

  // Construct number strings of the given count
  const randomNumbers = [];
  for (let c = 0; c < count; ++c) {
    let randomFloat = Math.random().toFixed(precision).replace(/0*$/, '');
    if (randomFloat.length <= 2) { randomFloat = '0'; } // handles a corner case when precision is less than 2

    randomNumbers.push(randomFloat);
  }

  // Print the generated random strings
  console.log(randomNumbers.join('\n')); // eslint-disable-line no-console
}

export default floatHandler;

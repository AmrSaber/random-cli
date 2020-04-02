function booleanHandler({ count }) {
  // Construct number strings of the given count
  const randomBooleans = [];
  for (let c = 0; c < count; ++c) {
    const boolean = Math.random() > 0.5;
    randomBooleans.push(String(boolean));
  }

  // Print the generated random strings
  console.log(randomBooleans.join('\n')); // eslint-disable-line no-console
}

export default booleanHandler;

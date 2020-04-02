import faker from 'faker';

import { executeCli } from '../common';

describe('Float Command Unit Test', () => {
  test('it generates a random float number between 0 and 1', async () => {
    const result = await executeCli('float');
    expect(result).toMatch(/0(\.[0-9]*[1-9])?$/);
  });

  test('it changes precision using --precision option', async () => {
    const precision = faker.random.number({ min: 5, max: 15 });
    const result = await executeCli(`float -p ${precision}`);
    expect(result).toMatch(/0(\.[0-9]*[1-9])?$/);
    expect(result.length).toBeLessThanOrEqual(precision + 2); // The +2 is for the characters "0."
  });
});

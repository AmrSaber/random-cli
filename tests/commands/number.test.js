import faker from 'faker';

import { executeCli } from '../common';

describe('Number Command Unit Test', () => {
  test('it generates a random number within the given range', async () => {
    const min = faker.datatype.number({ min: 0, max: 10 });
    const max = faker.datatype.number({ min, max: 20 });

    const result = await executeCli(`number ${min} ${max}`).then(Number);

    expect(result).toBeNumber();
    expect(Number(result)).toBeGreaterThanOrEqual(min);
    expect(Number(result)).toBeLessThanOrEqual(max);
  });
});

import faker from 'faker';

import { executeCli } from './common';

describe('CLI Unit Test', () => {
  describe('global options', () => {
    test('count', async () => {
      const count = faker.random.number({ min: 1, max: 10 });
      const result = await executeCli(`string -c ${count}`);

      expect(result).toBeString();
      const lines = result.split('\n');
      expect(lines).toHaveLength(count);
    });
  });
});

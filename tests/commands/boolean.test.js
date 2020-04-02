import { executeCli } from '../common';

describe('Boolean Command Unit Test', () => {
  test('it generates a random boolean', async () => {
    const result = await executeCli('boolean');
    expect(result).toBeOneOf(['true', 'false']);
  });
});

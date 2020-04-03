import { executeCli } from '../common';
import { getBooleanTypeValues } from '../../src/helpers/boolean';
import { BOOLEAN_TYPES } from '../../src/constants';

describe('Boolean Command Unit Test', () => {
  test('it generates a random boolean', async () => {
    const result = await executeCli('boolean');
    expect(result).toBeOneOf(['true', 'false']);
  });

  describe('type', () => {
    BOOLEAN_TYPES.forEach(type => {
      test(type, async () => {
        const result = await executeCli(`boolean -t ${type}`);
        const typeValues = getBooleanTypeValues({ type });
        expect(result).toBeOneOf(typeValues.map(String));
      });
    });
  });
});

import { executeCli } from '../common';
import { getValidCharacters } from '../../src/helpers';
import { STRING_TYPE_ASCII } from '../../src/constants';

describe('Float Command Unit Test', () => {
  const items = getValidCharacters(STRING_TYPE_ASCII);

  test('it shuffles the given array', async () => {
    const result = await executeCli(`shuffle ${items.join(' ')}`);
    const shuffledItems = result.split(' ');

    // Check that all items exist
    expect(shuffledItems.length).toEqual(items.length);
    shuffledItems.forEach(item => expect(item).toBeOneOf(items));

    // Test that it performs a shuffle
    let isSameOrder = true;
    shuffledItems.forEach((item, i) => { if (item !== items[i]) { isSameOrder = false; } });
    expect(isSameOrder).toBeFalse(); // Very unlikely that the shuffle will be the same as the original array (1/62!)
  });

  test('it separates chosen items with a delimiter using --delimiter option', async () => {
    const result = await executeCli(`shuffle ${items.join(' ')} --delimiter '-'`);
    const chosenItems = result.split('-');
    chosenItems.forEach(item => expect(item).toBeOneOf(items));
  });
});

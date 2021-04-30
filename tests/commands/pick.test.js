import faker from 'faker';

import { executeCli } from '../common';

describe('Float Command Unit Test', () => {
  const items = ['a', 'b', 'c', 'd', 'e'];

  test('it picks a random item from the given items', async () => {
    const result = await executeCli(`pick ${items.join(' ')}`);
    expect(result).toBeOneOf(items);
  });

  test('it picks a number of items using --number option', async () => {
    const number = faker.datatype.number({ min: 2, max: items.length });
    const result = await executeCli(`pick ${items.join(' ')} --number ${number}`);
    const chosenItems = result.split(' ');

    // Items are chosen without repetition
    expect(chosenItems.length).toEqual(new Set(chosenItems).size);
    chosenItems.forEach(item => expect(item).toBeOneOf(items));
  });

  test('it separates chosen items with a delimiter using --delimiter option', async () => {
    const result = await executeCli(`pick ${items.join(' ')} --number 3 --delimiter '-'`);
    const chosenItems = result.split('-');
    chosenItems.forEach(item => expect(item).toBeOneOf(items));
  });
});

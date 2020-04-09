import faker from 'faker';

import { executeCli } from '../common';

describe('String Command Unit Test', () => {
  const getArray = async (args = '', delimiter = ' ') => executeCli(`array ${args}`)
    .then(result => result.split(delimiter).map(Number));

  const assertArrayElements = ({ array, start }) => {
    let mix = start;
    while (array.includes(mix)) { ++mix; }

    expect(mix).toEqual(array.length + start);
  };

  test('all options are optional', async () => {
    const result = await executeCli('array');
    expect(result).toBeString();
    expect(result).not.toBeEmpty();
  });

  test('array elements start at 1 by default and includes consecutive numbers', async () => {
    const array = await getArray();
    assertArrayElements({ array, start: 1 });
  });

  test('length', async () => {
    const length = faker.random.number({ min: 5, max: 25 });
    const result = await getArray(length);
    expect(result).toHaveLength(length);
  });

  test('start at 0 with -0', async () => {
    const array = await getArray('-0');
    assertArrayElements({ array, start: 0 });
  });

  test('override array start with --start', async () => {
    const start = faker.random.number({ min: 5, max: 10 });
    const array = await getArray(`--start ${start}`);
    assertArrayElements({ array, start });
  });

  test('override array end with --end', async () => {
    const end = faker.random.number({ min: 5, max: 10 });
    const array = await getArray(`--end ${end}`);
    expect(array.length).toEqual(end);
  });

  test('change delimiter with --delimiter', async () => {
    const delimiter = faker.random.arrayElement([...'-+ |']);
    const result = await executeCli(`array -d ${delimiter}`);
    expect(result).toMatch(RegExp(`^([0-9]+\\${delimiter})*[0-9]+$`));
  });

  test('numbers are 0-padded with --pad option', async () => {
    const length = faker.random.number({ min: 5, max: 100 });
    const result = await executeCli(`array ${length} --pad`);
    assertArrayElements({ array: result.split(' ').map(Number), start: 1 });
    result.split(' ').forEach(number => expect(number).toHaveLength(String(length).length));
  });
});

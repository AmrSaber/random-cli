import faker from 'faker';

import { executeCli } from './common';
import {
  TYPE_ASCII,
  TYPE_NUMBERS,
  TYPE_LETTERS,
  TYPE_EXTENDED,
  TYPE_BASE_64,
  TYPE_HEX,
  TYPE_ARRAY,
} from '../src/constants';
import {
  asciiRegex,
  numbersRegex,
  lettersRegex,
  extendedRegex,
  base64Regex,
  hexRegex,
  arrayRegex,
} from './common/regex';

describe('CLI Unit Test', () => {
  test('all options are optional', async () => {
    const result = await executeCli();
    expect(result).toBeString();
    expect(result).not.toBeEmpty();
  });

  test('length', async () => {
    const length = faker.random.number({ min: 5, max: 25 });
    const result = await executeCli(`-l ${length}`);

    expect(result).toBeString();
    expect(result).toHaveLength(length);
  });

  test('count', async () => {
    const count = faker.random.number({ min: 1, max: 10 });
    const result = await executeCli(`-c ${count}`);

    expect(result).toBeString();
    const lines = result.split('\n');
    expect(lines).toHaveLength(count);
  });

  describe('type', () => {
    const assertTypeMatchesRegex = async (type, regex) => {
      const result = await executeCli(`-t ${type}`);
      expect(result).toMatch(regex);
      return result;
    };

    test('ASCII', async () => {
      await assertTypeMatchesRegex(TYPE_ASCII, asciiRegex);
    });

    test('Numbers', async () => {
      await assertTypeMatchesRegex(TYPE_NUMBERS, numbersRegex);
    });

    test('Letters', async () => {
      await assertTypeMatchesRegex(TYPE_LETTERS, lettersRegex);
    });

    test('Extended', async () => {
      await assertTypeMatchesRegex(TYPE_EXTENDED, extendedRegex);
    });

    test('Base64', async () => {
      const result = await assertTypeMatchesRegex(TYPE_BASE_64, base64Regex);

      // Valid base64 string's length is always divisible by 4
      expect(result.length % 4).toEqual(0);
    });

    test('Hex', async () => {
      await assertTypeMatchesRegex(TYPE_HEX, hexRegex);
    });

    test('Array', async () => {
      const result = await assertTypeMatchesRegex(TYPE_ARRAY, arrayRegex);

      // ===== Assert that all numbers from 0 to length-1 are preset =====
      const numbers = result.split(' ').map(Number);
      const numbersSet = new Set(numbers);

      let mix = 0;
      while (numbersSet.has(mix)) { ++mix; }

      expect(mix).toEqual(numbers.length);
    });
  });
});

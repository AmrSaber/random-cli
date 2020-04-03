import { BOOLEAN_TYPE_TRUE_FALSE, BOOLEAN_TYPE_NUMERIC, BOOLEAN_TYPE_YES_NO } from '../constants';
import { getRandomElement } from './random';

/**
 * Get boolean values for the given type.
 *
 * @param {Object} args
 * @param {String} args.type
 *
 * @returns {[String]}
 */
export function getBooleanTypeValues({ type }) {
  switch (type) {
    case BOOLEAN_TYPE_NUMERIC: return [1, 0];
    case BOOLEAN_TYPE_YES_NO: return ['yes', 'no'];
    case BOOLEAN_TYPE_TRUE_FALSE: return [true, false];
    default: throw new Error(`Unknown boolean type [${type}]`);
  }
}

/**
 * Get a random boolean of the specified type.
 *
 * @param {Object} args
 * @param {String} args.type
 *
 * @returns {String}
 */
export function getRandomBoolean({ type }) {
  const values = getBooleanTypeValues({ type });
  return getRandomElement(values);
}

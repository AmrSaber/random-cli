import crypto from 'crypto';

/**
 * Returns a random floating point number created with cryptographically secure pseudo random generator (crypto).
 *
 * @returns {Number}
 */
export function getSecureFloat() {
  // Generate 7 random bytes
  const bytes = crypto.randomBytes(7);

  // Shift 4 bits from first bytes by 4 to the right
  let randomValue = (bytes[0] % (2 ** 4)) / (2 ** 4);

  // Each following byte of the 6, add its value and shift it 8 bits to the left
  bytes.slice(1).forEach(byte => { randomValue = (randomValue + byte) / (2 ** 8); });

  // randomValue now has a floating point number that is 52 bits long (the size of js float mantissa)
  return randomValue;
}

/**
 * Returns a random integer in the given range, both start and end are inclusive.
 *
 * @param {Object} args
 * @param {Number} [args.min=0]
 * @param {Number} args.max
 *
 * @returns {Number}
 */
export function getRandomIntInRange({ min = 0, max }) {
  if (min > max) { throw new Error('Min must be less than or equal to max'); }

  const rangeMin = Math.ceil(min);
  const rangeMax = Math.floor(max);
  return Math.floor(getSecureFloat() * (rangeMax - rangeMin + 1)) + rangeMin;
}

/**
 * Returns a random element from the given array.
 *
 * @param {[Any]} arr
 *
 * @returns {Any}
 */
export function getRandomElement(arr) {
  const randomIndex = getRandomIntInRange({ max: arr.length - 1 });
  return arr[randomIndex];
}

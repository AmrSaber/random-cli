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
  return Math.floor(Math.random() * (rangeMax - rangeMin + 1)) + rangeMin;
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

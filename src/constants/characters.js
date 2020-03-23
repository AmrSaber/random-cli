// =============== Constants Helpers ===============
/**
 * Given a start letter and end letter, generates all letters in the range [start, ..., end] (inclusive)
 * both lowercase and uppercase.
 *
 * @param {String} startLetter
 * @param {String} endLetter
 *
 * @returns {[String]} The generated letters.
 */
function generateLetters(startLetter, endLetter) {
  const lowercaseLetters = [];

  // Generate lowercase letters
  {
    const startLetterCode = startLetter.charCodeAt(0);
    const endLetterCode = endLetter.charCodeAt(0);
    for (let charCode = startLetterCode; charCode <= endLetterCode; ++charCode) {
      lowercaseLetters.push(String.fromCharCode(charCode));
    }
  }

  // Generate uppercase letters
  const uppercaseLetters = lowercaseLetters.map(letter => letter.toUpperCase());

  return [...lowercaseLetters, ...uppercaseLetters];
}

// =============== ASCII Constants ===============
export const NUMBERS = [...'0123456789'];
export const ASCII_LETTERS = generateLetters('a', 'z');
export const HEX_DIGITS = [...NUMBERS, ...generateLetters('a', 'f')];

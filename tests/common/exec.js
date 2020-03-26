import path from 'path';

import nrc from 'node-run-cmd';

/**
 * Calls the CLI with the given args and returns the result.
 *
 * @param {String} args
 *
 * @returns {Promise<String>}
 */
export function executeCli(args = '') {
  return new Promise(((resolve, reject) => {
    let result = '';
    nrc.run(
      `./cli.js ${args}`,
      {
        onData: function concat(data) { result += data; },
        onDone: function done() { resolve(result.trim()); },
        cwd: path.join(__dirname, '../../src/'),
        onError: reject,
      },
    );
  }));
}

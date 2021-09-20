/** Bare-bones check to see if server-side use of this code is inadvertantly
 * prevented by any use of Web APIs that aren't available in node.
 *
 * This script should only run as part of the yarn test:serverside command,
 * and takes place after a webpack build.
 */

const library = require('../lib')

console.log('server-side test running')

/** This will throw a ReferenceError if there's any use of a Web API
 * that node doesn't know about, which will cause CircleCI to fail a build. */
module.exports = library

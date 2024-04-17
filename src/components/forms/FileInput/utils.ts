/**
 * Creates an ID name for each file that strips all invalid characters.
 * @param {string} name - name of the file added to file input
 * @returns {string} same characters as the name with invalid chars removed
 */
export const makeSafeForID = (name: string): string => {
  return name.replace(/[^a-z0-9]/g, function replaceName(s) {
    const c = s.charCodeAt(0)
    if (c === 32) return '-'
    if (c >= 65 && c <= 90) return `img_${s.toLowerCase()}`
    return `__${c.toString(16).slice(-4)}`
  })
}

/** Moving the SPACER_GIF definition here instead of the constants.ts file,
 * as webpack was exporting that entire file, including use of the File
 * WebAPI; this was causing server-side site generators to break (#1250). */

export const SPACER_GIF =
  'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'

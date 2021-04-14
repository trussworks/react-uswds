/**
 * Generate a dynamic regular expression based off of a replaceable and possibly filtered value.
 *
 * @param {string} el An element within the combo box component
 * @param {string} query The value to use in the regular expression
 * @param {object} extras An object of regular expressions to replace and filter the query
 */
const generateDynamicRegExp = (
  filter: string,
  query = '',
  extras: Record<string, string>
): RegExp => {
  const escapeRegExp = (text: string): string => {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
  }

  let find = filter.replace(/{{(.*?)}}/g, (_m, $1: string): string => {
    const key = $1.trim()
    const queryFilter = extras[key]
    if (key !== 'query' && queryFilter) {
      const matcher = new RegExp(queryFilter, 'i')
      const matches = query.match(matcher)

      if (matches) {
        return escapeRegExp(matches[1])
      }

      return ''
    }
    return escapeRegExp(query)
  })

  find = '^(?:' + find + ')$'

  return new RegExp(find, 'i')
}

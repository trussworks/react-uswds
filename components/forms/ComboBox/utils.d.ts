/**
 * Generate a dynamic regular expression based off of a replaceable and possibly filtered value.
 *
 * @param {string} filter The base filter to use. May be extended by `extras`.
 * @param {string} query The value to use in the regular expression
 * @param {object} extras An object of regular expressions to replace and filter the query
 */
export declare const generateDynamicRegExp: (filter: string, query?: string, extras?: Record<string, string>) => RegExp;

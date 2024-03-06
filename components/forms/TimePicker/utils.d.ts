import { ComboBoxOption } from '../ComboBox/ComboBox';
/**
 * Parse a string of hh:mm into minutes
 *
 * @param {string} timeStr the time string to parse
 * @returns {number} the number of minutes
 */
export declare const parseTimeString: (timeStr: string) => number | undefined;
export declare const getTimeOptions: (minTimeMinutes: number, maxTimeMinutes: number, step: number) => ComboBoxOption[];

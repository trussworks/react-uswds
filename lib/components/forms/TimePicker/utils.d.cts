import { ComboBoxOption } from '../combobox/ComboBox/ComboBox.js';

/**
 * Parse a string of hh:mm into minutes
 *
 * @param {string} timeStr the time string to parse
 * @returns {number} the number of minutes
 */
export declare const parseTimeString: (timeStr: string) => number | undefined;
export interface TimeContext {
    minute: number;
    hour12: number;
    hour24: number;
    ampm: 'am' | 'pm';
}
export declare const getTimeContext: (minutes: number) => TimeContext;
export declare const padZeros: (value: number, length: number) => string;
export declare const getTimeOptions: (minTimeMinutes: number, maxTimeMinutes: number, step: number) => ComboBoxOption[];

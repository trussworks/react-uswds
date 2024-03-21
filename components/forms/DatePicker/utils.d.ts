import React, { KeyboardEvent } from '../../../../node_modules/react';
/**
 * This file contains the USWDS DatePicker date manipulation functions converted to TypeScript
 */
/**
 * Keep date within month. Month would only be over by 1 to 3 days
 *
 * @param {Date} dateToCheck the date object to check
 * @param {number} month the correct month
 * @returns {Date} the date, corrected if needed
 */
export declare const keepDateWithinMonth: (dateToCheck: Date, month: number) => Date;
/**
 * Set date from month day year
 *
 * @param {number} year the year to set
 * @param {number} month the month to set (zero-indexed)
 * @param {number} date the date to set
 * @returns {Date} the set date
 */
export declare const setDate: (year: number, month: number, date: number) => Date;
/**
 * todays date
 *
 * @returns {Date} todays date
 */
export declare const today: () => Date;
/**
 * Set date to first day of the month
 *
 * @param {Date} date the date to adjust
 * @returns {Date} the adjusted date
 */
export declare const startOfMonth: (date: Date) => Date;
/**
 * Set date to last day of the month
 *
 * @param {number} date the date to adjust
 * @returns {Date} the adjusted date
 */
export declare const lastDayOfMonth: (date: Date) => Date;
/**
 * Add days to date
 *
 * @param {Date} _date the date to adjust
 * @param {number} numDays the difference in days
 * @returns {Date} the adjusted date
 */
export declare const addDays: (date: Date, numDays: number) => Date;
/**
 * Subtract days from date
 *
 * @param {Date} _date the date to adjust
 * @param {number} numDays the difference in days
 * @returns {Date} the adjusted date
 */
export declare const subDays: (date: Date, numDays: number) => Date;
/**
 * Add weeks to date
 *
 * @param {Date} _date the date to adjust
 * @param {number} numWeeks the difference in weeks
 * @returns {Date} the adjusted date
 */
export declare const addWeeks: (date: Date, numWeeks: number) => Date;
/**
 * Subtract weeks from date
 *
 * @param {Date} _date the date to adjust
 * @param {number} numWeeks the difference in weeks
 * @returns {Date} the adjusted date
 */
export declare const subWeeks: (date: Date, numWeeks: number) => Date;
/**
 * Set date to the start of the week (Sunday)
 *
 * @param {Date} _date the date to adjust
 * @returns {Date} the adjusted date
 */
export declare const startOfWeek: (date: Date) => Date;
/**
 * Set date to the end of the week (Saturday)
 *
 * @param {Date} _date the date to adjust
 * @param {number} numWeeks the difference in weeks
 * @returns {Date} the adjusted date
 */
export declare const endOfWeek: (date: Date) => Date;
/**
 * Add months to date and keep date within month
 *
 * @param {Date} _date the date to adjust
 * @param {number} numMonths the difference in months
 * @returns {Date} the adjusted date
 */
export declare const addMonths: (date: Date, numMonths: number) => Date;
/**
 * Subtract months from date
 *
 * @param {Date} _date the date to adjust
 * @param {number} numMonths the difference in months
 * @returns {Date} the adjusted date
 */
export declare const subMonths: (date: Date, numMonths: number) => Date;
/**
 * Add years to date and keep date within month
 *
 * @param {Date} _date the date to adjust
 * @param {number} numYears the difference in years
 * @returns {Date} the adjusted date
 */
export declare const addYears: (date: Date, numYears: number) => Date;
/**
 * Subtract years from date
 *
 * @param {Date} _date the date to adjust
 * @param {number} numYears the difference in years
 * @returns {Date} the adjusted date
 */
export declare const subYears: (date: Date, numYears: number) => Date;
/**
 * Set months of date
 *
 * @param {Date} _date the date to adjust
 * @param {number} month zero-indexed month to set
 * @returns {Date} the adjusted date
 */
export declare const setMonth: (date: Date, month: number) => Date;
/**
 * Set year of date
 *
 * @param {Date} _date the date to adjust
 * @param {number} year the year to set
 * @returns {Date} the adjusted date
 */
export declare const setYear: (date: Date, year: number) => Date;
/**
 * Return the earliest date
 *
 * @param {Date} dateA date to compare
 * @param {Date} dateB date to compare
 * @returns {Date} the earliest date
 */
export declare const min: (dateA: Date, dateB: Date) => Date;
/**
 * Return the latest date
 *
 * @param {Date} dateA date to compare
 * @param {Date} dateB date to compare
 * @returns {Date} the latest date
 */
export declare const max: (dateA: Date, dateB: Date) => Date;
/**
 * Check if dates are the in the same year
 *
 * @param {Date} dateA date to compare
 * @param {Date} dateB date to compare
 * @returns {boolean} are dates in the same year
 */
export declare const isSameYear: (dateA: Date, dateB: Date) => boolean;
/**
 * Check if dates are the in the same month
 *
 * @param {Date} dateA date to compare
 * @param {Date} dateB date to compare
 * @returns {boolean} are dates in the same month
 */
export declare const isSameMonth: (dateA: Date, dateB: Date) => boolean;
/**
 * Check if dates are the same date
 *
 * @param {Date} dateA the date to compare
 * @param {Date} dateA the date to compare
 * @returns {boolean} are dates the same date
 */
export declare const isSameDay: (dateA: Date, dateB: Date) => boolean;
/**
 * return a new date within minimum and maximum date
 *
 * @param {Date} date date to check
 * @param {Date} minDate minimum date to allow
 * @param {Date} maxDate maximum date to allow
 * @returns {Date} the date between min and max
 */
export declare const keepDateBetweenMinAndMax: (date: Date, minDate: Date, maxDate?: Date) => Date;
/**
 * Check if dates is valid.
 *
 * @param {Date} date date to check
 * @param {Date} minDate minimum date to allow
 * @param {Date} maxDate maximum date to allow
 * @return {boolean} is there a day within the month within min and max dates
 */
export declare const isDateWithinMinAndMax: (date: Date, minDate: Date, maxDate?: Date) => boolean;
/**
 * Check if dates month is invalid.
 *
 * @param {Date} date date to check
 * @param {Date} minDate minimum date to allow
 * @param {Date} maxDate maximum date to allow
 * @return {boolean} is the month outside min or max dates
 */
export declare const isDatesMonthOutsideMinOrMax: (date: Date, minDate: Date, maxDate?: Date) => boolean;
/**
 * Check if dates year is invalid.
 *
 * @param {Date} date date to check
 * @param {Date} minDate minimum date to allow
 * @param {Date} maxDate maximum date to allow
 * @return {boolean} is the month outside min or max dates
 */
export declare const isDatesYearOutsideMinOrMax: (date: Date, minDate: Date, maxDate?: Date) => boolean;
/**
 * Parse a date with format M-D-YY
 *
 * @param {string} dateString the date string to parse
 * @param {string} dateFormat the format of the date string
 * @param {boolean} adjustDate should the date be adjusted
 * @returns {Date} the parsed date
 */
export declare const parseDateString: (dateString: string, dateFormat?: string, adjustDate?: boolean) => Date | undefined;
/**
 * Format a date to format YYYY-MM-DD
 *
 * @param {Date} date the date to format
 * @param {string} dateFormat the format of the date string
 * @returns {string} the formatted date string
 */
export declare const formatDate: (date: Date, dateFormat?: string) => string;
export declare const isDateInvalid: (dateString: string, minDate: Date, maxDate?: Date) => boolean;
export declare const listToTable: (list: React.ReactNode[], rowSize: number) => React.ReactNode;
export declare const handleTabKey: (event: KeyboardEvent, focusableEl: Array<HTMLButtonElement | null>) => void;
export declare const isIosDevice: () => boolean;

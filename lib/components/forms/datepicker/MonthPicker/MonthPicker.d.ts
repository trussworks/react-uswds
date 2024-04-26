import { DatePickerLocalization } from '../i18n.js';
import { default as React } from 'react';

export type MonthPickerProps = {
    date: Date;
    minDate: Date;
    maxDate?: Date;
    handleSelectMonth: (value: number) => void;
    i18n?: DatePickerLocalization;
};
declare const MonthPicker: ({ date, minDate, maxDate, handleSelectMonth, i18n, }: MonthPickerProps) => React.ReactElement;
export default MonthPicker;

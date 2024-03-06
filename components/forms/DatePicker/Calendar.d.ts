import React from 'react';
import { FocusMode } from './DatePicker';
import { DatePickerLocalization } from './i18n';
interface CalendarProps {
    date?: Date;
    selectedDate?: Date;
    handleSelectDate: (value: string) => void;
    minDate: Date;
    maxDate?: Date;
    rangeDate?: Date;
    setStatuses: (statuses: string[]) => void;
    focusMode: FocusMode;
    i18n?: DatePickerLocalization;
}
export declare const Calendar: ({ date, selectedDate, handleSelectDate, minDate, maxDate, rangeDate, setStatuses, focusMode, i18n, }: CalendarProps) => React.ReactElement;
export {};

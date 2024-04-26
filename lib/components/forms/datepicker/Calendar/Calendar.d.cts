import { FocusMode } from '../../../../utils/constants.js';
import { DatePickerLocalization } from '../i18n.js';
import { default as React } from 'react';

export interface CalendarProps {
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
declare const Calendar: ({ date, selectedDate, handleSelectDate, minDate, maxDate, rangeDate, setStatuses, focusMode, i18n, }: CalendarProps) => React.ReactElement;
export default Calendar;

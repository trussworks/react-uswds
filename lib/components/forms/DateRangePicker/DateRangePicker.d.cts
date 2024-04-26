import { DatePickerProps } from '../datepicker/DatePicker/DatePicker.js';
import { default as React } from 'react';

export type DateRangePickerProps = {
    startDateLabel?: string;
    startDateHint?: string;
    startDatePickerProps: Omit<DatePickerProps, 'rangeDate'>;
    endDateLabel?: string;
    endDateHint?: string;
    endDatePickerProps: Omit<DatePickerProps, 'rangeDate'>;
    className?: string;
} & JSX.IntrinsicElements['div'];
declare const DateRangePicker: ({ startDateLabel, startDateHint, startDatePickerProps, endDateLabel, endDateHint, endDatePickerProps, className, ...props }: DateRangePickerProps) => React.ReactElement;
export default DateRangePicker;

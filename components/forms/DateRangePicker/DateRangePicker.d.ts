import React from '../../../../node_modules/react';
import { DatePickerProps } from '../DatePicker/DatePicker';
type DateRangePickerProps = {
    startDateLabel?: string;
    startDateHint?: string;
    startDatePickerProps: Omit<DatePickerProps, 'rangeDate'>;
    endDateLabel?: string;
    endDateHint?: string;
    endDatePickerProps: Omit<DatePickerProps, 'rangeDate'>;
    className?: string;
};
export declare const DateRangePicker: (props: DateRangePickerProps & JSX.IntrinsicElements['div']) => React.ReactElement;
export {};

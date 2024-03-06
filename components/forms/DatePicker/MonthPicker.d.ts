import React from 'react';
import { DatePickerLocalization } from './i18n';
export declare const MonthPicker: ({ date, minDate, maxDate, handleSelectMonth, i18n, }: {
    date: Date;
    minDate: Date;
    maxDate?: Date | undefined;
    handleSelectMonth: (value: number) => void;
    i18n?: DatePickerLocalization | undefined;
}) => React.ReactElement;

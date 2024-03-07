import React from 'react';
interface YearPickerProps {
    date: Date;
    minDate: Date;
    maxDate?: Date;
    handleSelectYear: (year: number) => void;
    setStatuses: (statuses: string[]) => void;
}
export declare const YearPicker: ({ date, minDate, maxDate, handleSelectYear, setStatuses, }: YearPickerProps) => React.ReactElement;
export {};

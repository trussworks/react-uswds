import { default as React } from 'react';

export interface YearPickerProps {
    date: Date;
    minDate: Date;
    maxDate?: Date;
    handleSelectYear: (year: number) => void;
    setStatuses: (statuses: string[]) => void;
}
declare const YearPicker: ({ date, minDate, maxDate, handleSelectYear, setStatuses, }: YearPickerProps) => React.ReactElement;
export default YearPicker;

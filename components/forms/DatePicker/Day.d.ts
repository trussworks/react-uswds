import React, { KeyboardEvent } from 'react';
import { DatePickerLocalization } from './i18n';
interface DayProps {
    date: Date;
    onClick: (value: string) => void;
    onKeyDown: (event: KeyboardEvent) => void;
    onMouseMove: (hoverDate: Date) => void;
    isDisabled?: boolean;
    isSelected?: boolean;
    isFocused?: boolean;
    isPrevMonth?: boolean;
    isFocusedMonth?: boolean;
    isNextMonth?: boolean;
    isToday?: boolean;
    isRangeDate?: boolean;
    isRangeStart?: boolean;
    isRangeEnd?: boolean;
    isWithinRange?: boolean;
    i18n?: DatePickerLocalization;
}
export declare const Day: React.ForwardRefExoticComponent<DayProps & React.RefAttributes<HTMLButtonElement>>;
export {};

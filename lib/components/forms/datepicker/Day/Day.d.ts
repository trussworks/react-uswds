import { DatePickerLocalization } from '../i18n.js';
import { default as React, KeyboardEvent } from 'react';

export interface DayProps {
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
export declare const DayForwardRef: React.ForwardRefRenderFunction<HTMLButtonElement, DayProps>;
declare const Day: React.ForwardRefExoticComponent<DayProps & React.RefAttributes<HTMLButtonElement>>;
export default Day;

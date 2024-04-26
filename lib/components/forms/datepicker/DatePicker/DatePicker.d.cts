import { ValidationStatus } from '../../../../types/validationStatus.js';
import { DatePickerLocalization } from '../i18n.js';
import { default as React } from 'react';

export type BaseDatePickerProps = {
    id: string;
    name: string;
    className?: string;
    validationStatus?: ValidationStatus;
    disabled?: boolean;
    required?: boolean;
    defaultValue?: string;
    minDate?: string;
    maxDate?: string;
    rangeDate?: string;
    onChange?: (val?: string) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement> | React.FocusEvent<HTMLDivElement>) => void;
    i18n?: DatePickerLocalization;
};
export type DatePickerProps = BaseDatePickerProps & Omit<JSX.IntrinsicElements['input'], 'onChange'>;
declare const DatePicker: {
    ({ id, name, className, validationStatus, defaultValue, disabled, required, minDate, maxDate, rangeDate, onChange, onBlur, i18n, ...inputProps }: DatePickerProps): React.ReactElement;
    defaultProps: {
        minDate: string;
    };
};
export default DatePicker;

import React from '../../../../node_modules/react';
import { OptionalTextInputProps } from '../TextInput/TextInput';
type DateInputElementProps = {
    id: string;
    name: string;
    label: string;
    unit: 'month' | 'day' | 'year';
    maxLength: number;
    minLength?: number;
};
export declare const DateInput: ({ id, name, label, unit, maxLength, minLength, className, ...inputProps }: DateInputElementProps & OptionalTextInputProps) => React.ReactElement;
export default DateInput;

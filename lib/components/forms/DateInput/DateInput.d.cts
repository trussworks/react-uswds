import { TextInputProps } from '../TextInput/TextInput.js';
import { default as React } from 'react';

export type DateInputElementProps = {
    id: string;
    name: string;
    label: string;
    unit: 'month' | 'day' | 'year';
    maxLength: number;
    minLength?: number;
} & TextInputProps;
declare const DateInput: ({ id, name, label, unit, maxLength, minLength, className, ...inputProps }: DateInputElementProps) => React.ReactElement;
export default DateInput;

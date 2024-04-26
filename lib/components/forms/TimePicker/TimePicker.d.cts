import { ComboBoxProps } from '../combobox/ComboBox/ComboBox.js';
import { default as React } from 'react';

export type BaseTimePickerProps = {
    id: string;
    name: string;
    onChange: (val?: string) => void;
    label: string;
    defaultValue?: string;
    disabled?: boolean;
    minTime?: string;
    maxTime?: string;
    step?: number;
    hint?: string;
    className?: string;
};
export type TimePickerProps = BaseTimePickerProps & Omit<ComboBoxProps, 'onChange' | 'options'>;
declare const TimePicker: ({ id, name, onChange, label, defaultValue, disabled, minTime, maxTime, step, hint, className, ...props }: TimePickerProps) => React.ReactElement;
export default TimePicker;

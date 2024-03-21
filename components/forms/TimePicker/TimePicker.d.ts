import React from '../../../../node_modules/react';
type BaseTimePickerProps = {
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
type TimePickerProps = BaseTimePickerProps & Omit<JSX.IntrinsicElements['input'], 'onChange'>;
export declare const TimePicker: ({ id, name, onChange, label, defaultValue, disabled, minTime, maxTime, step, hint, className, }: TimePickerProps) => React.ReactElement;
export {};

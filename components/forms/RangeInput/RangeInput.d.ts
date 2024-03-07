import React from 'react';
type RangeInputProps = {
    id: string;
    name: string;
    min?: number;
    max?: number;
    textPreposition?: string;
    textUnit?: string;
    inputRef?: string | ((instance: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null | undefined;
};
export declare const RangeInput: ({ className, inputRef, textPreposition, textUnit, ...inputProps }: RangeInputProps & JSX.IntrinsicElements['input']) => React.ReactElement;
export default RangeInput;

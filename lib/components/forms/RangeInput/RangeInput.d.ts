import { default as React } from 'react';

export type RangeInputProps = {
    id: string;
    name: string;
    min?: number;
    max?: number;
    textPreposition?: string;
    textUnit?: string;
    inputRef?: string | ((instance: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null | undefined;
} & JSX.IntrinsicElements['input'];
declare const RangeInput: ({ className, inputRef, textPreposition, textUnit, ...inputProps }: RangeInputProps) => React.ReactElement;
export default RangeInput;

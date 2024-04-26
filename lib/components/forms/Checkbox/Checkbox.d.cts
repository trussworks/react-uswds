import { default as React } from 'react';

export type CheckboxProps = {
    id: string;
    name: string;
    className?: string;
    label: React.ReactNode;
    inputRef?: string | ((instance: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null | undefined;
    tile?: boolean;
    labelDescription?: React.ReactNode;
} & JSX.IntrinsicElements['input'];
declare const Checkbox: ({ id, name, className, label, inputRef, tile, labelDescription, ...inputProps }: CheckboxProps) => React.ReactElement;
export default Checkbox;

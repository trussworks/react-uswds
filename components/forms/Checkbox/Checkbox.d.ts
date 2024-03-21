import React from '../../../../node_modules/react';
type CheckboxProps = {
    id: string;
    name: string;
    className?: string;
    label: React.ReactNode;
    inputRef?: string | ((instance: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null | undefined;
    tile?: boolean;
    labelDescription?: React.ReactNode;
};
export declare const Checkbox: ({ id, name, className, label, inputRef, tile, labelDescription, ...inputProps }: CheckboxProps & JSX.IntrinsicElements['input']) => React.ReactElement;
export default Checkbox;

import React from 'react';
import { ValidationStatus } from '../../../types/validationStatus';
type SelectProps = {
    id: string;
    name: string;
    className?: string;
    children: React.ReactNode;
    validationStatus?: ValidationStatus;
    inputRef?: string | ((instance: HTMLSelectElement | null) => void) | React.RefObject<HTMLSelectElement> | null | undefined;
};
export declare const Select: ({ id, name, className, inputRef, children, validationStatus, ...inputProps }: SelectProps & JSX.IntrinsicElements['select']) => React.ReactElement;
export {};

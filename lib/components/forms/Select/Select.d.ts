import { ValidationStatus } from '../../../types/validationStatus.js';
import { default as React } from 'react';

export type SelectProps = {
    name: string;
    className?: string;
    validationStatus?: ValidationStatus;
    inputRef?: string | ((instance: HTMLSelectElement | null) => void) | React.RefObject<HTMLSelectElement> | null | undefined;
} & JSX.IntrinsicElements['select'];
declare const Select: ({ id, name, className, inputRef, children, validationStatus, ...inputProps }: SelectProps) => React.ReactElement;
export default Select;

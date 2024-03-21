import React from '../../../../node_modules/react';
import { ValidationStatus } from '../../../types/validationStatus';
type TextInputRef = string | ((instance: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null | undefined;
type RequiredTextInputProps = {
    id: string;
    name: string;
    type: 'text' | 'email' | 'number' | 'password' | 'search' | 'tel' | 'url';
};
type CustomTextInputProps = {
    className?: string;
    validationStatus?: ValidationStatus;
    inputSize?: 'small' | 'medium';
    inputRef?: TextInputRef;
    inputProps?: JSX.IntrinsicElements['input'];
};
export type OptionalTextInputProps = CustomTextInputProps & JSX.IntrinsicElements['input'];
export type TextInputProps = RequiredTextInputProps & OptionalTextInputProps;
export declare const TextInput: ({ id, name, type, className, validationStatus, inputSize, inputRef, ...inputProps }: TextInputProps) => React.ReactElement;
export default TextInput;

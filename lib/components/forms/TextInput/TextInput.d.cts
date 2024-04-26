import { ValidationStatus } from '../../../types/validationStatus.js';
import { default as React } from 'react';

export type TextInputRef = string | ((instance: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null | undefined;
export type RequiredTextInputProps = {
    id: string;
    name: string;
    type?: 'text' | 'email' | 'number' | 'password' | 'search' | 'tel' | 'url';
};
export type CustomTextInputProps = {
    className?: string;
    validationStatus?: ValidationStatus;
    inputSize?: 'small' | 'medium';
    inputRef?: TextInputRef;
    inputProps?: JSX.IntrinsicElements['input'];
};
export type OptionalTextInputProps = CustomTextInputProps & JSX.IntrinsicElements['input'];
export type TextInputProps = RequiredTextInputProps & OptionalTextInputProps;
declare const TextInput: ({ className, validationStatus, inputSize, inputRef, ...inputProps }: TextInputProps) => React.ReactElement;
export default TextInput;

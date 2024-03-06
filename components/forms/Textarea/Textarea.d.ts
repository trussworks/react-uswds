import React from 'react';
type TextareaRef = string | string | ((instance: HTMLTextAreaElement | null) => void) | React.RefObject<HTMLTextAreaElement> | null | undefined;
export interface TextareaProps {
    id: string;
    name: string;
    className?: string;
    error?: boolean;
    success?: boolean;
    children?: React.ReactNode;
    inputRef?: TextareaRef;
}
export declare const Textarea: ({ id, name, className, error, success, children, inputRef, ...inputProps }: TextareaProps & JSX.IntrinsicElements['textarea']) => React.ReactElement;
export default Textarea;

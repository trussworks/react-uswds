import { default as React } from 'react';

export type TextareaRef = string | string | ((instance: HTMLTextAreaElement | null) => void) | React.RefObject<HTMLTextAreaElement> | null | undefined;
export type TextareaProps = {
    id: string;
    name: string;
    className?: string;
    error?: boolean;
    success?: boolean;
    children?: React.ReactNode;
    inputRef?: TextareaRef;
} & JSX.IntrinsicElements['textarea'];
declare const Textarea: ({ id, name, className, error, success, children, inputRef, ...inputProps }: TextareaProps) => React.ReactElement;
export default Textarea;

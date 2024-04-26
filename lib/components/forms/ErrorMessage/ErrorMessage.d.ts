import { default as React } from 'react';

export type ErrorMessageProps = {
    children: React.ReactNode;
    id?: string;
    className?: string;
} & JSX.IntrinsicElements['span'];
declare const ErrorMessage: ({ children, className, id, ...props }: ErrorMessageProps) => React.ReactElement;
export default ErrorMessage;

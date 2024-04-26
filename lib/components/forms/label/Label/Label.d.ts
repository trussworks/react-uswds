import { default as React } from 'react';

export type LabelProps = {
    children: React.ReactNode;
    htmlFor: string;
    className?: string;
    error?: boolean;
    hint?: React.ReactNode;
    srOnly?: boolean;
    requiredMarker?: boolean;
} & JSX.IntrinsicElements['label'];
declare const Label: ({ children, htmlFor, className, error, hint, srOnly, requiredMarker, ...labelProps }: LabelProps) => React.ReactElement;
export default Label;

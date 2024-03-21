import React from '../../../../node_modules/react';
type LabelProps = {
    children: React.ReactNode;
    htmlFor: string;
    className?: string;
    error?: boolean;
    hint?: React.ReactNode;
    srOnly?: boolean;
    requiredMarker?: boolean;
};
export declare const Label: ({ children, htmlFor, className, error, hint, srOnly, requiredMarker, ...labelProps }: LabelProps & JSX.IntrinsicElements['label']) => React.ReactElement;
export default Label;

import React from 'react';
type FieldsetProps = {
    children: React.ReactNode;
    legend?: React.ReactNode;
    legendStyle?: 'default' | 'large' | 'srOnly';
    className?: string;
    requiredMarker?: boolean;
};
export declare const Fieldset: ({ children, legend, className, legendStyle, requiredMarker, ...fieldsetProps }: FieldsetProps & JSX.IntrinsicElements['fieldset']) => React.ReactElement;
export {};

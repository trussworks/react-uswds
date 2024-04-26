import { default as React } from 'react';

export type FieldsetProps = {
    children: React.ReactNode;
    legend?: React.ReactNode;
    legendStyle?: 'default' | 'large' | 'srOnly';
    className?: string;
    requiredMarker?: boolean;
} & JSX.IntrinsicElements['fieldset'];
declare const Fieldset: ({ children, legend, className, legendStyle, requiredMarker, ...fieldsetProps }: FieldsetProps) => React.ReactElement;
export default Fieldset;

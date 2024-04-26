import { default as React } from 'react';

export type FormGroupProps = {
    children: React.ReactNode;
    className?: string;
    error?: boolean;
} & JSX.IntrinsicElements['div'];
declare const FormGroup: ({ children, className, error, ...props }: FormGroupProps) => React.ReactElement;
export default FormGroup;

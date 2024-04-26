import { default as React } from 'react';

export type InputGroupProps = {
    children: React.ReactNode;
    className?: string;
    error?: boolean;
} & JSX.IntrinsicElements['div'];
declare const InputGroup: ({ children, className, error, ...props }: InputGroupProps) => React.ReactElement;
export default InputGroup;
